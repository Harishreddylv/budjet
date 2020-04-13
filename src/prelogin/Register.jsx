import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { SCREENS, SERVICE_URLS } from '../common/Constants';

import axios from 'axios';


const Register = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDOB] = useState('');

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onChangeDOB = (event) => {
        setDOB(event.target.value)
    }

    const onClickRegister = () => {

        let obj = {
            name,
            email,
            password,
            dob
        }
        axios.post(SERVICE_URLS.REGISTER, obj)
        .then(res => {
            console.log(res.data)
            props.history.push(SCREENS.LOGIN)
        })
        .catch(err => console.log(err.message))
   
        
    }

    return (

        <div className='register-container'>

            <div className='register-section'>
                <div className='register-form'>
                    <h4 className='no-margin'>REGISTER</h4>
                    <div className='input-group'>
                        <label>Name</label>
                        <input type='text'
                            value={name}
                            onChange={onChangeName}
                        />
                    </div>
                    <div className='input-group'>
                        <label>Email</label>
                        <input type='text'
                            value={email}
                            onChange={onChangeEmail}
                        />
                    </div>
                    <div className='input-group'>
                        <label>Password</label>
                        <input type='text'
                            value={password}
                            onChange={onChangePassword}
                        />
                    </div>
                    <div className='input-group'>
                        <label>DOB</label>
                        <input type='text'
                            value={dob}
                            onChange={onChangeDOB}
                        />
                    </div>
                    <div className='button-section'>
                        <button
                            onClick={onClickRegister}
                        >
                            REGISTER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default withRouter(Register);