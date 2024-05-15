import { SelectHTMLAttributes } from 'react';
import { ProductListItemDto } from '../product-api';
import { UserEntity } from '../user-api';

export interface MyCommunityPostEntity {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  views: number;
  comments: [];
  commentCount: number;
  recommendCount: number;
  createdAt: string;
  region: string;
}

export interface MyCommunityListEntity {
  content: MyCommunityPostEntity[];
}

type Author = {
  id: number;
  email: string;
  nickname: string;
  profileImage: string;
  star?: number;
  reviewCount?: number;
};

type Comment = {
  id: number;
  author: Author;
  content: string;
  recommendCount: number;
  createdAt: string;
};

export interface UserCommunityPostEntity {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  region: string;
  views: number;
  author: Author;
  comments: Comment[];
  createdAt: string;
  recommendCount: number;
  recommended: boolean;
}

export type UserCommunityListEntity = UserCommunityPostEntity[];

export type MyCommunityListResponse = Array<{
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  region: string;
  views: number;
  author: Pick<UserEntity, 'id' | 'email' | 'nickname'>;
  commentCount: number;
}>;

export type MyProductListEntity = ProductListItemDto[];

export interface MyWishProductEntity {
  id: number;
  status: string;
  thumbnailUrl: string;
  price: number;
  name: string;
  createdAt: string;
  wished: boolean;
}

export type MyWishListEntity = ProductListItemDto[];

export interface getMyProductListParams {
  page: number;
  size: number;
  type: string;
}

export interface Seller {
  id: number;
  email: string;
  nickname: string;
  profileImage: string;
  star: number;
  reviewCount: number;
}

export type Buyer = Seller;

export interface OderReviewResponse {
  id: number;
  content: string;
  star: number;
  createdAt: string;
}

export interface MyTransactionEntity {
  id: number;
  seller: Seller;
  buyer: Buyer;
  product: ProductListItemDto;
  sellerCheck: boolean;
  buyerCheck: boolean;
  orderStatus: string;
  orderReviewResponse: OderReviewResponse;
}

export type MyTransactionListEntity = MyTransactionEntity[];
