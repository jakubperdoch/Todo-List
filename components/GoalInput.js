import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
 const [enteredGoalText, setEnteredGoalText] = useState('');

 function goalInputHandler(enteredText) {
  setEnteredGoalText(enteredText);
 }

 function addGoalHandler() {
  if (enteredGoalText.trim() !== '' && enteredGoalText != null) {
   props.onAddGoal(enteredGoalText);
   setEnteredGoalText('');
  }
 }

 return (
  <View style={styles.inputContainer}>
   <TextInput
    style={styles.textInput}
    placeholder="Your Task...."
    onChangeText={goalInputHandler}
    value={enteredGoalText}
    placeholderTextColor={'#7f5539'}
   />
   <Button title="Add Task" onPress={addGoalHandler} color={'#7f5539'} />
  </View>
 );
}

const styles = StyleSheet.create({
 inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
 },
 textInput: {
  width: '70%',
  fontSize: 19,
  fontFamily: 'poppins-regular',
  color: '#7f5539',
  borderBottomColor: '#7f5539',
 },
});

export default GoalInput;
