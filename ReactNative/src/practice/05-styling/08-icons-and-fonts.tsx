// Раздел 05. Стилизация и вёрстка
// Тема 05.08: Иконки и шрифты
// Что изучить: @expo/vector-icons, expo-font, кастомные шрифты
//
// Как работать: 1) прочитай документацию  2) напиши 2-3 своих примера
// 3) сломай код специально и пойми ошибку  4) объясни тему своими словами.
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

const TITLE = 'Иконки и шрифты';

export default function IconsAndFontsPractice() {
  return (
    <ThemedView style={{ gap: Spacing.two }}>
      <ThemedText type="title">{TITLE}</ThemedText>
      <ThemedText>Пиши практику здесь.</ThemedText>
    </ThemedView>
  );
}
