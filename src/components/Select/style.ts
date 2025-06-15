import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 10rem;
  position: relative;
  display: flex;
  padding: 0.75rem 1rem;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray4};
  background: ${({ theme }) => theme.color.dark};

  cursor: pointer;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const SelectWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.color.gray25};
`;

export const SelectBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
