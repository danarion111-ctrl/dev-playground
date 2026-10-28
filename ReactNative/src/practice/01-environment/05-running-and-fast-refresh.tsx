// Раздел 01. Окружение и инструменты
// Тема 01.05: Запуск и Fast Refresh
// Что изучить: Metro, npx expo start, Expo Go, эмулятор Android, телефон по кабелю/Wi-Fi, Fast Refresh
//
// Как работать: 1) прочитай документацию  2) напиши 2-3 своих примера
// 3) сломай код специально и пойми ошибку  4) объясни тему своими словами.
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

const TITLE = 'Запуск и Fast Refresh';

export default function RunningAndFastRefreshPractice() {
  return (
    <ThemedView style={{ gap: Spacing.two }}>
      <ThemedText type="title">{TITLE}</ThemedText>
      <ThemedText>Пиши практику здесь.</ThemedText>
    </ThemedView>
  );
}
