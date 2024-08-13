import { Stack, Link } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />
        <Link href="/nonested/page1" asChild>
          <Button title="Go to Non Nested Page 1" />
        </Link>
        <Link href="/nested/page1" asChild>
          <Button title="Go to Nested Page 1" />
        </Link>
        <Link href="/nestedstack/page1" asChild>
          <Button title="Go to Nested Stack Page 1" />
        </Link>
        <Link href="/nestedstackwithlayout/page1" asChild>
          <Button title="Go to Nested Stack With Group Layout Page 1" />
        </Link>
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link>
      </Container>
    </>
  );
}
