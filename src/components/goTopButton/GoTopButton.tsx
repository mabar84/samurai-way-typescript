import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

export const GoTopButton = () => {

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setShowButton(window.scrollY > 200)
        })
    }, [])

    return (
        <>
            {showButton && <StyledGoTopButton onClick={() => {
                // scroll.scrollToTop()
            }}>
                {/*<Icon iconId={'go-to-top-icon'} width={'16'} height={'16'} viewBox={'0 0 16 16'}/>*/}
            </StyledGoTopButton>}
        </>
    );
};

const StyledGoTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  svg {
    fill: white;
    transition: 0.3s;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);

    svg {
      fill: ${myTheme.colors.primary_background};
    }
  }
`