import * as S from './style';

interface InputWrapperProps {
  text: string;
  placeholder: string;
}

const InputWrapper = ({ text, placeholder }: InputWrapperProps) => {
  return (
    <S.Wrapper>
      <S.Text>{text}</S.Text>
      <S.Input placeholder={placeholder} />
    </S.Wrapper>
  );
};

export default InputWrapper;
