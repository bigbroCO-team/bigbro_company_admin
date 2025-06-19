import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

export const Text = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: ${({ theme }) => theme.color.white};
`;

export const Input = styled.input`
  all: unset;
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme.color.white};
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.dark};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray3};

  ::placeholder {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;
    color: ${({ theme }) => theme.color.gray3};
  }

  :focus {
    outline: none;
  }
`;
