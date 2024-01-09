import React from 'react';
import {useDispatch} from 'react-redux';
import {UserType} from '../../store/store';
import {User} from './User';
import axios from 'axios';

type UsersPropsType = {
    usersData: UserType[]
    setUsers: (users: UserType[]) => void
}

export class Users extends React.Component<UsersPropsType> {
    // let users = useSelector<AppStateType, UserType[]>(state => state.usersData)
    // const dispatch = useDispatch()

    constructor(props: UsersPropsType) {
        super(props);
        alert('NEW')
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items)
                // dispatch(SetUsersAC(res.data.items))
            })
    }

    // getUsers = () => {
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //         .then(res => {
    //             this.props.setUsers(res.data.items)
    //             // dispatch(SetUsersAC(res.data.items))
    //         })
    // }

    render() {
        return <>
            {/*<button onClick={this.getUsers}>getUsers</button>*/}
            {this.props.usersData.map(u => <User key={u.id} user={u}/>)}
        </>
    }
}

// useEffect(() => {
//     axios.get('https://social-network.samuraijs.com/api/1.0/users')
//         .then(res => {
//             dispatch(SetUsersAC(res.data.items))
//         })
// }, [])

