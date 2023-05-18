import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

export default function Btn() {
  return (
    <Button
    title="Press me"
    onPress={() => Alert.alert('Simple Button pressed')}
  />

  );
}

