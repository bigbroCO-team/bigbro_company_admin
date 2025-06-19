import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;

export const Text = styled.div<{ 괄호?: boolean }>`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.6875rem;
  color: ${({ theme, 괄호 }) => (괄호 ? theme.color.gray2 : theme.color.white)};
`;

export const InlineStyle = styled.div`
  display: flex;
`;

export const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const Product = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const EditBtn = styled.button`
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray3};
`;

export const EditText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.375rem;
  color: ${({ theme }) => theme.color.gray1};
`;
