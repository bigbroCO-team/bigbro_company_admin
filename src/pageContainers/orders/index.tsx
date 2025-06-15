'use client';

import {
  Button,
  DateSelect,
  FilterSelect,
  Header,
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
      </S.Wrapper>
    </>
  );
};

export default OrderLayout;
