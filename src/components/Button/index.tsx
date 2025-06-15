import * as S from './style';

interface ButtonType {
  buttonType: 'normal' | 'delete';
  text: string;
}

const Button = ({ buttonType, text }: ButtonType) => {
  return (
    <S.Wrapper buttonType={buttonType}>
      <S.Text buttonType={buttonType}>{text}</S.Text>
    </S.Wrapper>
  );
};

export default Button;
