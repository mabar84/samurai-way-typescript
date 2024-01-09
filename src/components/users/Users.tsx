import React from 'react';
import {useDispatch} from 'react-redux';
import {UserType} from '../../store/store';
import {User} from './User';
import axios from 'axios';

type UsersPropsType = {
    usersData: UserType[]
    setUsers: (users: UserType[]) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    // let users = useSelector<AppStateType, UserType[]>(state => state.usersData)
    // const dispatch = useDispatch()

    const getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                props.setUsers(res.data.items)
                console.log(res.data.items)
                // dispatch(SetUsersAC(res.data.items))
            })
    }
    // useEffect(() => {
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //         .then(res => {
    //             dispatch(SetUsersAC(res.data.items))
    //         })
    // }, [])

    return <>
        <button onClick={getUsers}>getUsers</button>
        {props.usersData.map(u => <User key={u.id} user={u}/>)}
    </>
}