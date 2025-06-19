import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.color.dark};
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 0 5rem;
  padding-top: 7.5rem;
  overflow: hidden;
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.color.dark};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 48.75rem;

  height: calc(100vh - 7.5rem);
  overflow-y: auto;
  padding-right: 0.5rem;

  padding-bottom: 40rem;

  scrollbar-width: none;
`;

export const GrayBar = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: ${({ theme }) => theme.color.gray4};
`;

export const InfoBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2.25rem;
`;

export const BigImage = styled.div`
  width: 37.5rem;
  height: 37.5rem;
  background-color: ${({ theme }) => theme.color.gray4};
`;

export const ImagesContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const SmallImage = styled.div`
  width: 5.625rem;
  height: 5.625rem;
  background-color: ${({ theme }) => theme.color.gray4};
`;

export const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-start;
`;

export const BackBtn = styled.div`
  position: absolute;
  top: -2.5rem;
  left: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
`;

export const BackText = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: ${({ theme }) => theme.color.gray1};
`;
