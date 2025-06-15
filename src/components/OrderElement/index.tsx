import { CheckBox, RightArrowIcon } from '@/assets';
import { options } from '@/pageContainers/orders';

import Select from '../Select';
import * as S from './style';

interface ProductInfo {
  productName: string;
  price: number;
  quantity: number;
}

interface OrderElementProps {
  time: string;
  product: ProductInfo;
  totalPrice: number;
  name: string;
  address: string;
  phoneNumber: string;
  userId: string;
  courier: string;
  status: string;
}

const OrderElement = ({
  time,
  product,
  totalPrice,
  name,
  address,
  phoneNumber,
  userId,
  courier,
  status,
}: OrderElementProps) => {
  const [date, hour] = time.split(' ');

  const formattedProduct = (() => {
    const shortName =
      product.productName.length > 10
        ? product.productName.slice(0, 10) + '...'
        : product.productName;

    const price = product.price.toLocaleString();

    return `${shortName} (${price}원/${product.quantity}개)`;
  })();

  const statusIndex = options.indexOf(status);

  return (
    <S.Wrapper>
      <CheckBox />
      <S.Text width='6.5rem'>
        {date}
        <br />
        {hour}
      </S.Text>

      <S.Text width='12.75rem'>{formattedProduct}</S.Text>

      <S.Text width='4.625rem'>{totalPrice.toLocaleString()}</S.Text>

      <S.Text width='3.75rem'>{name}</S.Text>

      <S.Text width='9.375rem'>{address}</S.Text>

      <S.Text width='7.125rem'>{phoneNumber}</S.Text>

      <S.Text width='5.4375rem'>{userId}</S.Text>

      <Select selectArr={[courier]} />

      <S.Input placeholder='운송장 번호를 입력해주세요.' />

      <Select selectArr={options} selectedIdx={statusIndex} />

      <S.DetailBox>
        <S.Text>보기</S.Text>
        <RightArrowIcon />
      </S.DetailBox>
    </S.Wrapper>
  );
};

export default OrderElement;
