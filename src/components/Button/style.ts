import styled from '@emotion/styled';

interface buttonType {
  buttonType: 'normal' | 'delete';
  disabled?: boolean;
}

export const Wrapper = styled.button<buttonType>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 2rem;
  background-color: ${({ theme, buttonType, disabled }) =>
    disabled
      ? theme.color.gray1
      : buttonType === 'delete'
        ? theme.color.dark
        : theme.color.main};
  border: ${({ theme, buttonType, disabled }) =>
    disabled
      ? 'none'
      : buttonType === 'delete'
        ? `0.0625rem solid ${theme.color.error}`
        : 'none'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const Text = styled.p<buttonType>`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.375rem;
  color: ${({ theme, buttonType, disabled }) =>
    disabled
      ? theme.color.gray3
      : buttonType === 'delete'
        ? theme.color.error
        : theme.color.dark};
`;
