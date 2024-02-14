import { Text, StyleSheet, Pressable, Image, Animated } from 'react-native';
import Checkbox from 'expo-checkbox';
import * as Font from 'expo-font';
import { Audio } from 'expo-av';
import { createModal } from './DeleteAlert';
import { useRef, useState, useEffect } from 'react';

function GoalItem(props) {
 const fadeAnim = useRef(new Animated.Value(0)).current;
 const [isChecked, setChecked] = useState(false);
 const [sound, setSound] = useState();
 const [hasPlayedSound, setHasPlayedSound] = useState(false);

 async function finishSound() {
  console.log('Loading Sound');

  const { sound } = await Audio.Sound.createAsync(
   require('../assets/sounds/taskSound.mp3')
  );

  setSound(sound);

  await sound.playAsync();
 }
 useEffect(() => {
  return sound
   ? () => {
      console.log('Unloading Sound');
      sound.unloadAsync();
     }
   : undefined;
 }, [sound]);

 useEffect(() => {
  Animated.timing(fadeAnim, {
   toValue: 1,
   duration: 300,
   useNativeDriver: true,
  }).start();
 }, [fadeAnim]);

 useEffect(() => {
  if (isChecked && !hasPlayedSound) {
   finishSound();
   setHasPlayedSound(true);
   setTimeout(() => {
    props.onDeleteItem(props.id);
   }, 400);
  }
 }, [isChecked, hasPlayedSound]);

 return (
  <Animated.View style={{ ...styles.goalItem, opacity: fadeAnim }}>
   <Pressable
    onPress={createModal.bind(this, props.id, props.onDeleteItem)}
    style={({ pressed }) => pressed && styles.pressedItem}
   >
    <Image
     style={styles.deleteIcon}
     source={require('../assets/images/close.png')}
    />
   </Pressable>
   <Text style={styles.goalItemText}>{props.text}</Text>
   <Checkbox
    value={isChecked}
    onValueChange={setChecked}
    color={isChecked ? 'rgba(0, 205, 45, 1)' : undefined}
    style={styles.checkedItem}
   />
  </Animated.View>
 );
}

const styles = StyleSheet.create({
 goalItem: {
  borderRadius: 5,
  height: 40,
  backgroundColor: 'rgba(53, 56, 62, 0.07)',
  paddingHorizontal: 15,
  marginVertical: 5,
  alignItems: 'center',
  justifyContent: 'start',
  gap: '25',
  flexDirection: 'row',
 },
 goalItemText: {
  fontSize: 16,
  fontFamily: 'poppins-regular',
  color: '#7f5539',
 },
 pressedItem: {
  opacity: 0.7,
 },
 deleteIcon: {
  height: 13,
  width: 13,
 },
 checkedItem: {
  marginStart: 'auto',
  borderRadius: 5,
 },
});
export default GoalItem;
