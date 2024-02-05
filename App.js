import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

export default function App() {
 const [enteredGoalText, setEnteredGoalText] = useState('');
 const [courseGoals, setCourseGoals] = useState([]);

 function goalInputHandler(enteredText) {
  setEnteredGoalText(enteredText);
 }

 function addGoalHandler() {
  setCourseGoals((currentCourseGoals) => [
   ...currentCourseGoals,
   enteredGoalText,
  ]);
 }

 return (
  <View style={styles.appContainer}>
   <Text style={styles.appTitle}>ToDo List</Text>
   <View style={styles.inputContainer}>
    <TextInput
     style={styles.textInput}
     placeholder="Your Task"
     onChangeText={goalInputHandler}
    />
    <Button title="Add Task" onPress={addGoalHandler} />
   </View>
   <View style={styles.goalContainer}>
    {courseGoals.map((goal, index) => (
     <Text style={styles.goalItem} key={index}>
      {goal}
     </Text>
    ))}
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 appContainer: {
  flex: 1,
  paddingTop: 90,
  gap: 20,
  paddingHorizontal: 35,
  flexDirection: 'column',
 },
 appTitle: {
  fontSize: 40,
  fontWeight: 'bold',
 },
 inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
 },
 textInput: { width: '70%', fontSize: 19 },
 goalContainer: {
  flex: 4,
 },
 goalItem: {
  fontSize: 16,
  backgroundColor: 'rgba(53, 56, 62, 0.05)',
  borderRadius: 5,
  paddingVertical: 15,
  paddingHorizontal: 15,
  marginVertical: 5,
  overflow: 'hidden',
 },
});
