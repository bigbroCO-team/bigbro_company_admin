import { CheckBox } from '@/assets';

import * as S from './style';

const OrderTitle = () => {
  return (
    <S.OrderTitle>
      <CheckBox />
      <S.Text width='6.5rem'>작성시간</S.Text>

      <S.Text width='12rem'>주문 상품/수량</S.Text>
      <S.Text width='4.625rem'>총 주문금액</S.Text>
      <S.Text width='3.75rem'>받을 사람</S.Text>
      <S.Text width='8rem'>주소</S.Text>
      <S.Text width='6.75rem'>연락처</S.Text>
      <S.Text width='5.4375rem'>주문자 아이디</S.Text>
      <S.Text width='12rem'>택배사</S.Text>
      <S.Text width='11.125rem'>운송장번호</S.Text>
      <S.Text width='10rem'>진행상태</S.Text>
      <S.Text>상세</S.Text>
    </S.OrderTitle>
  );
};

export default OrderTitle;
