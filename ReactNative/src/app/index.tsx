import { useCallback, useEffect, useState } from 'react';
import { BackHandler, Platform, Pressable, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

/*
 * КАК ДОБАВИТЬ НОВУЮ ТЕМУ (3 шага):
 *   1. Создай файл в нужной папке: src/practice/<папка>/<NN-имя>.tsx с `export default`.
 *   2. Добавь import в блок своего раздела ниже.
 *   3. Добавь строку { title: '...', Component: ... } в topics того же раздела.
 * Порядок строк в topics = порядок изучения = номера файлов (01-, 02-, ...).
 */

// ─── 01. Основы React ────────────────────────────────────────────────
// import JsxPractice from '@/practice/01-react-basics/01-jsx';

// ─── 02. Хуки React ──────────────────────────────────────────────────
// import UseStatePractice from '@/practice/02-react-hooks/01-use-state';

// ─── 03. Базовые компоненты React Native ─────────────────────────────

// ─── 04. Стилизация и вёрстка ────────────────────────────────────────

// ─── 05. Списки ──────────────────────────────────────────────────────

// ─── 06. Формы ───────────────────────────────────────────────────────

// ─── 07. Навигация ───────────────────────────────────────────────────

// ─── 08. Управление состоянием ───────────────────────────────────────

// ─── 09. Хранение данных ─────────────────────────────────────────────

// ─── 10. Сеть и API ──────────────────────────────────────────────────

// ─── 11. Анимации ────────────────────────────────────────────────────

// ─── 12. Устройство и платформа ──────────────────────────────────────

// ─── 13. Качество кода ───────────────────────────────────────────────

// ─── 14. Сборка и публикация ─────────────────────────────────────────

// ─── 15. Итоговые проекты ────────────────────────────────────────────

type Topic = { title: string; Component: React.ComponentType };
type Section = { name: string; topics: Topic[] };
type FlatTopic = Topic & { sectionName: string; code: string };

const SECTIONS: Section[] = [
  {
    name: '01. Основы React',
    topics: [
      // { title: 'JSX', Component: JsxPractice },
    ],
  },
  {
    name: '02. Хуки React',
    topics: [
      // { title: 'useState', Component: UseStatePractice },
    ],
  },
  {
    name: '03. Базовые компоненты React Native',
    topics: [],
  },
  {
    name: '04. Стилизация и вёрстка',
    topics: [],
  },
  {
    name: '05. Списки',
    topics: [],
  },
  {
    name: '06. Формы',
    topics: [],
  },
  {
    name: '07. Навигация',
    topics: [],
  },
  {
    name: '08. Управление состоянием',
    topics: [],
  },
  {
    name: '09. Хранение данных',
    topics: [],
  },
  {
    name: '10. Сеть и API',
    topics: [],
  },
  {
    name: '11. Анимации',
    topics: [],
  },
  {
    name: '12. Устройство и платформа',
    topics: [],
  },
  {
    name: '13. Качество кода',
    topics: [],
  },
  {
    name: '14. Сборка и публикация',
    topics: [],
  },
  {
    name: '15. Итоговые проекты',
    topics: [],
  },
];

const pad = (n: number) => String(n).padStart(2, '0');

// Плоский список всех тем в порядке изучения (для кнопок «Предыдущая / Следующая»)
const FLAT_TOPICS: FlatTopic[] = SECTIONS.flatMap((section, s) =>
    section.topics.map((topic, t) => ({
      ...topic,
      sectionName: section.name,
      code: `${pad(s + 1)}.${pad(t + 1)}`,
    })),
);

export default function HomeScreen() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    [SECTIONS[0].name]: true,
  });

  const closeTopic = useCallback(() => setSelectedIndex(null), []);
  const goTo = useCallback(
      (offset: number) => setSelectedIndex((i) => (i === null ? i : i + offset)),
      [],
  );
  const toggleSection = (name: string) =>
      setOpenSections((prev) => ({ ...prev, [name]: !prev[name] }));

  // Аппаратная кнопка «Назад» на Android возвращает к списку, а не закрывает приложение
  useEffect(() => {
    if (Platform.OS !== 'android' || selectedIndex === null) {
      return undefined;
    }
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      setSelectedIndex(null);
      return true;
    });
    return () => subscription.remove();
  }, [selectedIndex]);

  const selected = selectedIndex === null ? null : FLAT_TOPICS[selectedIndex];
  const hasPrev = selectedIndex !== null && selectedIndex > 0;
  const hasNext = selectedIndex !== null && selectedIndex < FLAT_TOPICS.length - 1;

  return (
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          {selected ? (
              <>
                <ThemedView style={styles.topBar}>
                  <Pressable onPress={closeTopic} style={styles.backButton}>
                    <ThemedText type="code">← К списку тем</ThemedText>
                  </Pressable>
                  <ThemedText type="small">
                    {selected.code} · {selected.sectionName}
                  </ThemedText>
                </ThemedView>

                <ScrollView key={selected.code} contentContainerStyle={styles.content}>
                  <selected.Component />
                </ScrollView>

                <ThemedView style={styles.footer}>
                  <Pressable
                      disabled={!hasPrev}
                      onPress={() => goTo(-1)}
                      style={[styles.navButton, !hasPrev && styles.navButtonDisabled]}>
                    <ThemedText type="code">← Предыдущая</ThemedText>
                  </Pressable>
                  <Pressable
                      disabled={!hasNext}
                      onPress={() => goTo(1)}
                      style={[styles.navButton, !hasNext && styles.navButtonDisabled]}>
                    <ThemedText type="code">Следующая →</ThemedText>
                  </Pressable>
                </ThemedView>
              </>
          ) : (
              <ScrollView contentContainerStyle={styles.listContent}>
                <ThemedText type="title" style={styles.title}>
                  React Native: практика
                </ThemedText>
                <ThemedText type="small">
                  Платформа: {Platform.OS}. Тем: {FLAT_TOPICS.length}. Иди строго сверху вниз:
                  номер папки и файла = порядок изучения.
                </ThemedText>

                {SECTIONS.map((section) => {
                  const isOpen = !!openSections[section.name];
                  return (
                      <ThemedView key={section.name} style={styles.section}>
                        <Pressable
                            onPress={() => toggleSection(section.name)}
                            style={styles.sectionHeader}>
                          <ThemedText type="code" style={styles.sectionName}>
                            {isOpen ? '▾' : '▸'} {section.name}
                          </ThemedText>
                          <ThemedText type="small">{section.topics.length}</ThemedText>
                        </Pressable>

                        {isOpen && (
                            <ThemedView type="backgroundElement" style={styles.card}>
                              {section.topics.length === 0 ? (
                                  <ThemedText type="small" style={styles.empty}>
                                    Тем пока нет
                                  </ThemedText>
                              ) : (
                                  section.topics.map((topic, t) => (
                                      <Pressable
                                          key={topic.title}
                                          onPress={() =>
                                              setSelectedIndex(
                                                  FLAT_TOPICS.findIndex((f) => f.Component === topic.Component),
                                              )
                                          }
                                          style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}>
                                        <ThemedText>
                                          {pad(t + 1)}. {topic.title}
                                        </ThemedText>
                                      </Pressable>
                                  ))
                              )}
                            </ThemedView>
                        )}
                      </ThemedView>
                  );
                })}
              </ScrollView>
          )}
        </SafeAreaView>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    maxWidth: MaxContentWidth,
    paddingHorizontal: Spacing.three,
  },
  content: {
    gap: Spacing.three,
    paddingVertical: Spacing.three,
    paddingBottom: Spacing.four,
  },
  listContent: {
    gap: Spacing.three,
    paddingVertical: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  backButton: {
    paddingVertical: Spacing.two,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Spacing.two,
    paddingBottom: BottomTabInset + Spacing.two,
  },
  navButton: {
    paddingVertical: Spacing.two,
  },
  navButtonDisabled: {
    opacity: 0.3,
  },
  section: {
    gap: Spacing.two,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.one,
  },
  sectionName: {
    textTransform: 'uppercase',
    flexShrink: 1,
  },
  card: {
    borderRadius: Spacing.three,
    paddingVertical: Spacing.one,
  },
  empty: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    opacity: 0.6,
  },
  row: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  rowPressed: {
    opacity: 0.5,
  },
});