import { Audio } from 'expo-av';
import { useState, useEffect } from 'react';

export const playFinishedSound = () => {
 const [sound, setSound] = useState();

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
};
