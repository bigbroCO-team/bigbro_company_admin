import * as S from './style';

interface ButtonType {
  buttonType: 'normal' | 'delete';
  text: string;
  disabled?: boolean;
}

const Button = ({ buttonType, text, disabled }: ButtonType) => {
  return (
    <S.Wrapper buttonType={buttonType} disabled={disabled}>
      <S.Text buttonType={buttonType} disabled={disabled}>
        {text}
      </S.Text>
    </S.Wrapper>
  );
};

export default Button;
