import Image from 'next/image';
import styled from 'styled-components';

import { mainProductInfo } from '@shared/apis/main-list-api/dto';

import { WishItemButton } from './whish-item-button';

interface ThumbnailProps {
  item: mainProductInfo;
}

const Thumbnail = ({ item }: ThumbnailProps) => {
  return (
    <SProductThumbnaile className='thumbnail'>
      <Image
        width={276}
        height={276}
        placeholder='blur'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvHhTPQAGYgJ5cH4fHAAAAABJRU5ErkJggg=='
        className='thumbnail-image'
        src={item.imageThumbnail}
        alt={`${item.productName} 상품의 대표 이미지`}
      />
      <WishItemButton isWished={item.isWished} />
    </SProductThumbnaile>
  );
};

export { Thumbnail };

const SProductThumbnaile = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-bottom: 100%;

  .thumbnail-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);

    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;