'use client';

import Button from '../Button';
import InputWrapper from '../InputWrapper';
import * as S from './style';

const ProductInfoInput = () => {
  return (
    <S.Wrapper>
      <S.Text>상품 정보 입력</S.Text>
      <S.InfoWrapper>
        <S.InputBox>
          <InputWrapper text='상품명' placeholder='상품명을 입력해주세요' />
          <InputWrapper text='가격' placeholder='가격을 입력해주세요' />
        </S.InputBox>
        <Button text='상품 등록' buttonType={'normal'} disabled />
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default ProductInfoInput;
