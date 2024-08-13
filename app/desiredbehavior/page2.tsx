import { Link } from 'expo-router';
import { Button, Text, View } from 'react-native';

import NestedHeader from './nestedheader';

export default function Page2() {
  return (
    <>
      <NestedHeader />
      <View>
        <Text>Page 2</Text>
        <Link href="/desiredbehavior/page1" asChild>
          <Button title="Go to Page 1" />
        </Link>
      </View>
    </>
  );
}
