'use client';

import { useRouter } from 'next/navigation';

import { Header, Product } from '@/components';

import { useState } from 'react';

import * as S from './style';

const sampleProducts = [
  {
    img: '/images/sample-product.jpg',
    price: 25000,
    discountPercent: 20,
    name: '샘플 상품명 1',
  },
  {
    img: '/images/sample-product.jpg',
    price: 25000,
    discountPercent: 20,
    name: '샘플 상품명 2',
  },
  {
    img: '/images/sample-product.jpg',
    price: 25000,
    discountPercent: 20,
    name: '샘플 상품명 3',
  },
  {
    img: '/images/sample-product.jpg',
    price: 25000,
    discountPercent: 20,
    name: '샘플 상품명 4',
  },
  {
    img: '/images/sample-product.jpg',
    price: 25000,
    discountPercent: 20,
    name: '샘플 상품명 5',
  },
  {
    img: '/images/sample-product.jpg',
    price: 25000,
    discountPercent: 20,
    name: '샘플 상품명 6',
  },
];

const chunkArray = <T,>(arr: T[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const typeTexts = ['CBWAS', 'S.C.B', 'BIGBRO', 'GONGNEWGI', 'SCULFEE'];

const ProductLayout = () => {
  const [selectedType, setSelectedType] = useState('CBWAS');
  const { push } = useRouter();

  const chunkedProducts = chunkArray(sampleProducts, 4);

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.TopWidth>
          <S.TypeContainer>
            {typeTexts.map((text) => (
              <S.TypeText
                key={text}
                selected={selectedType === text}
                onClick={() => setSelectedType(text)}
              >
                {text}
              </S.TypeText>
            ))}
          </S.TypeContainer>

          <S.AdditionBtn onClick={() => push('/addition')}>
            <S.AdditionText>상품 추가</S.AdditionText>
          </S.AdditionBtn>
        </S.TopWidth>

        {chunkedProducts.map((group, i) => (
          <S.Row key={i}>
            {group.map((product, j) => {
              const globalIdx = i * 4 + j;
              return (
                <Product
                  key={globalIdx}
                  idx={globalIdx}
                  img={product.img}
                  price={product.price}
                  discountPercent={product.discountPercent}
                  name={product.name}
                />
              );
            })}
          </S.Row>
        ))}
      </S.Wrapper>
    </>
  );
};

export default ProductLayout;
