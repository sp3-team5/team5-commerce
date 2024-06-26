import { useEffect, useId, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';

import { useShallow } from 'zustand/react/shallow';

import { UseChatFormTextareaSizeControlReturn } from '@entities/chat/hooks';
import { useChatStore } from '@entities/chat/model';
import { ChatRequest } from '@shared/apis/chat-api';
import { GetUserInfoResponse } from '@shared/apis/user-api';

import * as S from './style';

interface SendChatFormProps extends UseChatFormTextareaSizeControlReturn {
  userInfo: GetUserInfoResponse;
}

export const SendChatForm = ({
  changedTextAreaHeight,
  handleResizeHeight,
  observerTargetRef,
  textAreaRef,
  userInfo,
}: SendChatFormProps) => {
  const uniqueFormId = useId();

  const { selectedChatRoomId, sendChatMessage } = useChatStore(
    useShallow((state) => ({ selectedChatRoomId: state.selectedChatRoomId, sendChatMessage: state.sendChatMessage })),
  );

  const { register, handleSubmit, reset } = useForm<{ message: string }>({
    defaultValues: {
      message: '',
    },
    mode: 'onBlur',
  });

  // @see {@link https://react-hook-form.com/faqs#Howtosharerefusage}
  const { ref: messageFieldRegisterRef, ...messageFieldRegistRest } = register('message', {
    required: {
      value: true,
      message: '메세지를 입력해주세요.',
    },
  });
  useImperativeHandle(messageFieldRegisterRef, () => textAreaRef.current, []);

  const onSubmit = ({ message }: { message: string }) => {
    if (userInfo === undefined) {
      console.error('userInfo is undefined on ChatRoom component');

      return;
    }

    const chatTypeRequest: ChatRequest = {
      sender: userInfo.id,
      message,
      messageTime: new Date(),
    };

    // TODO: 성공여부 판단해서 성공하면 reset하기
    try {
      sendChatMessage({ chatRequestBody: chatTypeRequest });
    } catch (err) {
      console.error(err);

      // 소켓없거나 userId undefined일 때 입력값 지워지지 않게 early return
      return;
    }

    reset();
    handleResizeHeight();
  };

  /**
   * - 문제: textarea의 특성상 엔터를 누르면 onSubmit이 실행되지 않고 줄바꿈이 발생하는 문제
   * - 해결: 엔터로 전송, shift+엔터로 줄바꿈
   */
  const handleEnter = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // textArea 기본동작 막기
      await handleSubmit(onSubmit)();
    }
  };

  // roomId가 바뀔 때마다 reset
  useEffect(() => {
    if (selectedChatRoomId === undefined) {
      return;
    }

    reset();
    handleResizeHeight();
  }, [selectedChatRoomId]);

  return (
    <S.ChatRoomFooter $textAreaChangedHeight={changedTextAreaHeight.changedHeight}>
      <S.ChatForm
        $textAreaChangedHeight={changedTextAreaHeight.changedHeight}
        id={uniqueFormId}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <S.ChatTextArea
          $textAreaCurrentHeight={changedTextAreaHeight.currentHeight}
          {...messageFieldRegistRest}
          ref={(node) => {
            if (node) {
              textAreaRef.current = node;
              observerTargetRef.current = node;
            }
          }}
          onInput={handleResizeHeight}
          onBlur={handleResizeHeight}
          rows={1}
          readOnly={false}
          placeholder='메세지 입력...'
          onKeyDown={handleEnter}
        />
        <S.ChatSendButtonContainer>
          <S.ChatSendButton form={uniqueFormId} type='submit'>
            <S.AirplaneIcon />
          </S.ChatSendButton>
        </S.ChatSendButtonContainer>
      </S.ChatForm>
    </S.ChatRoomFooter>
  );
};
