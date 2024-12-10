import { View, Text } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { useExpensesContext } from '../store/expenses-context'
import { getMinustedDate } from '../util/date'
import { useEffect, useState } from 'react'
import { fetchExpenses } from '../util/http'
const RecentExpenses = () => {
  const {expenses, setExpenses } = useExpensesContext()

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses()
      setExpenses(expenses)
    }

    getExpenses()
  }, [])

  const lastSevenDays = expenses.filter((expense) => {
    const today = new Date()
    const date7DaysAgo = getMinustedDate(today, 7)

    return new Date(expense.date) > date7DaysAgo
  })


  return (
      <>
      <ExpensesOutput expenses={lastSevenDays} expensesPeriod={'Last 7 days'} fallbackText={'No expenses registered for the last 7 days'} />
      </>
  )
}
export default RecentExpenses