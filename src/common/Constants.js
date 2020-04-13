const BASE_URL = 'https://income-expensive.herokuapp.com';

export const SERVICE_URLS = {

    REGISTER: `${BASE_URL}/user/register`,
    LOG_IN: `${BASE_URL}/user/login`,
    CHANGE_PASSWORD: `${BASE_URL}/user/changePassword`,
    ADD_INCOME: `${BASE_URL}/income/add`,
    UPDATE_INCOME: `${BASE_URL}/income/update`,
    GET_INCOME: `${BASE_URL}/income/getIncome`,
    DELETE_INCOME: `${BASE_URL}/income/delete`

}
export const SCREENS = {

    LOGIN: '/login',
    REGISTER: '/register',
    CHANGE_PASSWORD: '/changePassword',
    HOME: '/home',
    INCOME: '/home/income',
    EXPENSES: '/home/expenses',
    HISTORY: '/home/history'

}

export const MENUS = [

    { name: 'Income', navigateTo: '/home/income' },
    { name: 'Expenses', navigateTo: '/home/expenses' },
    { name: 'History', navigateTo: '/home/history' }
]