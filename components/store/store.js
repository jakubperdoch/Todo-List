import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (goalObject) => {
 try {
  const jsonValue = JSON.stringify(goalObject);
  console.log(jsonValue);
  await AsyncStorage.setItem('todo', jsonValue);
 } catch (e) {
  console.log(e);
 }
};

export const getData = async () => {
 try {
  const jsonValue = await AsyncStorage.getItem('todo');
  return jsonValue != null ? JSON.parse(jsonValue) : []; // Ensure to return an array
 } catch (e) {
  console.log(e);
  return []; // Return an empty array in case of an error
 }
};
