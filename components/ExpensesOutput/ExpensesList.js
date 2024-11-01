import { View, Text, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return (
    <ExpenseItem {...itemData.item}
    />
  );
}
const ExpensesList = ({ expenses }) => {
  return (
    <View>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={renderExpenseItem}
      />
    </View>
  );
};
export default ExpensesList;
