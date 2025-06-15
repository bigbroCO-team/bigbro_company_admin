import { SearchIcon } from '@/assets';

import * as S from './style';

const SearchInput = () => {
  return (
    <S.InputWrapper>
      <S.Input placeholder='검색어를 입력해주세요' />
      <S.SearchIconBox>
        <SearchIcon />
      </S.SearchIconBox>
    </S.InputWrapper>
  );
};

export default SearchInput;
