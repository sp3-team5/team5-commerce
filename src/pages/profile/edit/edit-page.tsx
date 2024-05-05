import { useState } from 'react';

import Head from 'next/head';

import * as S from './edit-page-style';
import { CommonButton } from '../../../shared/ui/buttons/index';

export const EditPage = () => {
  const [nickname, setNickname] = useState('닉네임');

  const [description, setDescription] = useState(
    '안녕하세요 반가워요 쿨거래 원해요~~  강아지 고양이 사랑합니다!!! 두부랑 토리 강아지 두 마리 엄마입니당!!!',
  );

  return (
    <>
      <Head>
        <title>Pawland Profile</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <S.EditPage>
          <S.PageTitle>프로필</S.PageTitle>
          <S.InfoContainer>
            <S.ProfileImage src='/images/mock/profileImage.png' alt='프로필 이미지' width={200} height={200} />
            <S.EditButtonArea>
              <S.ImageEditButton>바꾸기</S.ImageEditButton>
              <S.ImageEditButton>삭제</S.ImageEditButton>
            </S.EditButtonArea>
            <S.InputArea>
              <S.InputItem>
                <S.Label htmlFor='name'>닉네임</S.Label>
                <div>
                  <S.NicknameInput
                    type='text'
                    id='name'
                    name='nickname'
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                  />
                  <CommonButton
                    borderRadius={'4px'}
                    backgroundColor={'#43ADFF'}
                    maxWidth={'65px'}
                    fontSize={'1.2rem'}
                    padding={'6px 10px'}
                  >
                    변경하기
                  </CommonButton>
                </div>
              </S.InputItem>

              <S.InputItem>
                <S.Label htmlFor='description'>소개</S.Label>
                <S.DescriptionInput
                  id='description'
                  name='description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <S.SaveButtonArea>
                  <CommonButton
                    borderRadius={'4px'}
                    backgroundColor={'#43ADFF'}
                    maxWidth={'65px'}
                    fontSize={'1.2rem'}
                    padding={'6px 10px'}
                  >
                    저장하기
                  </CommonButton>
                </S.SaveButtonArea>
              </S.InputItem>
            </S.InputArea>
            <S.LoginInfoArea>
              <S.Label htmlFor='idInfo'>아이디 정보</S.Label>
              <S.LoginInformation> 카카오로 로그인 되었습니다.</S.LoginInformation>
            </S.LoginInfoArea>

            <S.BigButtonArea>
              <S.BigButton>비밀번호 변경하기</S.BigButton>
              <S.BigButton>로그아웃</S.BigButton>
              <S.UnregisterButton>회원탈퇴</S.UnregisterButton>
            </S.BigButtonArea>
          </S.InfoContainer>
        </S.EditPage>
      </main>
    </>
  );
};
