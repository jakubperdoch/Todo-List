import { Alert } from 'react-native';

export const createModal = (id, onDeleteItem) =>
 Alert.alert('Do you really want to delete this task ?', '', [
  {
   text: 'Cancel',
   onPress: () => console.log('Canel Pressed'),
  },
  {
   text: 'Yes',
   onPress: () => {
    onDeleteItem(id);
   },
  },
 ]);
