import styled from '@emotion/styled';

export const OrderTitle = styled.div`
  display: flex;
  width: 100%;
  height: 3.75rem;
  background-color: ${({ theme }) => theme.color.dark};
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray3};
`;

export const Text = styled.div<{ width?: string }>`
  width: ${({ width }) => width || 'auto'};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75rem;
  text-align: center;
  color: ${({ theme }) => theme.color.gray1};
`;
