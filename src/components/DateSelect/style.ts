import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DateButton = styled.div`
  display: flex;
  display: flex;
  padding: 0.6875rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray3};
`;

export const Text = styled.p<{ isWidthHave: boolean }>`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75rem;
  color: ${({ theme }) => theme.color.white};
  width: ${({ isWidthHave }) => (isWidthHave ? '5.5rem' : '')};
`;

export const Button = styled.button``;
