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

export const Container = styled.div`
  display: flex;
  width: 51.875rem;
  flex-direction: column;
  gap: 1.5rem;
`;

export const GraphBox = styled.div`
  display: flex;
  width: 100%;
  padding: 2.25rem;
  align-items: flex-start;
  gap: 1.5rem;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.color.gray25};
`;

export const Graph = styled.div`
  width: 100%;
  height: 18.5rem;
`;

export const SubscriberBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const SubscriberTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.6875rem;
  color: ${({ theme }) => theme.color.white};
`;

export const SubscriberNumber = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.9375rem;
  color: ${({ theme }) => theme.color.white};
`;
