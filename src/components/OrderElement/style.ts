import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  height: 7.125rem;
  width: 100%;
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
  color: ${({ theme }) => theme.color.white};
`;

export const Input = styled.input`
  all: unset;
  width: 11.125rem;
  padding: 0.25rem 0rem;
  color: ${({ theme }) => theme.color.white};
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.dark};
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray3};

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

export const DetailBox = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
