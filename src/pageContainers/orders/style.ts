import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.dark};
  align-items: center;
  gap: 1.5rem;
  padding: 0 5rem;
  padding-top: 7.5rem;
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

export const TopFilterWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const MultiUpdateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
`;

export const ElementWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
