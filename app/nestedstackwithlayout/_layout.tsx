import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
export default function NestedStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="page1" />
      <Stack.Screen name="page2" />
    </Stack>
  );
}
