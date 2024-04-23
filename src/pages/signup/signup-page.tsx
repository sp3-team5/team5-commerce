import Head from 'next/head';

import * as S from './signup-page-style';

export const SignupPage = () => {
  return (
    <>
      <Head>
        <title>Pawland Signup</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <S.SignupPageContainer>
          <S.SignupPageTitleContainer>
            <S.SignupPageTitle>회원가입</S.SignupPageTitle>
            <S.SignupPageTitleSpan>회원가입에 필요한 정보를 입력해주세요.</S.SignupPageTitleSpan>
          </S.SignupPageTitleContainer>
          <S.SignupPageForm>
            <S.SignupPageInputContainer>
              <S.SignupInputIcon src='input-nickname-icon.svg' alt='input-nickname-icon' />
              <S.SignupPageInput placeholder='닉네임을 정해주세요.' />
            </S.SignupPageInputContainer>
            <S.SignupPageInputContainer>
              <S.SignupInputIcon src='input-email-icon.svg' alt='input-email-icon' />
              <S.SignupPageInput placeholder='이메일을 적어주세요.' />
            </S.SignupPageInputContainer>
            <S.SignupPageInputContainer>
              <S.SignupInputIcon src='input-password-icon.svg' alt='input-password-icon' />
              <S.SignupPageInput placeholder='비밀번호를 적어주세요.' />
            </S.SignupPageInputContainer>
            <S.SignupPageInputContainer>
              <S.SignupInputIcon src='input-password-icon.svg' alt='input-password-icon' />
              <S.SignupPageInput placeholder='비밀번호를 한 번 더 적어주세요.' />
            </S.SignupPageInputContainer>
            <S.SignupPageDisabledButton type='submit'>인증을 진행해 주세요.</S.SignupPageDisabledButton>
          </S.SignupPageForm>
          <S.SignupPageBottomContainer>
            <S.SignupPageBottomSpan>이미 포랜드 계정이 있으신가요?</S.SignupPageBottomSpan>
            <S.SignupPageBottomLink>로그인하기</S.SignupPageBottomLink>
          </S.SignupPageBottomContainer>
        </S.SignupPageContainer>
      </main>
    </>
  );
};
