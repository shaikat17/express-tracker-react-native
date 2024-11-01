import { FlatList, StyleSheet, Text, View } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../constants/styles"

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