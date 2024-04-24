import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import Head from 'next/head';

import * as S from './signup-page-style';

export const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPasswordConfirmation = () => {
    setShowPasswordConfirmation(!showPasswordConfirmation);
  };

  // 닉네임 중복 체크 아직 백엔드 구현 안 됨
  // const dupCheckNickname = async (nickname) => {
  //   if (!nickname) {
  //     return;
  //   }

  //   const response = await fetch(`http://43.200.183.10:8080/api/auth/nickname-dupcheck`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       nickname,
  //     }),
  //   });

  //   if (response.status === 400) {
  //     setError('nickname', {
  //       type: 'manual',
  //       message: '이미 사용 중인 닉네임입니다.',
  //     });
  //   }
  // };

  const dupCheckEmail = async (email) => {
    if (!email) {
      return;
    }

    const response = await fetch(`http://43.200.183.10:8080/api/auth/email-dupcheck`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    });

    if (response.status === 400) {
      setError('email', {
        type: 'manual',
        message: '이미 사용 중인 이메일입니다.',
      });
    }
  };

  const [emailVerified, setEmailVerified] = useState(false);
  const [verificationCodeEntered, setVerificationCodeEntered] = useState('');

  const [timer, setTimer] = useState(180);
  const timerInterval = useRef(null);

  const handleVerifyEmail = async () => {
    await fetch(`http://43.200.183.10:8080/api/auth/send-verification-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    });
    setEmailVerified(true);
    // 인증 메일 발송 알림 모달 띄우기
    setTimer(180);
  };

  const [verificationSuccess, setVerificationSuccess] = useState(false);

  const handleCompleteVerification = async () => {
    // 이메일 인증 완료 관련 API 호출
    const response = await fetch(`http://43.200.183.10:8080/api/auth/verify-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: verificationCodeEntered,
        email,
      }),
    });

    if (response.status === 200) {
      setVerificationSuccess(true);
      // 인증 완료 알림 모달 띄우기
      clearInterval(timerInterval.current);
    }

    if (response.status === 400) {
      // 잘못된 인증번호 알림 모달 띄우기
      console.log('잘못된 인증번호입니다. 다시 시도해주세요.');
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const password = watch('password');
  const email = watch('email');

  useEffect(() => {
    if (emailVerified && timer > 0) {
      timerInterval.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    if (timer === 0) {
      clearInterval(timerInterval.current);
      alert('인증번호 입력 시간이 만료되었습니다. 다시 시도해주세요.');
      setEmailVerified(false);
      setVerificationSuccess(false);
      setTimer(180);
    }

    return () => clearInterval(timerInterval.current);
  }, [emailVerified, timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const onSubmit = async (data) => {
    const response = await fetch(`http://43.200.183.10:8080/api/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nickname: data.nickname,
        email: data.email,
        password: data.password,
      }),
    });

    if (response.status === 201) {
      // 회원가입 완료 관련 알림 모달 띄우기
      console.log('회원가입이 완료되었습니다.');
    }
  };

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
          <S.SignupPageForm noValidate onSubmit={handleSubmit(onSubmit)}>
            <S.SignupPageInputContainer>
              <S.SignupInputIcon src='input-nickname-icon.svg' alt='input-nickname-icon' />
              <S.SignupPageInput
                type='text'
                placeholder='닉네임을 정해주세요.'
                style={{ borderColor: errors.nickname && 'red' }}
                {...register('nickname', {
                  required: '* 닉네임을 입력해주세요.',
                  minLength: {
                    value: 2,
                    message: '* 2자 이상의 닉네임을 입력해주세요.',
                  },
                  maxLength: {
                    value: 10,
                    message: '* 10자 이하의 닉네임을 입력해주세요.',
                  },
                  pattern: {
                    value: /^[가-힣a-zA-Z0-9]{2,10}$/,
                    message: '* 한글, 영문, 숫자만 입력 가능합니다.',
                  },
                  // 아직 백엔드 구현 안 됨
                  // onBlur: (e) => dupCheckNickname(e.target.value),
                })}
              />
              {errors.nickname && <S.SignupPageErrorSpan>{errors.nickname.message}</S.SignupPageErrorSpan>}
            </S.SignupPageInputContainer>
            <S.SignupPageInputContainer>
              <S.SignupInputIcon src='input-email-icon.svg' alt='input-email-icon' />
              <S.SignupPageInput
                type='email'
                placeholder='이메일을 입력해주세요.'
                style={{ borderColor: errors.email && 'red' }}
                {...register('email', {
                  required: '* 이메일을 입력해주세요.',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: '* 이메일 형식이 올바르지 않습니다.',
                  },
                  onBlur: (e) => dupCheckEmail(e.target.value),
                })}
              />
              {emailVerified ? (
                <S.SignupPageEmailVerificationReSendButton
                  onClick={handleVerifyEmail}
                  type='button'
                  style={{ backgroundColor: verificationSuccess ? '#9E9E9E' : '#2087D6' }}
                  disabled={!email || errors.email || verificationSuccess}
                >
                  재전송
                </S.SignupPageEmailVerificationReSendButton>
              ) : (
                <S.SignupPageEmailVerificationButton
                  onClick={handleVerifyEmail}
                  type='button'
                  style={{ backgroundColor: !email || errors.email ? '#9E9E9E' : '#F5511D' }}
                  disabled={!email || errors.email || verificationSuccess}
                >
                  인증받기
                </S.SignupPageEmailVerificationButton>
              )}

              {errors.email && <S.SignupPageErrorSpan>{errors.email.message}</S.SignupPageErrorSpan>}
            </S.SignupPageInputContainer>
            {emailVerified && (
              <S.SignupPageInputContainer>
                <S.SignupInputIcon src='input-email-icon.svg' alt='input-email-icon' />
                <S.SignupPageVerifyInput
                  {...register('verificationCode', {
                    required: '* 인증번호를 입력해주세요.',
                  })}
                  onChange={(e) => setVerificationCodeEntered(e.target.value)}
                  placeholder='인증번호를 입력해주세요.'
                  style={{ borderColor: errors.verificationCode && 'red' }}
                />
                <S.SignupPageTimerSpan>{formatTime(timer)}</S.SignupPageTimerSpan>
                {verificationSuccess ? (
                  <S.SignupPageEmailVerificationDisabledButton type='button' disabled={verificationSuccess}>
                    인증완료
                  </S.SignupPageEmailVerificationDisabledButton>
                ) : (
                  <S.SignupPageEmailVerificationButton
                    type='button'
                    style={{ backgroundColor: verificationCodeEntered ? '#F5511D' : '#9E9E9E' }}
                    disabled={!verificationCodeEntered || verificationSuccess}
                    onClick={handleCompleteVerification}
                  >
                    인증완료
                  </S.SignupPageEmailVerificationButton>
                )}
              </S.SignupPageInputContainer>
            )}
            <S.SignupPageInputContainer>
              <S.SignupInputIcon src='input-password-icon.svg' alt='input-password-icon' />
              <S.SignupPageInput
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
              <S.SignupInputPasswordShowOrHideButton type='button' onClick={toggleShowPassword}>
                <img
                  src={showPassword ? '/input-eye-open-icon.svg' : '/input-eye-close-icon.svg'}
                  alt='show-or-hide-password-icon'
                />
              </S.SignupInputPasswordShowOrHideButton>
              {errors.password && <S.SignupPageErrorSpan>{errors.password.message}</S.SignupPageErrorSpan>}
            </S.SignupPageInputContainer>
            <S.SignupPageInputContainer>
              <S.SignupInputIcon src='input-password-icon.svg' alt='input-password-confirm-icon' />
              <S.SignupPageInput
                type={showPasswordConfirmation ? 'text' : 'password'}
                placeholder='비밀번호를 한 번 더 적어주세요.'
                style={{ borderColor: errors.password && 'red' }}
                {...register('passwordConfirmation', {
                  required: '* 비밀번호를 입력해주세요.',
                  validate: (value) => value === password || '비밀번호가 일치하지 않습니다.',
                })}
              />
              <S.SignupInputPasswordShowOrHideButton type='button' onClick={toggleShowPasswordConfirmation}>
                <img
                  src={showPasswordConfirmation ? '/input-eye-open-icon.svg' : '/input-eye-close-icon.svg'}
                  alt='show-or-hide-password-confirmation-icon'
                />
              </S.SignupInputPasswordShowOrHideButton>
              {errors.passwordConfirmation && (
                <S.SignupPageErrorSpan>{errors.passwordConfirmation.message}</S.SignupPageErrorSpan>
              )}
            </S.SignupPageInputContainer>
            {verificationSuccess ? (
              <S.SignupPageSubmitButton type='submit'>회원가입</S.SignupPageSubmitButton>
            ) : (
              <S.SignupPageDisabledButton type='submit' disabled>
                인증을 진행해 주세요.
              </S.SignupPageDisabledButton>
            )}
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
