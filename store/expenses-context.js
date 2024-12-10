import { createContext, useContext, useReducer } from "react";


export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => { },
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [ action.payload, ...state];
    
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;
    
    
    case "DELETE":
      // console.log(action.payload);
      return state.filter((expense) => expense.id !== action.payload);
    
    
    default:
      return state;
  } 
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData) {
    console.log(expenseData)
    dispatch({
      type: "ADD",
      payload: expenseData,
    });
  }

  function setExpenses(expenses) {
    dispatch({
      type: "SET",
      payload: expenses,
    });
  }

  function deleteExpense(id) {
    // console.log(id);
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  function updateExpense(id, expenseData) {
    dispatch({
      type: "UPDATE",
      payload: {
        id: id,
        data: expenseData,
      },
    });
  }

  return (
    <ExpenseContext.Provider
      value={{
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
        setExpenses: setExpenses
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export const useExpensesContext = () => {
  return useContext(ExpenseContext);
};
export default ExpensesContextProvider;
