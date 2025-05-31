'use client';

import * as S from './style';

const PCHeader = () => {
  // const { data } = useGetVerify();

  return (
    <S.Container>
      <S.BIGBROCOMPANY href='/' scroll={false}>
        BIGBRO COMPANY
      </S.BIGBROCOMPANY>
      <S.NavContainer>
        <S.AdminNav href='/' scroll={false}>
          상품 관리
        </S.AdminNav>
        <S.AdminNav href='/' scroll={false}>
          주문 내역
        </S.AdminNav>
      </S.NavContainer>
      <S.SideButtonBox>
        {/* {data?.isValidToken ? (
          <> */}
        <S.MyPageButton href='/mypage'>my page</S.MyPageButton>
        <S.LogoutButton href='/logout'>Logout</S.LogoutButton>
        {/* </>
        ) : (
          <S.LoginButton href='/login' scroll={false}>
            Login
          </S.LoginButton>
        )} */}
      </S.SideButtonBox>
    </S.Container>
  );
};

export default PCHeader;
