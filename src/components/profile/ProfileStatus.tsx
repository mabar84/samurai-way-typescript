import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateStatus} from '../../store/profile-reducer';

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
            ? <input autoFocus value={status} onChange={onChangeInputHandler} onBlur={onBlurInputHandler}/>
            : <p onClick={onClickHandler} onDoubleClick={onDoubleClickHandler}>
                {status ? status : 'Some status'}</p>
        }
    </>)
}