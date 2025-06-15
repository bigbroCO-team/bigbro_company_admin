import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.color.dark};
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 0 5rem;
`;

export const DateSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;
