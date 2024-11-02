import { View, Text } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { useExpensesContext } from '../store/expenses-context'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
import { getMinustedDate } from '../util/date'
const RecentExpenses = () => {
  const { expenses } = useExpensesContext()

  const lastSevenDays = expenses.filter((expense) => {
    const today = new Date()
    const date7DaysAgo = getMinustedDate(today, 7)

    return expense.date > date7DaysAgo
  })


  return (
      <>
      <ExpensesOutput expenses={lastSevenDays} expensesPeriod={'Last 7 days'} />
      </>
  )
}
export default RecentExpenses