import { useEffect } from 'react';

import { Loading } from '@app/layout/loading';
import { useGetSearchResultList } from '@entities/product/hooks/use-get-search-result-list.query';
import { ProductFlexList } from '@entities/product/ui';
import { NoProductBox } from '@shared/ui/error';

/**
 * 상품 리스트 (검색 결과) + 페이지네이션 같이 있는 컴포넌트
 */

const ProductSearchResultList = () => {
  const initialParams = {
    page: 1,
    size: 12,
    region: '',
    species: '',
    category: '',
    isFree: false,
    orderBy: '',
  };

  const { data, isError, isLoading } = useGetSearchResultList(initialParams);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>에러 발생!</p>;
  }

  if (data) {
    if (data.content.length > 0) {
      return <ProductFlexList listData={data.content} />;
    }
  }

  return <NoProductBox />;
};

export { ProductSearchResultList };
