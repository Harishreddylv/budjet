import React, { useState, useEffect } from 'react';
import { SERVICE_URLS } from '../../common/Constants';

import axios from 'axios';

const AddIncome = (props) => {

    const [amount, setAmount] = useState('');
    const [source, setSource] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        console.log('editRowData', props.editRowData)
        let editData = props.editRowData;
        editData.amount ? setAmount(editData.amount) : setAmount('');
        editData.source ? setSource(editData.source) : setSource('');
        editData.date ? setDate(editData.date) : setDate('');
    }, [props.editRowData])

    const onChangeAmount = (event) => {
        setAmount(event.target.value)
    }

    const onChangeSource = (event) => {
        setSource(event.target.value)
    }

    const onChangeDate = (event) => {
        setDate(event.target.value)
    }

    const onClickAddIncome = () => {

        let obj = {
            amount,
            source,
            date,
            userId: localStorage.getItem('userId')
        }
        axios.post(SERVICE_URLS.ADD_INCOME, obj)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err.message))

    }


    const onClickEditIncome = (item) => {

        let editObj = {
            amount,
            source,
            date,
            // userId: localStorage.getItem('userId'),
            incomeId: item._id
        }

        axios.post(SERVICE_URLS.UPDATE_INCOME, editObj)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div className='add-income-window'>
            <div className='add-income-dialog'>
                <div className='add-income-header'>
                    <div className='add-income-title'>
                        {props.editRowData ? 'EDIT INCOME' : 'ADD INCOME'}
                    </div>
                    <div className='add-income-close' onClick={props.onClose}>X</div>
                </div>
                <div className='add-income-body'>
                    <div className='add-income-form'>
                        <div className='input-group'>
                            <label>Amount</label>
                            <input type='text'
                                value={amount}
                                onChange={onChangeAmount}
                            />
                        </div>
                        <div className='input-group'>
                            <label>Source</label>
                            <input type='text'
                                value={source}
                                onChange={onChangeSource}
                            />
                        </div>
                        <div className='input-group'>
                            <label>Date</label>
                            <input type='date'
                                value={date}
                                onChange={onChangeDate}
                            />
                        </div>
                        <div className='button-section'>
                            {
                                props.editRowData ?

                                    <button
                                        onClick={() => onClickEditIncome(props.editRowData)}
                                    >
                                        EDIT INCOME
                                 </button>

                                    :

                                    <button
                                        onClick={onClickAddIncome}
                                    >
                                        ADD INCOME
                                    </button>

                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddIncome;