import { FormEvent, useRef } from 'react';

import Head from 'next/head';

import { SearchInput } from '@shared/ui/inputs';
import { categoryData, CategoryList } from '@widgets/category-list';
import { MainbannerSwiper } from '@widgets/main-banner-swiper';
import { mainBannerData } from '@widgets/main-banner-swiper/lib/main-banner-data';

import * as S from './home-page-style';
import { MainProductList } from './ui/main-product-list';

export const HomePage = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmitKeyword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(inputRef?.current?.value);
  };

  return (
    <>
      <Head>
        <title>Pawland Home</title>
        <meta name='description' content='Generated by create next app' />
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <S.HomePage>
        <S.SwiperArea>
          <MainbannerSwiper mainBannerList={mainBannerData} />
        </S.SwiperArea>
        <S.InputArea>
          <SearchInput
            handleSubmit={handleSubmitKeyword}
            inputRef={inputRef}
            placeholder='원하시는 상품을 검색해보세요!'
            maxWidth='940px'
          />
        </S.InputArea>
        <S.CategoryArea>
          <CategoryList categoryList={categoryData} />
        </S.CategoryArea>
        <MainProductList />
      </S.HomePage>
    </>
  );
};
