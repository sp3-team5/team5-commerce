import { MouseEvent, useState } from 'react';
import { toast } from 'react-toastify';

import Image from 'next/image';

import { usePostMakeWishedMutation } from './hooks';
import { usePostCancelWishedMutation } from './hooks/use-post-cancel-wished-mutation';

interface WishItemButtonProps {
  id: number;
  initialIsWished: boolean;
  /**
   * 버튼 너비 : default 42
   */
  width?: number;
  /**
   * 버튼 높이 : default 35
   */
  height?: number;
}

/**
 * 찜 버튼
 */

const WishItemButton = ({ id, initialIsWished, width = 42, height = 35 }: WishItemButtonProps) => {
  const [isWishedChange, setIsWishedChange] = useState(initialIsWished);
  const { mutate: makeWishedMutate } = usePostMakeWishedMutation();
  const { mutate: cancelWishedMutate } = usePostCancelWishedMutation();

  const handleClickWishButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isWishedChange) {
      makeWishedMutate(id, {
        onSuccess: () => {
          return toast.success('찜 상품에 등록되었습니다.');
        },
      });
    } else {
      cancelWishedMutate(id, {
        onSuccess: () => {
          return toast.success('찜 상품에서 삭제되었습니다.');
        },
      });
    }

    setIsWishedChange((prev) => !prev);
  };

  return (
    <>
      <button type='button' onClick={handleClickWishButton}>
        {isWishedChange ? (
          <Image src='/images/button/wish-button-on.png' alt='찜하기 취소' width={width} height={height} />
        ) : (
          <Image src='/images/button/wish-button-off.png' alt='찜하기' width={width} height={height} />
        )}
      </button>
    </>
  );
};

export { WishItemButton };
