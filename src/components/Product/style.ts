import styled from '@emotion/styled';

interface PriceTextProps {
  isDiscount?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const PriceText = styled.p<PriceTextProps>`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.9375rem;

  color: ${({ theme, isDiscount }) =>
    isDiscount ? theme.color.error : theme.color.white};
`;

export const NameText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75rem;
  color: ${({ theme }) => theme.color.white};
`;

export const EditBtn = styled.button`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75rem;
  color: ${({ theme }) => theme.color.gray2};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray2};
  background: none;
  padding: 0;
`;
