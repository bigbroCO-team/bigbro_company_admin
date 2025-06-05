'use client';

import { useState } from 'react';

import * as S from './style';

const options = [
  '전체',
  '입금확인전',
  '입금확인',
  '배송준비중',
  '배송시작',
  '환불완료',
];

const FilterSelect = () => {
  const [selected, setSelected] = useState('전체');

  return (
    <>
      <S.Wrapper>
        {options.map((option) => (
          <S.Button
            key={option}
            isSelected={selected === option}
            onClick={() => setSelected(option)}
          >
            {option}
          </S.Button>
        ))}
      </S.Wrapper>
    </>
  );
};

export default FilterSelect;
