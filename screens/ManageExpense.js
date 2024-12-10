import { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

import { Ionicons } from '@expo/vector-icons';
import Button from "../components/UI/Button";
import { useExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense, updateExpenseD, deleteExpenseD } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

const ManageExpense = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

    const id = route.params?.expenseId;
  const isEditing = !!id;

  const { deleteExpense, updateExpense, addExpense, expenses } = useExpensesContext();

  const selectedExpense = expenses.find((expense) => expense.id === id);

  
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

  function deleteExpenseHandler() { 
    setIsLoading(true);
    // console.log(id);
    deleteExpense(id);
    deleteExpenseD(id);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
   }

  async function confirmHandler(expenseData) {
    setIsLoading(true);
    if (isEditing) {
      updateExpense(id, expenseData);
      updateExpenseD(id, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      addExpense({...expenseData, id: id});
    }
    navigation.goBack();
  }
  
  if (isLoading) {
    return <LoadingOverlay />
  }
  
  return (
    <View style={styles.container}>
      <ExpenseForm onSubmit={confirmHandler} onCancel={cancelHandler} isEditing={isEditing} defaultValues={selectedExpense} />
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
  
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
});