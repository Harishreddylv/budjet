import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { SCREENS, SERVICE_URLS } from '../common/Constants';
import axios from 'axios';


const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (event) => {

        setEmail(event.target.value);
    }

    const onChangePassword = (event) => {

        setPassword(event.target.value);
    }

    const onCLickLoginsubmit = () => {

        let obj = {
            email,
            password
        }
        axios.post(SERVICE_URLS.LOG_IN, obj)
            .then(res => {
                localStorage.setItem('username', email);
                localStorage.setItem('loginStatus', true);
                localStorage.setItem('userId', res.data.userID)
                props.history.push(SCREENS.HOME)
            })
            .catch(err => console.log(err.message))
    }

    const onClickForgotPassword = () => {

    }

    const onCLickRegister = () => {

        props.history.push(SCREENS.REGISTER)

    }

    return (
        <div className='login-container'>
            <div className='login-section'>
                <div className='login-form'>
                    <h4 className='no-margin'>LOGIN</h4>
                    <div className='input-group'>
                        <label>Email</label>
                        <input type='text'
                            value={email}
                            onChange={onChangeEmail}
                        />
                    </div>
                    <div className='input-group'>
                        <label>Password</label>
                        <input type='password'
                            value={password}
                            onChange={onChangePassword}
                        />
                    </div>
                    <div className='button-section'>
                        <button
                            onClick={onCLickLoginsubmit}
                        >
                            Login
                        </button>
                        <button
                            onClick={onClickForgotPassword}
                        >
                            Reset Password
                        </button>
                    </div>
                    <div className='register-link'>
                        Don't have account?
                        <button
                            className='register-btn'
                            onClick={onCLickRegister}
                        >
                            Register here
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login);
