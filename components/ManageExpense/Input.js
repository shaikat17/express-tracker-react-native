import { StyleSheet, Text, TextInput, View } from "react-native"
import { GlobalStyles } from "../../constants/styles"

const Input = ({ label, style, textInputConfig, inValid }) => {
  return (
    <View style={[styles.container, style]}>
          <Text style={[styles.label, inValid && styles.inValidLabel]}>{label}</Text>
          <TextInput style={[styles.input, textInputConfig.multiline && styles.inputMultiline , inValid && styles.inValidInput]} {...textInputConfig} />
    </View>
  )
}
export default Input

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        marginHorizontal: 4,
    },
    label: {
        fontSize: 18,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    input: {
        padding: 8,
        fontSize: 18,
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        borderRadius: 6,
        fontWeight: 'bold',
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    },
    inValidLabel: {
        color: GlobalStyles.colors.error500
    },
    inValidInput: {
        backgroundColor: GlobalStyles.colors.error50
    }
})