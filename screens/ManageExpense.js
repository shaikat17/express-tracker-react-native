import { useLayoutEffect } from "react";
import { View, Text } from "react-native";
const ManageExpense = ({ route, navigation }) => {
    const id = route.params?.expenseId;
    const isEditing = !!id;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

  return (
    <View>
      <Text>ManageExpense</Text>
    </View>
  );
};
export default ManageExpense;
