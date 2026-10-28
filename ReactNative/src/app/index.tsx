import { useCallback, useEffect, useState } from 'react';
import { BackHandler, Platform, Pressable, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

/*
 * Порядок изучения = порядок в этом файле = номера папок и файлов в src/practice.
 * Идёшь сверху вниз, ничего не пропускаешь.
 */

// 01. Окружение и инструменты
import GitBasicsPractice from '@/practice/01-environment/01-git-basics';
import GitBranchesAndPrsPractice from '@/practice/01-environment/02-git-branches-and-prs';
import ExpoVsBarePractice from '@/practice/01-environment/03-expo-vs-bare';
import ProjectStructurePractice from '@/practice/01-environment/04-project-structure';
import RunningAndFastRefreshPractice from '@/practice/01-environment/05-running-and-fast-refresh';
import DebuggingPractice from '@/practice/01-environment/06-debugging';

// 02. Основы React
import JsxPractice from '@/practice/02-react-basics/01-jsx';
import FunctionalComponentsPractice from '@/practice/02-react-basics/02-functional-components';
import PropsPractice from '@/practice/02-react-basics/03-props';
import ChildrenAndCompositionPractice from '@/practice/02-react-basics/04-children-and-composition';
import ConditionalRenderingPractice from '@/practice/02-react-basics/05-conditional-rendering';
import RenderingListsAndKeysPractice from '@/practice/02-react-basics/06-rendering-lists-and-keys';
import EventsAndHandlersPractice from '@/practice/02-react-basics/07-events-and-handlers';
import SmartAndPresentationalPractice from '@/practice/02-react-basics/08-smart-and-presentational';
import TypingComponentsPractice from '@/practice/02-react-basics/09-typing-components';

// 03. Хуки React
import UseStatePractice from '@/practice/03-react-hooks/01-use-state';
import StatePatternsPractice from '@/practice/03-react-hooks/02-state-patterns';
import RulesOfHooksPractice from '@/practice/03-react-hooks/03-rules-of-hooks';
import UseEffectPractice from '@/practice/03-react-hooks/04-use-effect';
import UseRefPractice from '@/practice/03-react-hooks/05-use-ref';
import UseMemoPractice from '@/practice/03-react-hooks/06-use-memo';
import UseCallbackPractice from '@/practice/03-react-hooks/07-use-callback';
import ReactMemoPractice from '@/practice/03-react-hooks/08-react-memo';
import UseContextPractice from '@/practice/03-react-hooks/09-use-context';
import UseReducerPractice from '@/practice/03-react-hooks/10-use-reducer';
import CustomHooksPractice from '@/practice/03-react-hooks/11-custom-hooks';

// 04. Базовые компоненты React Native
import ViewTextPractice from '@/practice/04-native-components/01-view-text';
import ImagePractice from '@/practice/04-native-components/02-image';
import TouchablePressablePractice from '@/practice/04-native-components/03-touchable-pressable';
import TextInputPractice from '@/practice/04-native-components/04-text-input';
import ButtonSwitchActivityIndicatorPractice from '@/practice/04-native-components/05-button-switch-activity-indicator';
import ScrollViewPractice from '@/practice/04-native-components/06-scroll-view';
import ModalPractice from '@/practice/04-native-components/07-modal';
import KeyboardHandlingPractice from '@/practice/04-native-components/08-keyboard-handling';
import AlertAndStatusBarPractice from '@/practice/04-native-components/09-alert-and-status-bar';

// 05. Стилизация и вёрстка
import StylesheetPractice from '@/practice/05-styling/01-stylesheet';
import FlexboxPractice from '@/practice/05-styling/02-flexbox';
import DimensionsAndWindowPractice from '@/practice/05-styling/03-dimensions-and-window';
import ResponsiveLayoutPractice from '@/practice/05-styling/04-responsive-layout';
import SafeAreaPractice from '@/practice/05-styling/05-safe-area';
import PlatformOsPractice from '@/practice/05-styling/06-platform-os';
import DarkModeAndThemingPractice from '@/practice/05-styling/07-dark-mode-and-theming';
import IconsAndFontsPractice from '@/practice/05-styling/08-icons-and-fonts';

// 06. Списки
import FlatListPractice from '@/practice/06-lists/01-flat-list';
import SectionListPractice from '@/practice/06-lists/02-section-list';
import ListPerformancePractice from '@/practice/06-lists/03-list-performance';
import PullToRefreshAndPaginationPractice from '@/practice/06-lists/04-pull-to-refresh-and-pagination';
import SearchAndFilterPractice from '@/practice/06-lists/05-search-and-filter';

// 07. Формы
import ControlledInputsPractice from '@/practice/07-forms/01-controlled-inputs';
import ManualValidationPractice from '@/practice/07-forms/02-manual-validation';
import ReactHookFormZodPractice from '@/practice/07-forms/03-react-hook-form-zod';

// 08. Навигация
import NavigationConceptsPractice from '@/practice/08-navigation/01-navigation-concepts';
import NavigationContainerPractice from '@/practice/08-navigation/02-navigation-container';
import NativeStackPractice from '@/practice/08-navigation/03-native-stack';
import BottomTabsPractice from '@/practice/08-navigation/04-bottom-tabs';
import RouteParamsPractice from '@/practice/08-navigation/05-route-params';
import NestedNavigatorsPractice from '@/practice/08-navigation/06-nested-navigators';
import ExpoRouterPractice from '@/practice/08-navigation/07-expo-router';
import AuthFlowPractice from '@/practice/08-navigation/08-auth-flow';

// 09. Управление состоянием
import ContextReducerPractice from '@/practice/09-state-management/01-context-reducer';
import ReduxToolkitPractice from '@/practice/09-state-management/02-redux-toolkit';
import ZustandPractice from '@/practice/09-state-management/03-zustand';
import ChoosingStateSolutionPractice from '@/practice/09-state-management/04-choosing-state-solution';

// 10. Хранение данных
import AsyncStoragePractice from '@/practice/10-storage/01-async-storage';
import SecureStorePractice from '@/practice/10-storage/02-secure-store';
import PersistingStatePractice from '@/practice/10-storage/03-persisting-state';
import SqliteBasicsPractice from '@/practice/10-storage/04-sqlite-basics';

// 11. Сеть и API
import HttpAndRestPractice from '@/practice/11-network/01-http-and-rest';
import FetchApiPractice from '@/practice/11-network/02-fetch-api';
import AxiosPractice from '@/practice/11-network/03-axios';
import LoadingAndErrorStatesPractice from '@/practice/11-network/04-loading-and-error-states';
import ReactQueryPractice from '@/practice/11-network/05-react-query';
import JwtAuthPractice from '@/practice/11-network/06-jwt-auth';
import WebsocketsPractice from '@/practice/11-network/07-websockets';

// 12. Анимации
import AnimatedApiPractice from '@/practice/12-animations/01-animated-api';
import LayoutAnimationPractice from '@/practice/12-animations/02-layout-animation';
import ReanimatedBasicsPractice from '@/practice/12-animations/03-reanimated-basics';
import GesturesPractice from '@/practice/12-animations/04-gestures';

// 13. Устройство и платформа
import PermissionsPractice from '@/practice/13-device-apis/01-permissions';
import LinkingAndDeepLinksPractice from '@/practice/13-device-apis/02-linking-and-deep-links';
import ImagePickerAndCameraPractice from '@/practice/13-device-apis/03-image-picker-and-camera';
import LocationPractice from '@/practice/13-device-apis/04-location';
import PushNotificationsPractice from '@/practice/13-device-apis/05-push-notifications';
import MiscDeviceApisPractice from '@/practice/13-device-apis/06-misc-device-apis';

// 14. Качество кода
import ErrorHandlingPractice from '@/practice/14-quality/01-error-handling';
import PerformancePractice from '@/practice/14-quality/02-performance';
import UnitTestingJestPractice from '@/practice/14-quality/03-unit-testing-jest';
import ComponentTestingRntlPractice from '@/practice/14-quality/04-component-testing-rntl';
import EslintPrettierPractice from '@/practice/14-quality/05-eslint-prettier';
import AccessibilityPractice from '@/practice/14-quality/06-accessibility';
import LocalizationPractice from '@/practice/14-quality/07-localization';

// 15. Сборка и публикация
import AppConfigAndEnvPractice from '@/practice/15-build-and-release/01-app-config-and-env';
import EasBuildPractice from '@/practice/15-build-and-release/02-eas-build';
import OtaUpdatesPractice from '@/practice/15-build-and-release/03-ota-updates';
import StorePublishingPractice from '@/practice/15-build-and-release/04-store-publishing';

// 16. Итоговые проекты
import TodoAppPractice from '@/practice/16-projects/01-todo-app';
import WeatherAppPractice from '@/practice/16-projects/02-weather-app';
import NotesAppPractice from '@/practice/16-projects/03-notes-app';
import ShopAppPractice from '@/practice/16-projects/04-shop-app';

type Topic = { title: string; Component: React.ComponentType };
type Section = { name: string; topics: Topic[] };
type FlatTopic = Topic & { sectionName: string; code: string };

const SECTIONS: Section[] = [
  {
    name: '01. Окружение и инструменты',
    topics: [
      { title: 'Git: основы', Component: GitBasicsPractice },
      { title: 'Git: ветки и Pull Request', Component: GitBranchesAndPrsPractice },
      { title: 'Expo и Bare Workflow', Component: ExpoVsBarePractice },
      { title: 'Структура проекта', Component: ProjectStructurePractice },
      { title: 'Запуск и Fast Refresh', Component: RunningAndFastRefreshPractice },
      { title: 'Отладка', Component: DebuggingPractice },
    ],
  },
  {
    name: '02. Основы React',
    topics: [
      { title: 'JSX', Component: JsxPractice },
      { title: 'Функциональные компоненты', Component: FunctionalComponentsPractice },
      { title: 'Props', Component: PropsPractice },
      { title: 'children и композиция', Component: ChildrenAndCompositionPractice },
      { title: 'Условный рендеринг', Component: ConditionalRenderingPractice },
      { title: 'Списки и key', Component: RenderingListsAndKeysPractice },
      { title: 'События и обработчики', Component: EventsAndHandlersPractice },
      { title: 'Умные и глупые компоненты', Component: SmartAndPresentationalPractice },
      { title: 'Типизация компонентов (TypeScript)', Component: TypingComponentsPractice },
    ],
  },
  {
    name: '03. Хуки React',
    topics: [
      { title: 'useState', Component: UseStatePractice },
      { title: 'Паттерны работы со state', Component: StatePatternsPractice },
      { title: 'Правила хуков и жизненный цикл', Component: RulesOfHooksPractice },
      { title: 'useEffect', Component: UseEffectPractice },
      { title: 'useRef', Component: UseRefPractice },
      { title: 'useMemo', Component: UseMemoPractice },
      { title: 'useCallback', Component: UseCallbackPractice },
      { title: 'React.memo', Component: ReactMemoPractice },
      { title: 'useContext', Component: UseContextPractice },
      { title: 'useReducer', Component: UseReducerPractice },
      { title: 'Кастомные хуки', Component: CustomHooksPractice },
    ],
  },
  {
    name: '04. Базовые компоненты React Native',
    topics: [
      { title: 'View и Text', Component: ViewTextPractice },
      { title: 'Image', Component: ImagePractice },
      { title: 'TouchableOpacity и Pressable', Component: TouchablePressablePractice },
      { title: 'TextInput', Component: TextInputPractice },
      { title: 'Button, Switch, ActivityIndicator', Component: ButtonSwitchActivityIndicatorPractice },
      { title: 'ScrollView', Component: ScrollViewPractice },
      { title: 'Modal', Component: ModalPractice },
      { title: 'Клавиатура', Component: KeyboardHandlingPractice },
      { title: 'Alert и StatusBar', Component: AlertAndStatusBarPractice },
    ],
  },
  {
    name: '05. Стилизация и вёрстка',
    topics: [
      { title: 'StyleSheet', Component: StylesheetPractice },
      { title: 'Flexbox', Component: FlexboxPractice },
      { title: 'Dimensions и useWindowDimensions', Component: DimensionsAndWindowPractice },
      { title: 'Адаптивная вёрстка', Component: ResponsiveLayoutPractice },
      { title: 'Безопасные зоны', Component: SafeAreaPractice },
      { title: 'Platform.OS и Platform.select', Component: PlatformOsPractice },
      { title: 'Тёмная тема', Component: DarkModeAndThemingPractice },
      { title: 'Иконки и шрифты', Component: IconsAndFontsPractice },
    ],
  },
  {
    name: '06. Списки',
    topics: [
      { title: 'FlatList', Component: FlatListPractice },
      { title: 'SectionList', Component: SectionListPractice },
      { title: 'Производительность списков', Component: ListPerformancePractice },
      { title: 'Pull-to-refresh и пагинация', Component: PullToRefreshAndPaginationPractice },
      { title: 'Поиск и фильтрация', Component: SearchAndFilterPractice },
    ],
  },
  {
    name: '07. Формы',
    topics: [
      { title: 'Управляемые поля', Component: ControlledInputsPractice },
      { title: 'Ручная валидация', Component: ManualValidationPractice },
      { title: 'React Hook Form + Zod', Component: ReactHookFormZodPractice },
    ],
  },
  {
    name: '08. Навигация',
    topics: [
      { title: 'Концепции навигации', Component: NavigationConceptsPractice },
      { title: 'NavigationContainer', Component: NavigationContainerPractice },
      { title: 'Native Stack', Component: NativeStackPractice },
      { title: 'Bottom Tabs', Component: BottomTabsPractice },
      { title: 'route.params и navigate', Component: RouteParamsPractice },
      { title: 'Вложенные навигаторы', Component: NestedNavigatorsPractice },
      { title: 'Expo Router', Component: ExpoRouterPractice },
      { title: 'Поток авторизации', Component: AuthFlowPractice },
    ],
  },
  {
    name: '09. Управление состоянием',
    topics: [
      { title: 'Context API и useReducer', Component: ContextReducerPractice },
      { title: 'Redux Toolkit', Component: ReduxToolkitPractice },
      { title: 'Zustand', Component: ZustandPractice },
      { title: 'Как выбирать решение', Component: ChoosingStateSolutionPractice },
    ],
  },
  {
    name: '10. Хранение данных',
    topics: [
      { title: 'AsyncStorage', Component: AsyncStoragePractice },
      { title: 'SecureStore', Component: SecureStorePractice },
      { title: 'Сохранение состояния', Component: PersistingStatePractice },
      { title: 'SQLite (по желанию)', Component: SqliteBasicsPractice },
    ],
  },
  {
    name: '11. Сеть и API',
    topics: [
      { title: 'HTTP и REST', Component: HttpAndRestPractice },
      { title: 'fetch', Component: FetchApiPractice },
      { title: 'axios', Component: AxiosPractice },
      { title: 'Состояния загрузки и ошибок', Component: LoadingAndErrorStatesPractice },
      { title: 'TanStack Query', Component: ReactQueryPractice },
      { title: 'JWT и авторизация', Component: JwtAuthPractice },
      { title: 'WebSockets и Socket.IO', Component: WebsocketsPractice },
    ],
  },
  {
    name: '12. Анимации',
    topics: [
      { title: 'Animated API', Component: AnimatedApiPractice },
      { title: 'LayoutAnimation', Component: LayoutAnimationPractice },
      { title: 'Reanimated', Component: ReanimatedBasicsPractice },
      { title: 'Жесты', Component: GesturesPractice },
    ],
  },
  {
    name: '13. Устройство и платформа',
    topics: [
      { title: 'Разрешения', Component: PermissionsPractice },
      { title: 'Linking и deep links', Component: LinkingAndDeepLinksPractice },
      { title: 'Галерея и камера', Component: ImagePickerAndCameraPractice },
      { title: 'Геолокация', Component: LocationPractice },
      { title: 'Push-уведомления', Component: PushNotificationsPractice },
      { title: 'Haptics, Clipboard, Share, NetInfo', Component: MiscDeviceApisPractice },
    ],
  },
  {
    name: '14. Качество кода',
    topics: [
      { title: 'Обработка ошибок', Component: ErrorHandlingPractice },
      { title: 'Производительность', Component: PerformancePractice },
      { title: 'Unit-тесты (Jest)', Component: UnitTestingJestPractice },
      { title: 'Тесты компонентов (RNTL)', Component: ComponentTestingRntlPractice },
      { title: 'ESLint и Prettier', Component: EslintPrettierPractice },
      { title: 'Доступность', Component: AccessibilityPractice },
      { title: 'Локализация', Component: LocalizationPractice },
    ],
  },
  {
    name: '15. Сборка и публикация',
    topics: [
      { title: 'Конфиг приложения и env', Component: AppConfigAndEnvPractice },
      { title: 'EAS Build', Component: EasBuildPractice },
      { title: 'OTA-обновления', Component: OtaUpdatesPractice },
      { title: 'Публикация в сторах', Component: StorePublishingPractice },
    ],
  },
  {
    name: '16. Итоговые проекты',
    topics: [
      { title: 'Todo-приложение', Component: TodoAppPractice },
      { title: 'Погода по API', Component: WeatherAppPractice },
      { title: 'Заметки: навигация и состояние', Component: NotesAppPractice },
      { title: 'Магазин: авторизация и корзина', Component: ShopAppPractice },
    ],
  },
];

const pad = (n: number) => String(n).padStart(2, '0');

// Плоский список всех тем в порядке изучения (для кнопок «Назад / Далее»)
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
                      {section.topics.map((topic, t) => (
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
                      ))}
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
  row: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  rowPressed: {
    opacity: 0.5,
  },
});
