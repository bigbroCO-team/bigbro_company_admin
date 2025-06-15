import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button<{ isSelected: boolean }>`
  display: flex;
  padding: 0.75rem 2rem;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  font-weight: 600;
  line-height: 1.375rem;

  border: ${({ isSelected }) =>
    isSelected ? 'transparent' : '0.0625rem solid var(--gray2, #8C8C8C)'};
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.color.main : '#1A1918'};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.black : theme.color.gray2};
  height: 2.875rem;
`;
