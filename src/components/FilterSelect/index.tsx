'use client';

import { options } from '@/pageContainers/orders';

import { useState } from 'react';

import * as S from './style';

const FilterSelect = () => {
  const [selected, setSelected] = useState('전체');

  return (
    <S.Wrapper>
      <S.Button
        isSelected={selected === '전체'}
        onClick={() => setSelected('전체')}
      >
        전체
      </S.Button>
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
  );
};

export default FilterSelect;
