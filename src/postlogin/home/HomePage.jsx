import React, { useState } from 'react';

import { Redirect, Switch, Route, withRouter } from "react-router";
import { SCREENS } from '../../common/Constants';


import Menu from './Menu';
import Income from '../income/Income';
import Expenses from '../expenses/Expenses';
import History from '../history/History';

const HomePage = (props) => {


    const onClickLogOut = () => {
        props.history.push(SCREENS.LOGIN);
    }

    const onClickChangePassword = () => {
        props.history.push(SCREENS.CHANGE_PASSWORD);
    }

    return (

        <div className='home-container'>
            <div className='home-header'>
                <div className='header-left-section'>

                </div>
                <div className='header-right-section'>
                    <button
                        onClick={onClickLogOut}
                    >LOGOUT</button>
                    <button
                        onClick={onClickChangePassword}
                    >CHANGE PASSWORD</button>
                </div>
            </div>
            <div className='home-body'>

                <Menu />
                <Switch>
                    <Route path={SCREENS.INCOME} exact component={Income} />
                    <Route exact path={SCREENS.EXPENSES} component={Expenses} />
                    <Route exact path={SCREENS.HISTORY} component={History} />
                    <Redirect to={SCREENS.HOME} />
                </Switch>

            </div>
            <div className='home-footer'>
            </div>
        </div>
    )

}

export default withRouter(HomePage);