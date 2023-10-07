import React from "react";
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

export const Sidebar = () => {
    return (
        <StyledNav>
            <ul>
                Lorem ipsum dolor sit
                {/*{myTheme.state.navItems.map((el, ind) => {*/}
                {/*    return <li key={ind}>*/}
                {/*        <Link to={el[1]}>{el[0]}</Link>*/}
                {/*    </li>*/}
                {/*})}*/}
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
  background-color: ${myTheme.colors.secondary_background};
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
        color: ${myTheme.colors.secondary_background}
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
