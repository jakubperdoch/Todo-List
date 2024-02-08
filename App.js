import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { useState } from 'react';
import {
 StyleSheet,
 View,
 Text,
 SafeAreaView,
 FlatList,
 Button,
} from 'react-native';

export default function App() {
 const [courseGoals, setCourseGoals] = useState([]);
 const [modalIsVisible, setModalIsVisible] = useState(false);

 function addGoalHandler(enteredGoalText) {
  setCourseGoals((currentCourseGoals) => [
   ...currentCourseGoals,
   { text: enteredGoalText, id: Math.random().toString() },
  ]);
 }

 function deleteGaolModal() {
  setModalIsVisible(true);
 }

 function deleteGoalHandler(id) {
  setCourseGoals((currentCourseGoals) => {
   return currentCourseGoals.filter((goal) => goal.id !== id);
  });
 }

 const scrollEnabled = courseGoals.length >= 11;

 return (
  <SafeAreaView style={{ flex: 1 }}>
   <View style={styles.appContainer}>
    <Text style={styles.appTitle}>ToDo List</Text>
    <GoalInput onAddGoal={addGoalHandler} />
    <FlatList
     data={courseGoals}
     renderItem={(itemData) => {
      return (
       <GoalItem
        text={itemData.item.text}
        onDeleteItem={deleteGoalHandler}
        id={itemData.item.id}
       />
      );
     }}
     scrollEnabled={scrollEnabled}
     style={styles.goalContainer}
    />
   </View>
  </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 appContainer: {
  flex: 1,
  paddingTop: 20,
  gap: 20,
  paddingHorizontal: 35,
  flexDirection: 'column',
 },
 appTitle: {
  fontSize: 40,
  fontWeight: 'bold',
 },
 goalContainer: {
  flex: 4,
 },
});
