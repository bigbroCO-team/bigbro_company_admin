import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  position: relative;
  width: 25rem;
`;

export const Input = styled.input`
  width: 25rem;
  display: flex;
  padding: 0.6875rem 0.75rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray3};
  background: ${({ theme }) => theme.color.dark};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  color: ${({ theme }) => theme.color.white};

  ::placeholder {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    color: ${({ theme }) => theme.color.gray3};
  }

  :focus {
    outline: none;
  }
`;

export const SearchIconBox = styled.div`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;
