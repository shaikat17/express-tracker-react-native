import axios from "axios";

const BASE_URL = 'https://native-expense-tracker-cab76-default-rtdb.asia-southeast1.firebasedatabase.app'

function storeExpense(expenseData) {
    axios.post(BASE_URL + '/expenses.json', expenseData)
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

export { storeExpense, fetchExpenses }