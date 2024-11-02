import { createContext } from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.99,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.99,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e6',
        description: 'A pair of trousers',
        amount: 89.99,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e7',
        description: 'A pair of trousers',
        amount: 89.99,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e8',
        description: 'A pair of trousers',
        amount: 89.99,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e9',
        description: 'A pair of trousers',
        amount: 89.99,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e10',
        description: 'A pair of trousers',
        amount: 89.99,
        date: new Date('2021-12-19'),
    },
    
]

export const ExpenseContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => {},
    deleteExpense: id => {},
    updateExpense: (id, { description, amount, date }) => {} 
})

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString()
            return [{...action.payload, id: id}, ...state]
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            )
            const updatableExpense = state[updatableExpenseIndex]
            const updatedItem = { ...updatableExpense, ...action.payload.data }
            const updatedExpenses = [...state]
            updatedExpenses[updatableExpenseIndex] = updatedItem

            return updatedExpenses
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload.id)
        default: 
            return state
    }
}

function ExpensesContextProvider({ children }) {

const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES)
    
    function addExpense( expenseData ) {
        dispatch({
            type: 'ADD',
            payload: expenseData
        })
    }

    function deleteExpense(id) {
        dispatch({
            type: 'DELETE',
            payload: id
        })
    }

    function updateExpense(id, expenseData) {
        dispatch({
            type: 'UPDATE',
            payload: {
                id: id,
                data: expenseData
            }
        })
    }

    return (
        <ExpenseContext.Provider value={{
            
        }}>
            {children}
        </ExpenseContext.Provider>
    )
}

export default expensesContextProvider