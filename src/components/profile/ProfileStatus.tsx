import React, {ChangeEvent, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
}
export const ProfileStatus = (props: ProfileStatusPropsType) => {
    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

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
    }
    return (<>
        {editMode
            ? <input autoFocus value={status} onChange={onChangeInputHandler} onBlur={onBlurInputHandler}/>
            : <p onClick={onClickHandler} onDoubleClick={onDoubleClickHandler}>
                {status ? status : 'What can i say?'}</p>
        }
    </>)
}