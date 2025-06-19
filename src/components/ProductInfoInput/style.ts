import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;

export const Text = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.6875rem;
  color: ${({ theme }) => theme.color.white};
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
