import styled from '@emotion/styled';

export type InputSize = 'xs' | 'sm' | 'md' | 'lg';

interface InputProps {
  $size?: InputSize;
}

const fontSizeStyles: Record<InputSize, string> = {
  xs: `
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
  `,
  sm: `
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.6875rem;
  `,
  md: `
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.9375rem;
  `,
  lg: `
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.6875rem;
  `,
};

export const Input = styled.input<InputProps>`
  all: unset;
  width: 100%;
  padding: 0.25rem 0;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.dark};

  ${({ $size = 'xs' }) => fontSizeStyles[$size]}

  ::placeholder {
    ${({ $size = 'xs' }) => fontSizeStyles[$size]}
    color: ${({ theme }) => theme.color.gray2};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.6875rem;
`;

export const InputBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;
