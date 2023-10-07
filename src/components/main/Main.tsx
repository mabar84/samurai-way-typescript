import React from 'react';
import {styled} from "styled-components";
import {Content} from "../content/Content";
import {Sidebar} from "../sidebar/Sidebar";

export const Main = () => {
    return (
        <StyledMain className={'container'}>
            <Sidebar/>
            <Content/>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  display: flex;
  align-items: start;
  gap: 10px;
  margin: 10px auto;
  flex-grow: 1;
`