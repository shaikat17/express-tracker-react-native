import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

import { Ionicons } from '@expo/vector-icons';
import Button from "../components/UI/Button";
import { useExpensesContext } from "../store/expenses-context";

const ManageExpense = ({ route, navigation }) => {
    const id = route.params?.expenseId;
    const isEditing = !!id;

  const { deleteExpense, updateExpense, addExpense } = useExpensesContext();
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

  function deleteExpenseHandler() { 
    // console.log(id);
    deleteExpense(id);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
   }

  function confirmHandler() {
    if (isEditing) {
      updateExpense(id, {
        description: 'Test Updated description',
        amount: 123,
        date: new Date(),
      });
    } else {
      const expenseData = {
        description: 'Test description',
        amount: 123,
        date: new Date(),
      };
      addExpense(expenseData);
    }
    navigation.goBack();
   }
  
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode='flat' onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button} onPress={confirmHandler}>{ isEditing ? 'Update' : 'Add' }</Button>
      </View>
      {isEditing && <View style={styles.deleteContainer}>
        <Ionicons name="trash" size={36} color={GlobalStyles.colors.error500} onPress={deleteExpenseHandler} />
      </View>}
    </View>
  );
};
export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  }, 
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
});