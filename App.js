import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { useEffect, useState } from 'react';
import {
 StyleSheet,
 View,
 Text,
 SafeAreaView,
 FlatList,
 Image,
} from 'react-native';
import { getData, storeData } from './components/store/store';
import { fonts } from './components/fonts/Fonts';
import * as Fonts from 'expo-font';

export default function App() {
 const [courseGoals, setCourseGoals] = useState([]);

 useEffect(() => {
  async function loadFonts() {
   await Fonts.loadAsync(fonts);
   setFontLoaded(true);
  }

  loadFonts();
 }, []);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const data = await getData();
    if (data && Array.isArray(data)) {
     console.log(data);
     setCourseGoals(data);
    }
   } catch (e) {
    console.log(e);
   }
  };
  fetchData();
 }, []);

 function addGoalHandler(enteredGoalText) {
  setCourseGoals((currentCourseGoals) => [
   ...currentCourseGoals,
   { text: enteredGoalText, id: Math.random().toString() },
  ]);
  const goalArray = [
   ...courseGoals,
   { text: enteredGoalText, id: Math.random().toString() },
  ];
  storeData(goalArray);
 }

 function deleteGoalHandler(id) {
  setCourseGoals((currentCourseGoals) => {
   return currentCourseGoals.filter((goal) => goal.id !== id);
  });
 }

 const scrollEnabled = courseGoals.length >= 11;

 return (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#fff1e6' }}>
   <View style={styles.appContainer}>
    <View style={styles.titleContainer}>
     <Text style={styles.appTitle}>ToDo List</Text>
     <Image
      style={styles.title_icon}
      source={require('./assets/images/clipboard.png')}
     />
    </View>
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
 titleContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: '20',
 },
 appTitle: {
  fontSize: 40,
  fontWeight: 'bold',
  color: '#7f5539',
  textDecorationLine: 'underline',
  fontFamily: 'poppins-bold',
 },
 title_icon: {
  marginTop: 3,
  height: 30,
  width: 30,
 },
 goalContainer: {
  flex: 4,
 },
});
