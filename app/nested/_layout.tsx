import { Slot } from 'expo-router';
import { Text } from 'react-native';

export default function NestedLayout() {
  return (
    <>
      <Text>Nested Layout</Text>
      <Slot />
    </>
  );
}
