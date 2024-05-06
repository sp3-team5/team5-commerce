import { useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NicknameWithAvatar } from '@entities/nickname-with-avatar';
import { useGetUserInfo } from '@entities/user/hooks';
import { useUserStore } from '@entities/user/model';
import { CommonButton } from '@shared/ui/buttons';

import * as S from './header-style';

const Header = () => {
  const router = useRouter();

  const { data, status } = useGetUserInfo();

  // const { setUserInfo, clearUserInfo } = useUserStore((state) => ({
  //   setUserInfo: state.setUserInfo,
  //   clearUserInfo: state.clearUserInfo,
  // }));

  const handleClickLogin = () => {
    router.push('/login');
  };

  // useEffect(() => {
  //   if (status === 'error') {
  //     // TOOD: 보호할 페이지 구분 처리 해놔야 함.
  //     console.error('유저 정보를 가져오는데 실패했습니다.');
  //     clearUserInfo();
  //     router.push('/login');
  //   }

  //   if (status === 'success' && data) {
  //     setUserInfo(data);
  //   }
  // }, [data, status, router, setUserInfo]);

  return (
    <>
      <S.HeaderArea>
        <S.HeaderContainer>
          <S.LogoBox>
            <Link href='/'>
              <Image src='/images/logo/main-logo.svg' alt='Pawland 로고' width={63} height={40} />
            </Link>
          </S.LogoBox>
          <S.NavContainer>
            <ul>
              <li>
                <Link href='/product'>중고거래</Link>
              </li>
              <li>
                <Link href='/community/list'>커뮤니티</Link>
              </li>
              <li>
                <Link href='/'>반려동물동반</Link>
              </li>
              <li>
                <Link href='/'>이벤트</Link>
              </li>
            </ul>
          </S.NavContainer>
          {status === 'success' && data ? (
            <S.LinkGroupContainer>
              <div className='link-box'>
                <Link href='/'>
                  <Image width={32} height={32} src='/images/icon/bell-icon.svg' alt='알람 아이콘' />
                </Link>
                <Link href='/chat'>
                  <Image width={32} height={32} src='/images/icon/chat-icon.svg' alt='채팅 아이콘' />
                </Link>
              </div>
              <NicknameWithAvatar nickname={data.nickname} imageSrc={data.profileImage} />
            </S.LinkGroupContainer>
          ) : (
            <CommonButton maxWidth='172px' fontWeight='700' handleClick={handleClickLogin}>
              로그인/회원가입
            </CommonButton>
          )}
        </S.HeaderContainer>
      </S.HeaderArea>
    </>
  );
};

export { Header };
