import { useFonts } from 'expo-font';

export const useCustomFonts = () => {
 const [loaded] = useFonts({
  'poppins-regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  'poppins-bold': require('../../assets/fonts/Poppins-Bold.ttf'),
 });

 return loaded;
};
