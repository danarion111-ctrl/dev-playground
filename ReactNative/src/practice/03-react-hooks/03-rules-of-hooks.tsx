// Раздел 03. Хуки React
// Тема 03.03: Правила хуков и жизненный цикл
// Что изучить: хуки только на верхнем уровне, mount/update/unmount, Strict Mode
//
// Как работать: 1) прочитай документацию  2) напиши 2-3 своих примера
// 3) сломай код специально и пойми ошибку  4) объясни тему своими словами.
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

const TITLE = 'Правила хуков и жизненный цикл';

export default function RulesOfHooksPractice() {
  return (
    <ThemedView style={{ gap: Spacing.two }}>
      <ThemedText type="title">{TITLE}</ThemedText>
      <ThemedText>Пиши практику здесь.</ThemedText>
    </ThemedView>
  );
}
