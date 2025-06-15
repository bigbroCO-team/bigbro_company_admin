'use client';

import styled from '@emotion/styled';

import { useState } from 'react';

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <Wrapper isChecked={isChecked} onClick={handleToggle}>
      {!isChecked && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
        >
          <path
            d='M0.888889 0H15.1111C15.3469 0 15.573 0.0936505 15.7397 0.260349C15.9064 0.427048 16 0.653141 16 0.888889V15.1111C16 15.3469 15.9064 15.573 15.7397 15.7397C15.573 15.9064 15.3469 16 15.1111 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V0.888889C0 0.653141 0.0936505 0.427048 0.260349 0.260349C0.427048 0.0936505 0.653141 0 0.888889 0ZM7.11378 11.5556L13.3982 5.27022L12.1422 4.01333L7.11378 9.04178L4.59911 6.52711L3.34222 7.784L7.11378 11.5556Z'
            fill='#FF952B'
          />
        </svg>
      )}
    </Wrapper>
  );
};

export default CheckBox;

const Wrapper = styled.div<{ isChecked: boolean }>`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.color.dark : 'transparent'};
  border: ${({ theme, isChecked }) =>
    isChecked ? `1px solid ${theme.color.gray3}` : 'none'};
`;
