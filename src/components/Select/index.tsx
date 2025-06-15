import { CheckIcon, DownArrowIcon } from '@/assets';

import { useState } from 'react';

import * as S from './style';

interface SelectProps {
  selectArr: string[];
  selectedIdx?: number;
  multiUpdate?: 'delivery' | 'status';
}

const Select = ({ selectArr, selectedIdx, multiUpdate }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState<number>(
    typeof selectedIdx === 'number' ? selectedIdx : -1
  );

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (index: number) => {
    setCurrentIdx(index);
    setIsOpen(false);
  };

  const displayText = currentIdx >= 0 ? selectArr[currentIdx] : '선택 안 됨';

  return (
    <S.Wrapper isMulti={!!multiUpdate} onClick={handleToggle}>
      {!!multiUpdate ? (
        <S.TextWrapper>
          <S.Text>
            {multiUpdate === 'delivery'
              ? '택배사 일괄 변경'
              : '진행상태 일괄 변경'}
          </S.Text>
          <S.GrayBar />
          <S.GrayText>{displayText}</S.GrayText>
        </S.TextWrapper>
      ) : (
        <S.Text>{displayText}</S.Text>
      )}
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
