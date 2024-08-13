import { Slot } from 'expo-router';
import { Text } from 'react-native';

export default function Layout() {
  return (
    <>
      <Text>WithHeader</Text>
      <Slot />
    </>
  );
}
