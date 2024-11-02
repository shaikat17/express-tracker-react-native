import { View, Text } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { useExpensesContext } from '../store/expenses-context'
const AllExpenses = () => {
  const { expenses } = useExpensesContext()
  return (
      <>
          <ExpensesOutput expenses={expenses} expensesPeriod={'Total'} />
      </>
  )
}
export default AllExpenses