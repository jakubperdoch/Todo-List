import { Text, StyleSheet } from 'react-native';

function GoalItem(props) {
 return <Text style={styles.goalItem}>{props.text}</Text>;
}

const styles = StyleSheet.create({
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
export default GoalItem;
