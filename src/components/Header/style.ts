import styled from '@emotion/styled';
import Link from 'next/link';

import { css } from '@emotion/react';

export const Container = styled.header`
  top: 0;
  left: 0;
  width: 100vw;
  height: 4.8125rem;
  padding: 0 7.5rem;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  transition: all 0.3s;

  ${({ theme }) => {
    return css`
      background-color: ${theme.color.dark};
    `;
  }};

  ${({ theme }) => css`
    color: ${theme.color.gray6};
  `}
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.75rem;
  color: inherit;
`;

export const AdminNav = styled(Link)<{ active?: boolean }>`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.8125rem;
  color: ${({ theme, active }) =>
    active ? theme.color.white : theme.color.gray6};
`;

export const SideButtonBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const MyPageButton = styled(Link)`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.8125rem;
  color: inherit;
  user-select: none;

  &:hover {
    color: ${({ theme }) => theme.color.main};
  }
`;

export const LoginButton = styled(MyPageButton)`
  width: 5rem;
  display: flex;
  justify-content: end;
`;

export const LogoutButton = styled(MyPageButton)``;

export const BrandWrapper = styled.div<{ isMyBrand: boolean }>`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.8125rem;
  color: ${({ theme, isMyBrand }) =>
    isMyBrand ? theme.color.main : 'inherit'};
  display: flex;
  user-select: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.main};
  }
`;

export const BIGBROCOMPANY = styled(Link)`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.8125rem;
  color: ${({ theme }) => theme.color.white};
  user-select: none;
  display: flex;
`;
