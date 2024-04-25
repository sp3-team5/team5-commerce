import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as S from './login-page-style';

export const LoginPage = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const [showPassword, setShowPassword] = useState(false);
  const [rememberCredentials, setRememberCredentials] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');

    if (storedEmail) {
      setValue('email', storedEmail, { shouldValidate: true });
      setRememberCredentials(true);
    }
  }, []);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = async (data) => {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    if (response.status === 200) {
      // 로그인 완료 관련 알림 모달 띄우기
      console.log('로그인이 완료되었습니다.');

      if (rememberCredentials) {
        localStorage.setItem('email', data.email);
      } else {
        localStorage.removeItem('email');
      }

      router.push('/');
    }

    if (response.status === 400) {
      // 로그인 실패 관련 알림 모달 띄우기
      console.log('아이디와 비밀번호를 확인해주세요.');
    }
  };

  return (
    <>
      <Head>
        <title>Pawland Login</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <S.LoginPageContainer>
          <S.LoginPageTitleContainer>
            <S.LoginPageLogo src='pawland-logo.svg' />
          </S.LoginPageTitleContainer>
          <S.LoginPageForm noValidate onSubmit={handleSubmit(onSubmit)}>
            <S.LoginPageInputContainer>
              <S.LoginInputIcon src='input-email-icon.svg' alt='input-email-icon' />
              <S.LoginPageInput
                type='email'
                placeholder='이메일을 입력해주세요.'
                style={{ borderColor: errors.email && 'red' }}
                {...register('email', {
                  required: '이메일을 입력해주세요.',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: '이메일 형식이 올바르지 않습니다.',
                  },
                })}
              />
            </S.LoginPageInputContainer>

            <S.LoginPageInputContainer>
              <S.LoginInputIcon src='input-password-icon.svg' alt='input-password-icon' />
              <S.LoginPageInput
                type={showPassword ? 'text' : 'password'}
                placeholder='비밀번호를 적어주세요.'
                style={{ borderColor: errors.password && 'red' }}
                {...register('password', {
                  required: '비밀번호를 입력해주세요.',
                  minLength: {
                    value: 8,
                    message: '영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.',
                  },
                  pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
                    message: '영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.',
                  },
                })}
              />
              <S.LoginInputPasswordShowOrHideButton type='button' onClick={toggleShowPassword}>
                <img
                  src={showPassword ? '/input-eye-open-icon.svg' : '/input-eye-close-icon.svg'}
                  alt='show-or-hide-password-icon'
                />
              </S.LoginInputPasswordShowOrHideButton>
            </S.LoginPageInputContainer>

            {errors.email && (
              <S.LoginPageErrorContainer>
                <S.LoginPageErrorWrapper />
                <S.LoginPageErrorIcon src='login-error-icon.svg' alt='login-error-icon' />
                <S.LoginPageErrorSpan>{errors.email.message}</S.LoginPageErrorSpan>
              </S.LoginPageErrorContainer>
            )}
            {errors.password && (
              <S.LoginPageErrorContainer>
                <S.LoginPageErrorWrapper />
                <S.LoginPageErrorIcon src='login-error-icon.svg' alt='login-error-icon' />
                <S.LoginPageErrorSpan>{errors.password.message}</S.LoginPageErrorSpan>
              </S.LoginPageErrorContainer>
            )}
            <S.LoginCredentialsSaveContainer>
              <S.LoginCredentailsSaveCheckbox
                type='checkbox'
                checked={rememberCredentials}
                onChange={(e) => setRememberCredentials(e.target.checked)}
              />
              <S.LoginPageBottomSpan>이메일 저장</S.LoginPageBottomSpan>
            </S.LoginCredentialsSaveContainer>
            <S.LoginPageSubmitButton>로그인</S.LoginPageSubmitButton>
          </S.LoginPageForm>
          <Link href='/signup'>
            <S.LinkToSignupPageButton>회원가입</S.LinkToSignupPageButton>
          </Link>
          <S.SocialLoginContainer>
            <S.SocialLoginWrapper>
              <S.LoginPageBottomBorderLine />
            </S.SocialLoginWrapper>
            <S.SocialLoginWrapper>
              <S.LoginPageBottomSpan>SNS 계정으로 간편 로그인/회원가입</S.LoginPageBottomSpan>
            </S.SocialLoginWrapper>
            <S.SocialLoginWrapper>
              <S.SocialLoginLogo src='naver-logo.svg' alt='naver-logo-icon' />
              <S.SocialLoginLogo src='kakao-logo.svg' alt='kakao-logo-icon' />
              <S.SocialLoginLogo src='google-logo.svg' alt='google-logo-icon' />
            </S.SocialLoginWrapper>
          </S.SocialLoginContainer>
        </S.LoginPageContainer>
      </main>
    </>
  );
};
