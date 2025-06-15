import { CheckIcon, DownArrowIcon } from '@/assets';

import { useState } from 'react';

import * as S from './style';

interface SelectProps {
  selectArr: string[];
  selectedIdx: number;
}

const Select = ({ selectArr, selectedIdx }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(selectedIdx);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (index: number) => {
    setCurrentIdx(index);
    setIsOpen(false);
  };

  return (
    <S.Wrapper onClick={handleToggle}>
      <S.Text>{selectArr[currentIdx]}</S.Text>
      <DownArrowIcon />
      {isOpen && (
        <S.SelectWrapper>
          {selectArr.map((item, index) => (
            <S.SelectBox
              key={item}
              onClick={() => {
                handleSelect(index);
                handleToggle();
              }}
            >
              <span
                style={{
                  visibility: index === currentIdx ? 'visible' : 'hidden',
                }}
              >
                <CheckIcon />
              </span>
              <S.Text>{item}</S.Text>
            </S.SelectBox>
          ))}
        </S.SelectWrapper>
      )}
    </S.Wrapper>
  );
};

export default Select;
