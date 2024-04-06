import React from 'react';
import s from './Users.module.scss';
import {Button} from '../button/button';
import {User} from './User';
import {UserType} from '../../store/store';
import {Preloader} from '../preloader/Preloader';

type UsersPropsType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p: number) => void
    isFetching: boolean
}

export const Users: React.FC<UsersPropsType> = (props) => {
    const {usersData, pageSize, totalUsersCount, currentPage, onPageChanged, isFetching} = props

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    // let pages = []
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }


    let arrayOfButtonsValues: Array<'...' | number>;

    if (pagesCount <= 7) {
        arrayOfButtonsValues = Array.from({length: pagesCount}, (_, i) => i + 1);
    } else {
        arrayOfButtonsValues = [1, 2, 3, 4, 5, '...', pagesCount];
        if (currentPage > 3 && pagesCount - currentPage > 3) {
            arrayOfButtonsValues = [
                1,
                '...',
                currentPage - 1,
                currentPage,
                currentPage + 1,
                '...',
                pagesCount,
            ];
        } else {
            if (currentPage > 3) {
                arrayOfButtonsValues = [
                    1,
                    '...',
                    pagesCount - 4,
                    pagesCount - 3,
                    pagesCount - 2,
                    pagesCount - 1,
                    pagesCount,
                ];
            }
        }
    }

    const toPrevPageHandler = () => {
        onPageChanged(currentPage - 1);
    };
    const toNextPageHandler = () => {
        onPageChanged(currentPage + 1);
    };


    return <>
        {isFetching ? <Preloader/> : null}
        <div className={s.paginator}>
            <Button buttonName={''} onClick={toPrevPageHandler} disabled={currentPage == 1}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.22003 12.6667C9.12043 12.667 9.02202 12.645 8.93204 12.6024C8.84205 12.5597 8.76277 12.4974 8.70003 12.42L5.48003 8.42002C5.38197 8.30073 5.32837 8.1511 5.32837 7.99669C5.32837 7.84227 5.38197 7.69264 5.48003 7.57335L8.81336 3.57335C8.92652 3.43721 9.08913 3.35159 9.26541 3.33534C9.4417 3.31909 9.61722 3.37353 9.75336 3.48669C9.88951 3.59985 9.97512 3.76245 9.99137 3.93874C10.0076 4.11502 9.95319 4.29054 9.84003 4.42669L6.86003 8.00002L9.74003 11.5734C9.82155 11.6712 9.87333 11.7904 9.88925 11.9167C9.90517 12.0431 9.88456 12.1714 9.82986 12.2864C9.77515 12.4014 9.68865 12.4984 9.58057 12.5658C9.4725 12.6332 9.34738 12.6682 9.22003 12.6667Z"
                        fill="currentCOlor"/>
                </svg>

            </Button>
            {arrayOfButtonsValues.map((p, i) => p === '...' ?
                <div key={i}>{p}</div>
                : <Button key={i} buttonName={p.toString()} disabled={false}
                          className={currentPage === p ? s.selectedPage : ''}
                          onClick={() => {
                              onPageChanged(p)
                          }}/>)}
            <Button buttonName={''} onClick={toNextPageHandler} disabled={currentPage >= pagesCount}>
                <svg height="10" viewBox="0 0 5 10" width="5" xmlns="http://www.w3.org/2000/svg">
                    <path fill={'currentColor'}
                          d="M0.66668 9.66679C0.510912 9.66709 0.359955 9.61284 0.240013 9.51346C0.172508 9.45749 0.116707 9.38876 0.0758054 9.31119C0.0349041 9.23363 0.00970653 9.14876 0.00165595 9.06144C-0.00639463 8.97412 0.00286005 8.88607 0.0288897 8.80234C0.0549194 8.7186 0.0972121 8.64082 0.153347 8.57346L3.14001 5.00012L0.260014 1.42012C0.204637 1.35193 0.163282 1.27347 0.138328 1.18924C0.113373 1.10501 0.105311 1.01669 0.114603 0.929335C0.123896 0.841982 0.150361 0.757328 0.192477 0.680237C0.234593 0.603146 0.291529 0.535138 0.360014 0.480123C0.428991 0.419432 0.509768 0.373654 0.597276 0.345661C0.684785 0.317668 0.777135 0.308066 0.86853 0.317456C0.959925 0.326846 1.04839 0.355026 1.12838 0.400227C1.20837 0.445428 1.27815 0.506675 1.33335 0.580123L4.55335 4.58012C4.6514 4.69941 4.70501 4.84904 4.70501 5.00346C4.70501 5.15787 4.6514 5.3075 4.55335 5.42679L1.22001 9.42679C1.15314 9.50747 1.06818 9.57124 0.97204 9.61294C0.8759 9.65464 0.771284 9.67309 0.66668 9.66679Z"/>
                </svg>
            </Button>
        </div>
        {usersData.map(u => <User key={u.id} user={u}/>)}
    </>;
}