'use client';

import { useRouter } from 'next/navigation';

import { BackIcon } from '@/assets';
import {
  CustomInputs,
  Header,
  ProductInfoInput,
  ProductList,
} from '@/components';

import * as S from './style';

const AdditionLayout = () => {
  const { back } = useRouter();

  const products = [
    { name: '연필 세트', count: 10, price: 5000 },
    { name: '노트북', count: 3, price: 1200000 },
  ];

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.ImageWrapper>
          <S.BigImage />
          <S.ImagesContainer>
            {Array.from({ length: 6 }).map((_, index) => (
              <S.SmallImage key={index} />
            ))}
          </S.ImagesContainer>

          <S.BackBtn onClick={() => back()}>
            <BackIcon />
            <S.BackText>돌아가기</S.BackText>
          </S.BackBtn>
        </S.ImageWrapper>

        <S.InfoWrapper>
          <S.InfoBox>
            <CustomInputs />

            <S.GrayBar />

            <ProductInfoInput />

            <S.GrayBar />

            <ProductList products={products} />
          </S.InfoBox>
        </S.InfoWrapper>
      </S.Wrapper>
    </>
  );
};

export default AdditionLayout;
