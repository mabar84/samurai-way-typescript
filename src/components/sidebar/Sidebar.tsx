import React from 'react';
import styled from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';
import s from './sidebar.module.scss'
import {NavLink} from 'react-router-dom';

export const Sidebar = () => {
    return (
        <StyledNav>
            <ul>
                <li className={s.item}>
                    <NavLink to={'profile'}>Profile</NavLink>
                </li>
                <li className={`${s.item} ${s.active}`}>
                    <NavLink to={'/dialogs'}>Dialogs</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'settings'}>Settings</NavLink>
                </li>
            </ul>
        </StyledNav>
    );
};

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
  height: 100%;
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
      color: ${myTheme.colors.text};

      &:hover {
        color: ${myTheme.colors.background}
      }

      &:focus {
        color: ${myTheme.colors.background}
      }

      &.active {
        color: ${myTheme.colors.primary};

        &:hover {
          color: ${myTheme.colors.background}
        }
      }

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
