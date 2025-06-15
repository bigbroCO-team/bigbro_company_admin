'use client';

import {
  Button,
  DateSelect,
  FilterSelect,
  Header,
  OrderElement,
  OrderTitle,
  SearchInput,
  Select,
} from '@/components';

import * as S from './style';

export const options = [
  '입금확인전',
  '입금확인',
  '배송준비중',
  '배송시작',
  '환불완료',
];

const dummyOrders = [
  {
    time: '2025-06-14 13:45:00',
    product: {
      productName: '연필 세트',
      price: 1000,
      quantity: 2,
    },
    totalPrice: 2000,
    name: '홍길동',
    address: '광주광역시 상무대로 312 (광주소프트웨어마이스터고)',
    phoneNumber: '010-1234-5678',
    userId: 'user123',
    courier: '로젠택배',
    status: '입금확인',
  },
  {
    time: '2025-06-14 14:00:00',
    product: {
      productName: '볼펜 세트',
      price: 1500,
      quantity: 3,
    },
    totalPrice: 4500,
    name: '김영희',
    address: '부산광역시 해운대구',
    phoneNumber: '010-8765-4321',
    userId: 'user456',
    courier: '로젠택배',
    status: '배송준비중',
  },
];

const OrderLayout = () => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.TopFilterWrapper>
          <S.FilterWrapper>
            <S.DateSearchWrapper>
              <DateSelect />
              <SearchInput />
              <Button buttonType={'normal'} text={'다음'} />
            </S.DateSearchWrapper>

            <FilterSelect />
          </S.FilterWrapper>

          <S.MultiUpdateWrapper>
            <Select selectArr={['로젠택배']} multiUpdate={'delivery'} />
            <Select selectArr={options} multiUpdate={'status'} />
            <Button text='선택항목 삭제' buttonType={'delete'} />
          </S.MultiUpdateWrapper>
        </S.TopFilterWrapper>

        <S.ElementWrapper>
          <OrderTitle />
          {dummyOrders.map((order, index) => (
            <OrderElement key={index} {...order} />
          ))}
        </S.ElementWrapper>
      </S.Wrapper>
    </>
  );
};

export default OrderLayout;
