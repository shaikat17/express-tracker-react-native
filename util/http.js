import axios from "axios";

const BASE_URL = 'https://native-expense-tracker-cab76-default-rtdb.asia-southeast1.firebasedatabase.app'

async function storeExpense(expenseData) {
    const response = await axios.post(BASE_URL + '/expenses.json', expenseData)

    const id = response.data.name;

    return id
}

async function fetchExpenses() {
    const response = await axios.get(BASE_URL + '/expenses.json')

    const expenses = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            ...response.data[key]
        }
        expenses.push(expenseObj)
    }

    return expenses;
}

function updateExpenseD(id, expenseData) {
    return axios.put(BASE_URL + '/expenses/' + id + '.json', expenseData)
}

function deleteExpenseD(id) {
    return axios.delete(BASE_URL + '/expenses/' + id + '.json')
}

export { storeExpense, fetchExpenses, updateExpenseD, deleteExpenseD }