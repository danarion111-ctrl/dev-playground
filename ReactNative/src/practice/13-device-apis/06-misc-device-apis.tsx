// Раздел 13. Устройство и платформа
// Тема 13.06: Haptics, Clipboard, Share, NetInfo
// Что изучить: мелкие API, которые часто нужны в продакшене
//
// Как работать: 1) прочитай документацию  2) напиши 2-3 своих примера
// 3) сломай код специально и пойми ошибку  4) объясни тему своими словами.
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

const TITLE = 'Haptics, Clipboard, Share, NetInfo';

export default function MiscDeviceApisPractice() {
  return (
    <ThemedView style={{ gap: Spacing.two }}>
      <ThemedText type="title">{TITLE}</ThemedText>
      <ThemedText>Пиши практику здесь.</ThemedText>
    </ThemedView>
  );
}
