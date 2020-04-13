import React, { useState, useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { SCREENS } from '../common/Constants'

const  Authorized = (props) => {

    const [loginStatus, setLoginStatus] = useState(localStorage.getItem('loginStatus'));

    const { component: Component, ...rest } = props;

    return (
        <>

            <Route {...rest} render={props => {
                return loginStatus
                    ? <Component {...props} />
                    : <Redirect to={SCREENS.LOGIN} />
            }} />

        </>
    )
}

export default Authorized;
