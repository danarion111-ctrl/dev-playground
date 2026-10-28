// Раздел 03. Хуки React
// Тема 03.02: Паттерны работы со state
// Что изучить: функциональный апдейт, иммутабельность объектов и массивов, подъём состояния, derived state
//
// Как работать: 1) прочитай документацию  2) напиши 2-3 своих примера
// 3) сломай код специально и пойми ошибку  4) объясни тему своими словами.
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

const TITLE = 'Паттерны работы со state';

export default function StatePatternsPractice() {
  return (
    <ThemedView style={{ gap: Spacing.two }}>
      <ThemedText type="title">{TITLE}</ThemedText>
      <ThemedText>Пиши практику здесь.</ThemedText>
    </ThemedView>
  );
}
