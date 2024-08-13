import { Link } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Page2() {
  return (
    <View>
      <Text>Page 1</Text>
      <Link href="/nestedstack/page2" asChild>
        <Button title="Go to Page 2" />
      </Link>
    </View>
  );
}
