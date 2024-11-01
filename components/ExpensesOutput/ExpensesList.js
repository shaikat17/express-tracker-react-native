import { View, Text, FlatList } from 'react-native'
const ExpensesList = ({ expenses }) => {
  return (
    <View>
          <FlatList data={expenses} keyExtractor={(item) => item.id} renderItem={(itemData)  => <Text>{itemData.item.description}</Text>} />
    </View>
  )
}
export default ExpensesList