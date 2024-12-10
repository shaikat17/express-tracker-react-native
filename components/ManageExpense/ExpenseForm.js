import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import { GlobalStyles } from "../../constants/styles";

const ExpenseForm = ({ onCancel, onSubmit, isEditing, defaultValues }) => {
  // states
  const [inputValues, setInputValues] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? new Date(defaultValues.date).toISOString().slice(0, 10) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  const inputChangeHandler = (inputIdentifier, 
      enteredValue) => {
    setInputValues((prevInputValues) => {
      return {
        ...prevInputValues,
        [inputIdentifier]: {
          value: enteredValue,
          isValid: true,
        },
      };
    });
  };
    
    const submitHandler = () => {
        const expenseData = {
            amount: +inputValues.amount.value,
            date: new Date(inputValues.date.value),
            description: inputValues.description.value,
        };
      
      const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
      const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
      const descriptionIsValid = expenseData.description.trim().length > 0;

      if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
        //Alert.alert('Invalid input value(s). Please check your entered data!')

        setInputValues((prevInputValues) => {
          return {
            amount: {
              value: prevInputValues.amount.value,
              isValid: amountIsValid,
            },
            date: {
              value: prevInputValues.date.value,
              isValid: dateIsValid,
            },
            description: {
              value: prevInputValues.description.value,
              isValid: descriptionIsValid,
            },
          };
        })
        return;
      }

        onSubmit(expenseData)
    }
  
  const isFormValid =
      !inputValues.amount.isValid ||
      !inputValues.date.isValid ||
      !inputValues.description.isValid
    

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          inValid={!inputValues.amount.isValid}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount.value,
          }}
          style={styles.rowInput}
        />
        <Input
          inValid={!inputValues.date.isValid}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date.value,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        inValid={!inputValues.description.isValid}
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          autoCapitalize: "none",
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description.value,
        }}
      />
      {isFormValid && (
        <Text style={styles.errorText}>
          Please check your entered data for errors!
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
};
export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
    fontSize: 16,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
