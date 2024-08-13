import { Link } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Page2() {
  return (
    <View>
      <Text>Page 2</Text>
      <Link href="/nestedstackwithlayout/page1" asChild>
        <Button title="Go to Page 1" />
      </Link>
    </View>
  );
}
