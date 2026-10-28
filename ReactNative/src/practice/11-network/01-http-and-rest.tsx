// Раздел 11. Сеть и API
// Тема 11.01: HTTP и REST
// Что изучить: методы, статус-коды, заголовки, JSON, curl/Postman
//
// Как работать: 1) прочитай документацию  2) напиши 2-3 своих примера
// 3) сломай код специально и пойми ошибку  4) объясни тему своими словами.
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

const TITLE = 'HTTP и REST';

export default function HttpAndRestPractice() {
  return (
    <ThemedView style={{ gap: Spacing.two }}>
      <ThemedText type="title">{TITLE}</ThemedText>
      <ThemedText>Пиши практику здесь.</ThemedText>
    </ThemedView>
  );
}
