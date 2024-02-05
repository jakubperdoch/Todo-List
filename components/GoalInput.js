import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
 const [enteredGoalText, setEnteredGoalText] = useState('');

 function goalInputHandler(enteredText) {
  setEnteredGoalText(enteredText);
 }

 function addGoalHandler() {
  props.onAddGoal(enteredGoalText);
  setEnteredGoalText('');
 }

 return (
  <View style={styles.inputContainer}>
   <TextInput
    style={styles.textInput}
    placeholder="Your Task"
    onChangeText={goalInputHandler}
    value={enteredGoalText}
   />
   <Button title="Add Task" onPress={addGoalHandler} />
  </View>
 );
}

const styles = StyleSheet.create({
 inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
 },
 textInput: { width: '70%', fontSize: 19 },
});

export default GoalInput;
