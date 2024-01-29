import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateStatus} from '../../store/profile-reducer';
import styled from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';

type ProfileStatusPropsType = {
    status: string
}
export const ProfileStatus = (props: ProfileStatusPropsType) => {
    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch()

    const onDoubleClickHandler = () => {
        setEditMode(true)
    }
    const onClickHandler = () => {
        setEditMode(true)
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    const onBlurInputHandler = () => {
        setEditMode(false)
        dispatch(updateStatus(status))
    }
    return (<>
        {editMode
            ? <StyledInput autoFocus value={status} onChange={onChangeInputHandler} onBlur={onBlurInputHandler}/>
            : <p onClick={onClickHandler} onDoubleClick={onDoubleClickHandler}>
                {status ? status : 'Some status'}</p>
        }
    </>)
}

const StyledInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 2px solid ${myTheme.colors.primary};
  background-color: ${myTheme.colors.background};
  color: ${myTheme.colors.primary};
`
