import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../store/redux-store';
import {Redirect} from 'react-router-dom';

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.authData.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        return isAuth ? <Component {...restProps as T}/> : <Redirect to={'/login'}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}