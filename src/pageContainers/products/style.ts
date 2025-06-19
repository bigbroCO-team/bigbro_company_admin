import styled from '@emotion/styled';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.dark};
  align-items: center;
  gap: 2rem;
  padding: 0 5rem;
  padding-top: 7.5rem;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export const TypeContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const TypeText = styled.button<{ selected: boolean }>`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: normal;
  color: ${({ selected, theme }) =>
    selected ? theme.color.white : theme.color.gray3};
  transition: color 0.2s;
`;

export const AdditionBtn = styled.button`
  display: flex;
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.color.gray25};
`;

export const AdditionText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: normal;
  color: ${({ theme }) => theme.color.white};
`;

export const TopWidth = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
