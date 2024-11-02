import { FlatList, StyleSheet, Text, View } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../constants/styles"



const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
          <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
          <ExpensesList expenses={DUMMY_EXPENSES} />
          
    </View>
  )
}
export default ExpensesOutput

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1
    }

})