import { CheckBox } from '@/assets';

import * as S from './style';

interface Product {
  name: string;
  count: number;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const productTotalCount = products.length;

  return (
    <S.Wrapper>
      <S.InlineStyle>
        <S.Text>판매 상품 리스트</S.Text>
        <S.Text 괄호>&nbsp;(총 {productTotalCount}개의 상품)</S.Text>
      </S.InlineStyle>

      <S.CheckContainer>
        <CheckBox />
        <S.Text>재고 공개하기</S.Text>
      </S.CheckContainer>

      <S.ProductBox>
        {products.map((product, index) => (
          <S.Product key={index}>
            <S.InlineStyle>
              <S.Text>{product.name}</S.Text>
              <S.Text 괄호>&nbsp;(재고 {product.count}개)</S.Text>
            </S.InlineStyle>

            <S.PriceBox>
              <S.Text>{product.price.toLocaleString()}원</S.Text>
              <S.EditBtn>
                <S.EditText>수정</S.EditText>
              </S.EditBtn>
            </S.PriceBox>
          </S.Product>
        ))}
      </S.ProductBox>
    </S.Wrapper>
  );
};

export default ProductList;
