import { ReactNode } from 'react';

import { styled } from 'styled-components';

import { likePre } from '@shared/ui/styles/utils/text-style';

interface ProductRegisterCategoryMetaProps {
  metaTitle: ReactNode;
  metaDescription?: ReactNode;
  /**
   * 기본값 true.
   * true면 * 표시가 붙는다.
   */
  isRequired?: boolean;
  /**
   * unit: px
   */
  rowGap?: number;
}

/**
 * meta 최대 너비가 제각각임.
 */
export const ProductRegisterCategoryMeta = ({
  metaTitle,
  metaDescription,
  isRequired = true,
  rowGap = 9,
}: ProductRegisterCategoryMetaProps) => {
  return (
    <S.MetaWrap>
      <S.MetaBox $rowGap={rowGap}>
        <S.MetaTitle>
          {metaTitle} <S.RequireStarMarker $isRequired={isRequired}>*</S.RequireStarMarker>
        </S.MetaTitle>
        {metaDescription ? <S.MetaDescription>{metaDescription}</S.MetaDescription> : null}
      </S.MetaBox>
    </S.MetaWrap>
  );
};

const S = {
  MetaWrap: styled.div`
    display: flex;
    flex-shrink: 0;
    justify-content: flex-start;

    width: 513px;
    max-width: 513px;
  `,
  MetaBox: styled.div<{ $rowGap: NonNullable<ProductRegisterCategoryMetaProps['rowGap']> }>`
    display: flex;
    flex-direction: column;
    row-gap: ${({ $rowGap }) => $rowGap}px;
    align-items: flex-start;

    /* width: 90%; */

    /* max-width: 400px; */
  `,
  MetaTitle: styled.h2`
    font-size: 2.8rem;
    font-weight: 700;
    line-height: normal;
    color: #222;
  `,
  RequireStarMarker: styled.span<{ $isRequired: boolean }>`
    display: ${({ $isRequired }) => ($isRequired ? 'inline' : 'none')};
    font-size: 2.8rem;
    font-weight: 700;
    color: ${({ theme: { color } }) => color.blue_43ADFF};
  `,
  MetaDescription: styled.p`
    margin-top: 9px;

    font-size: 2rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme: { color } }) => color.gray_9E9E9E};

    ${likePre}
  `,
};
