import React, {ReactNode} from 'react';
import {styled} from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';

type ButtonPropsType = {
    buttonName: string
    onClick: () => void
    className?: string
    disabled: boolean
    children?: ReactNode
}

export const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.onClick()
    }

    return (
        <StyledButton disabled={props.disabled} onClick={onClickHandler} className={`styledButton ${props.className}`}>
            {props.buttonName}
            {props.children}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    min-width: 100px;
    padding: 5px;
    border-radius: 5px;
    background-color: ${myTheme.colors.primary};
    color: ${myTheme.colors.text};
    cursor: pointer;
    border: 2px solid ${myTheme.colors.primary};
    transition: background-color 0.4s, color .4s;
    transform: translateY(-1px);


    &:hover {
        background-color: ${myTheme.colors.secondary};
    }

    &:active {
        transform: translateY(0);
    }

    &:disabled {
        background-color: ${myTheme.colors.background};
        pointer-events: none;
    }


`