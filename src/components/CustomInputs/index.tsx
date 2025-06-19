import * as S from './style';

const CustomInputs = () => {
  return (
    <S.InputWrapper>
      <S.InputBox>
        <S.Input placeholder='상품 이름을 입력해주세요' $size='md' />
        <S.Input placeholder='가격을 입력해주세요' $size='lg' />
        <S.Input placeholder='할인률을 입력해주세요' $size='sm' />
      </S.InputBox>
      <S.Input placeholder='상품 설명을 입력해주세요' $size='xs' />
    </S.InputWrapper>
  );
};

export default CustomInputs;
