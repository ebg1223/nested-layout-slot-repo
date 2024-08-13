import { Link } from 'expo-router';
import { Button, Text, View } from 'react-native';

import NestedHeader from './nestedheader';

export default function Page1() {
  return (
    <>
      <NestedHeader />
      <View>
        <Text>Page 1</Text>
        <Link href="/desiredbehavior/page2" asChild>
          <Button title="Go to Page 2" />
        </Link>
      </View>
    </>
  );
}
