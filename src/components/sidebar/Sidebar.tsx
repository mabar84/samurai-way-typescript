import React from 'react';
import styled from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';
import s from './sidebar.module.scss'
import {Link} from 'react-router-dom';

export const Sidebar = () => {
    return (
        <StyledNav>
            <ul>
                <li className={s.item}>
                    <Link to={'profile'}>Profile</Link>
                </li>
                <li className={`${s.item} ${s.active}`}>
                    <Link to={'/dialogs'}>Dialogs</Link>
                </li>
            </ul>
            <Par/>


        </StyledNav>
    );
};


const Par = () => {
    return (
        <div>
            123
            <Baby title={'Заголовок'}
            />
        </div>
    )
}
const Baby = ({title, name = 'Vasia'}: any) => {
    return (
        <div>
            title = {title}
            <br/>
            name = {name}
        </div>
    )
}


const StyledNav = styled.nav`
  width: 180px;
  min-height: 40vh;
  max-height: calc(100vh - 70px);
  padding: 10px;
  border-radius: 10px;
  background-color: ${myTheme.colors.secondary};
  flex-shrink: 0;
  overflow: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
}

ul {
  display: flex;
  gap: 50px;
  height: 100%;
  align-items: center;
  color: ${myTheme.colors.text};

  li {
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    display: flex;
    align-items: center;
    white-space: nowrap;

    ${myTheme.media.less700} {
      font-size: 16px;
    }

    a {
      transition: color 0.3s;

      &:hover {
        color: ${myTheme.colors.secondary}
      }

      ${myTheme.media.less1080} {
        gap: 15px;
      }

      ${myTheme.media.less700} {
        justify-content: start;
        flex-wrap: nowrap;
        overflow: auto;
        gap: 10px;
      }
    }
`;
