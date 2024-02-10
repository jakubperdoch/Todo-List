import { Text, StyleSheet, Pressable, Image, Animated } from 'react-native';
import { createModal } from './DeleteAlert';
import { useRef, useEffect } from 'react';

function GoalItem(props) {
 const fadeAnim = useRef(new Animated.Value(0)).current;

 useEffect(() => {
  Animated.timing(fadeAnim, {
   toValue: 1,
   duration: 300,
   useNativeDriver: true,
  }).start();
 }, [fadeAnim]);

 return (
  <Animated.View style={{ ...styles.goalItem, opacity: fadeAnim }}>
   <Pressable
    onPress={createModal.bind(this, props.id, props.onDeleteItem)}
    style={({ pressed }) => pressed && styles.pressedItem}
   >
    <Image style={styles.deleteIcon} source={require('../assets/close.png')} />
   </Pressable>
   <Text style={styles.goalItemText}>{props.text}</Text>
  </Animated.View>
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
