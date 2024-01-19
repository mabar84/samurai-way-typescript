import React from 'react';
import styled from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';
import {Logo} from '../logo/Logo';
import {NavLink} from 'react-router-dom';

export const Header = () => {


    return (
        <StyledHeader>
            <div className="container">
                <div className="flex">
                    <div>
                        Samurai
                        Way
                        <Logo/>
                    </div>
                    <NavLink to={'/login'}>LogIn</NavLink>
                </div>
            </div>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  height: 50px;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  border-radius: 0 0 10px 10px;
  margin: 0 10px 10px;
  background-color: ${myTheme.colors.primary};

  & .flex {
    display: flex;
    justify-content: space-between;
  }

  & .container {
    padding: 10px;
    width: 100%;

    ${myTheme.media.less1080} {
      gap: 15px;
      justify-content: space-between;
    }

    ${myTheme.media.less700} {
      flex-direction: column;
      gap: 0;
      margin-bottom: 30px;
    }
  }



`;
