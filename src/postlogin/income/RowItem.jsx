import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {SERVICE_URLS } from '../../common/Constants';


const RowItem = (props) => {

    const [incomeList, setIncomeList] = useState([]);

    useEffect(()=>{
        setIncomeList(props.incomeLists)
    },[props.incomeLists])

    
    const onClickIncomeEdit = (item) => {
            props.parentCB(item)
    }

    const onClickIncomeDelete = (id) => {

        let obj = {
            userId:localStorage.getItem('userId'),
            incomeId:id
        }
        axios.post(SERVICE_URLS.DELETE_INCOME, obj)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className='row-item-container'>

            {
                incomeList.length > 0 ?

                incomeList.map((item, index) => {

                        return (
                            <div className='item-row' key={index}>
                                <div className='row-data'>{item.amount}</div>
                                <div className='row-data'>{item.source}</div>
                                <div className='row-data'>{item.date}</div>
                                <div className='row-data'>
                                    <button
                                        className='income-edit-btn'
                                        onClick={()=>onClickIncomeEdit(item)}
                                    >
                                        EDIT
                                    </button>
                                    <button
                                        className='income-delete-btn'
                                        onClick={()=>onClickIncomeDelete(item._id)}
                                    >
                                        DELETE
                                    </button>
                                </div>
                            </div>
                        )
                    })

                    :

                    <div className=''>No Income data available.</div>
            }

        </div>
    )
}

export default RowItem;