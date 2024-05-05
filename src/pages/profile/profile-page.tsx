import Head from 'next/head';

import * as S from './profile-page-style';
import { useActiveButtonStore } from '../../shared/store/use-active-button-store/use-active-button-store';
import { CommunityList } from '../../widgets/community-list/community-list';
import { ProfilePageMenuBar } from '../../widgets/profile-page-menu-bar/profile-page-menu-bar';
import { RegisteredProductList } from '../../widgets/registered-product-list/registered-product-list';
import { TransactionHistoryList } from '../../widgets/transaction-history-list/transaction-history-list';
import { UserInfoArea } from '../../widgets/user-info-area/user-info-area';
import { UserLoginInfoArea } from '../../widgets/user-login-info-area/user-login-info-area';
import { WishList } from '../../widgets/wish-list/wish-list';

interface ActiveButtonState {
  activeButton: string;
}

export const ProfilePage = () => {
  const activeButton = useActiveButtonStore((state: ActiveButtonState) => state.activeButton);

  const renderComponent = () => {
    switch (activeButton) {
      case 'register':
        return <RegisteredProductList />;
      case 'wish':
        return <WishList />;
      case 'transaction':
        return <TransactionHistoryList />;
      case 'community':
        return <CommunityList />;
      default:
        return <RegisteredProductList />;
    }
  };

  return (
    <>
      <Head>
        <title>Pawland Profile</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <S.ProfilePage>
          <S.UserInfoContainer>
            <UserInfoArea />
            <UserLoginInfoArea />
          </S.UserInfoContainer>
          <S.ListContainer>
            <ProfilePageMenuBar />
            {renderComponent()}
          </S.ListContainer>
        </S.ProfilePage>
      </main>
    </>
  );
};