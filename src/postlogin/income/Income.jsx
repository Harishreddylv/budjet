import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { SERVICE_URLS } from '../../common/Constants'

import AddIncome from './AddIncome';
import RowItem from './RowItem';

const Income = () => {

    const [isAddIncome, setIsAddIncome] = useState(false);
    const [incomeList, setIncomeList] = useState([]);
    const [editRowData, setEditRowData] = useState('');

    useEffect(() => {

        let obj = {
            userId: localStorage.getItem('userId')
        }
        axios.post(SERVICE_URLS.GET_INCOME, obj)
            .then(res => {
                if (res && res.data && res.data.incomeList.length > 0) {
                    setIncomeList(res.data.incomeList)
                }
            })
            .catch(err => console.log(err.message))
    }, []);

    const onCLickAddIncome = () => {
        setIsAddIncome(true)
    }

    const onCloseAddIncome = () => {
        setIsAddIncome(false)
    }

    const editDialog = (item) => {
        setIsAddIncome(true)
        setEditRowData(item);

    }
    return (

        <div className='income-container'>
            <div className='add-income'>
                <button onClick={onCLickAddIncome}> ADD INCOME</button>
            </div>
            <div className='income-list-container'>
                <RowItem incomeLists={incomeList}
                    parentCB={(item) => editDialog(item)}
                />
            </div>

            {
                isAddIncome ?
                    <AddIncome onClose={onCloseAddIncome}
                        editRowData={editRowData}
                    />
                    :
                    ''

            }
        </div>



    )
}

export default Income;
