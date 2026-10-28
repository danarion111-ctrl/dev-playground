
import { useSyncExternalStore } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

export function useColorScheme() {
  const colorScheme = useRNColorScheme();

  const hasHydrated = useSyncExternalStore(
      () => () => {},
      () => true,
      () => false,
  );

  return hasHydrated ? colorScheme : 'light';
}
