import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Head from 'next/head';

import * as S from './login-page-style';

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = async (data) => {
    const response = await fetch(`http://43.200.183.10:8080/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    if (response.status === 201) {
      // 로그인 완료 관련 알림 모달 띄우기
      console.log('로그인이 완료되었습니다.');
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
            <h1>로고</h1>
          </S.LoginPageTitleContainer>
          <S.LoginPageForm noValidate onSubmit={handleSubmit(onSubmit)}>
            <S.LoginPageInputContainer>
              <S.LoginInputIcon src='input-email-icon.svg' alt='input-email-icon' />
              <S.LoginPageInput
                type='email'
                placeholder='이메일을 입력해주세요.'
                style={{ borderColor: errors.email && 'red' }}
                {...register('email', {
                  required: '* 이메일을 입력해주세요.',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: '* 이메일 형식이 올바르지 않습니다.',
                  },
                })}
              />
            </S.LoginPageInputContainer>
            {errors.email && <S.LoginPageErrorSpan>{errors.email.message}</S.LoginPageErrorSpan>}
            <S.LoginPageInputContainer>
              <S.LoginInputIcon src='input-password-icon.svg' alt='input-password-icon' />
              <S.LoginPageInput
                type={showPassword ? 'text' : 'password'}
                placeholder='비밀번호를 적어주세요.'
                style={{ borderColor: errors.password && 'red' }}
                {...register('password', {
                  required: '* 비밀번호를 입력해주세요.',
                  minLength: {
                    value: 8,
                    message: '* 영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.',
                  },
                  pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
                    message: '* 영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.',
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
            {errors.password && <S.LoginPageErrorSpan>{errors.password.message}</S.LoginPageErrorSpan>}
          </S.LoginPageForm>
          <S.LoginPageBottomContainer>
            <S.LoginPageBottomSpan>포랜드 계정이 없으신가요?</S.LoginPageBottomSpan>
            <S.LoginPageBottomLink>회원가입</S.LoginPageBottomLink>
          </S.LoginPageBottomContainer>
        </S.LoginPageContainer>
      </main>
    </>
  );
};
