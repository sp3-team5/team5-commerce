import { UserEntity } from '../user-api';

export type SaleState = 'selling' | 'canceled' | 'completed';

export type Category = 'food' | 'toy' | 'clothes' | 'accessory' | 'etc';

export type Region =
  | '서울'
  | '부산'
  | '대구'
  | '인천'
  | '광주'
  | '대전'
  | '울산'
  | '세종'
  | '경기'
  | '강원'
  | '충북'
  | '충남'
  | '전북'
  | '전남'
  | '경북'
  | '경남'
  | '제주'
  | '해외';

export type Species = 'dog' | 'cat' | 'etc';

/**
 * 중고인지 여부
 */
export type ProductCondition = 'new' | 'used';

/**
 * 상품 정보 entity
 *
 */
export interface ProductInfoEntity {
  /**
   * product Id
   */
  id: number;
  /**
   * 상품이 등록된 카테고리
   */
  category: Category;
  /**
   * 상품 가격
   */
  price: number;
  /**
   * 상품 이름
   */
  productName: string;
  /**
   * 상품이 등록된 지역
   */
  region: Region;
  /**
   * 동물 종류
   */
  species: Species;
  /**
   * 상품 조회수
   */
  views: number;
  /**
   * 대표 이미지
   */
  imageThumbnail: string;
  /**
   * contents 필드의 내용에서 추출된 이미지들(상품 설명 내용에 포함된 이미지들)
   */
  imageUrls: string[];
  /**
   * 상품 소개글(내용 + 이미지) string HTML 형태로
   */
  description: string;
  /**
   * 판매자 정보. 판매자 === 상품 판매글 작성자. User Entity 참고
   */
  seller: UserEntity;
  /**
   * 상품 등록일
   */
  createdAt: string;
  /**
   * 판매중/판매취소/판매완료
   */
  saleState: SaleState;
  /**
   * 중고/새 상품 여부
   */
  productCondition: ProductCondition;
}
