import Image from 'next/image';
import { useRouter } from 'next/navigation';

import * as S from './style';

interface ProductProps {
  idx: number;
  img: string;
  price: number;
  discountPercent: number;
  name: string;
}

const Product = ({ idx, img, price, discountPercent, name }: ProductProps) => {
  const { push } = useRouter();

  return (
    <S.Wrapper>
      <Image src={img} alt={'productImg'} width={396} height={396} />
      <S.PriceContainer>
        <S.PriceText isDiscount>{discountPercent}%</S.PriceText>
        <S.PriceText>{price.toLocaleString()}</S.PriceText>
      </S.PriceContainer>

      <S.NameText>{name}</S.NameText>

      <S.EditBtn onClick={() => push(`/edit/${idx}`)}>수정하기</S.EditBtn>
    </S.Wrapper>
  );
};

export default Product;
