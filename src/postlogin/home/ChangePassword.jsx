import React, { useState } from 'react';
import axios from 'axios';
import { SCREENS, SERVICE_URLS } from '../../common/Constants';


const ChangePassword = (props) => {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const onChangeCurrentPassword = (event) => {
        setCurrentPassword(event.target.value)
    }

    const onChangeNewPassword = (event) => {
        setNewPassword(event.target.value)
    }

    const onClickChangePassword = () => {

        let userName = localStorage.getItem('username');
        console.log('userName', userName)
        let obj = {
            currentPassword,
            newPassword,
            userName
        }
        axios.post(SERVICE_URLS.CHANGE_PASSWORD, obj)
            .then(res => {
                console.log(res.data)
                props.history.push(SCREENS.LOGIN)
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div className='changePassword-container'>
            <div className='changePassword-section'>
                <div className='changePasssword-form'>
                    <h4 className='no-margin'>CHANGE PASSWORD</h4>
                    <div className='input-group'>
                        <label>Current Password</label>
                        <input type='password'
                            value={currentPassword}
                            onChange={onChangeCurrentPassword}
                        />
                    </div>
                    <div className='input-group'>
                        <label>New Password</label>
                        <input type='password'
                            value={newPassword}
                            onChange={onChangeNewPassword}
                        />
                    </div>
                    <div className='button-section'>
                        <button
                            onClick={onClickChangePassword}
                        >
                            Change Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword;