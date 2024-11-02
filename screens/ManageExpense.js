import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

import { Ionicons } from '@expo/vector-icons';
import Button from "../components/UI/Button";

const ManageExpense = ({ route, navigation }) => {
    const id = route.params?.expenseId;
    const isEditing = !!id;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

  function deleteExpenseHandler() { }

  function cancelHandler() { }

  function confirmHandler() { }
  
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