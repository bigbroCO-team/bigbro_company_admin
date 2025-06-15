'use client';

import {
  Button,
  DateSelect,
  FilterSelect,
  Header,
  SearchInput,
} from '@/components';

import * as S from './style';

const OrderLayout = () => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.FilterWrapper>
          <S.DateSearchWrapper>
            <DateSelect />
            <SearchInput />
            <Button buttonType={'normal'} text={'다음'} />
          </S.DateSearchWrapper>

          <FilterSelect />
        </S.FilterWrapper>
      </S.Wrapper>
    </>
  );
};

export default OrderLayout;
