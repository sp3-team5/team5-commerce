import { getMyCommunityList, getMyProductList, getMyProductListParams } from '@shared/apis/profile-api';
import { queryOptions } from '@tanstack/react-query';

export const myCommunityQueryKeys = {
  all: () => ['myCommunityList'],
  myCommunityList: (page: number) => [...myCommunityQueryKeys.all(), page],
};

export const myCommunityQuery = {
  all: () =>
    queryOptions({
      queryKey: myCommunityQueryKeys.all(),
    }),

  myCommunityList: (page: number) =>
    queryOptions({
      queryKey: myCommunityQueryKeys.myCommunityList(page),
      queryFn: () => getMyCommunityList(page),
      staleTime: 3 * 60 * 1000,
    }),
};

export const myProductQueryKeys = {
  all: () => ['myProductList'],
  myProductList: ({ page, size }: getMyProductListParams) => [...myProductQueryKeys.all(), { page, size }],
};

export const myProductQuery = {
  all: () =>
    queryOptions({
      queryKey: myProductQueryKeys.all(),
    }),

  myProductList: ({ page, size }: getMyProductListParams) =>
    queryOptions({
      queryKey: myProductQueryKeys.myProductList({ page, size }),
      queryFn: () => getMyProductList({ page, size }),
      staleTime: 3 * 60 * 1000,
    }),
};