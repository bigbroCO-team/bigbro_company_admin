import { CalenderIcon } from '@/assets';

import * as S from './style';

const DateSelect = () => {
  return (
    <>
      <S.Wrapper>
        <S.DateButton>
          <S.Text isWidthHave={true}>2024-05-10</S.Text>
          <S.Button>
            <CalenderIcon />
          </S.Button>
        </S.DateButton>

        <S.Text isWidthHave={false}>~</S.Text>

        <S.DateButton>
          <S.Text isWidthHave={true}>2024-05-10</S.Text>
          <S.Button>
            <CalenderIcon />
          </S.Button>
        </S.DateButton>
      </S.Wrapper>
    </>
  );
};

export default DateSelect;
