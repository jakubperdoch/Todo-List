import { Text, StyleSheet, Pressable, Image, View } from 'react-native';

function GoalItem(props) {
 return (
  <View style={styles.goalItem}>
   <Pressable
    onPress={props.onDeleteItem.bind(this, props.id)}
    style={({ pressed }) => pressed && styles.pressedItem}
   >
    <Image style={styles.deleteIcon} source={require('../assets/close.png')} />
   </Pressable>
   <Text style={styles.goalItemText}>{props.text}</Text>
  </View>
 );
}

const styles = StyleSheet.create({
 goalItem: {
  borderRadius: 5,
  height: 40,
  backgroundColor: 'rgba(53, 56, 62, 0.05)',
  paddingHorizontal: 15,
  marginVertical: 5,
  alignItems: 'center',
  justifyContent: 'start',
  gap: '25',
  flexDirection: 'row',
 },
 goalItemText: {
  fontSize: 16,
 },
 pressedItem: {
  opacity: 0.7,
 },
 deleteIcon: {
  height: 12,
  width: 12,
 },
});
export default GoalItem;
