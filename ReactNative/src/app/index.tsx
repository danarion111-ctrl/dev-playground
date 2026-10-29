import {
  Component,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from 'react';
import {
  Animated,
  BackHandler,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  type ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

/*
 * КАК ДОБАВИТЬ НОВЫЙ ЭКРАН: нужна ОДНА строка в SECTIONS (ниже), никаких import вверху.
 *
 *   topic('Название', () => require('@/practice/<раздел>/<папка>/<файл-без-.tsx>')),
 *
 * Правила:
 *  - строку вставляй в нужный раздел и в нужную папку (group) и в том порядке, в котором учишь;
 *  - путь = путь файла от src/ без расширения .tsx;
 *  - файл ДОЛЖЕН существовать, иначе Metro не соберёт приложение;
 *  - в файле должен быть `export default` (пока файл пуст, приложение покажет подсказку);
 *  - сюда попадают только .tsx-экраны. Файлы .ts, .md и .test.tsx сюда не добавляй.
 *
 * ПЛАВАЮЩАЯ ПАНЕЛЬ внутри темы (она лежит поверх экрана и ничего не двигает):
 *  - ☰  вернуться к списку тем;
 *  - ‹ › предыдущая / следующая тема;
 *  - номер темы: короткий тап сворачивает панель в точку, долгое нажатие переносит в другой угол;
 *  - через пару секунд без касаний панель сама становится почти прозрачной.
 */

type Topic = { title: string; load: () => unknown };
type Group = { name: string; topics: Topic[] };
type Section = { name: string; groups: Group[] };
type FlatTopic = Topic & { code: string; sectionName: string; groupName: string };

const topic = (title: string, load: () => unknown): Topic => ({ title, load });

const SECTIONS: Section[] = [
  {
    name: '01. Основы React',
    groups: [
      {
        name: 'components',
        topics: [
          topic('Функциональные компоненты', () => require('@/practice/01-react-basics/components/functional-components')),
          topic('Props: площадка', () => require('@/practice/01-react-basics/components/props-playground')),
          topic('children и композиция', () => require('@/practice/01-react-basics/components/children-and-composition')),
        ],
      },
      {
        name: 'rendering',
        topics: [
          topic('Условный рендеринг', () => require('@/practice/01-react-basics/rendering/conditional-rendering')),
          topic('Fragment и разметка', () => require('@/practice/01-react-basics/rendering/fragments-and-layout')),
        ],
      },
      {
        name: 'data-flow',
        topics: [
          topic('От родителя к ребёнку', () => require('@/practice/01-react-basics/data-flow/parent-to-child')),
          topic('Переиспользуемый UI', () => require('@/practice/01-react-basics/data-flow/reusable-ui')),
        ],
      },
      {
        name: 'mini-projects',
        topics: [
          topic('Карточка профиля', () => require('@/practice/01-react-basics/mini-projects/profile-card')),
          topic('Превью товара', () => require('@/practice/01-react-basics/mini-projects/product-preview')),
        ],
      },
    ],
  },
  {
    name: '02. Хуки React',
    groups: [
      {
        name: 'use-state',
        topics: [
          topic('Счётчик: лаборатория', () => require('@/practice/02-react-hooks/use-state/counter-lab')),
          topic('Корзина', () => require('@/practice/02-react-hooks/use-state/shopping-cart')),
          topic('Состояние формы', () => require('@/practice/02-react-hooks/use-state/form-state')),
        ],
      },
      {
        name: 'use-effect',
        topics: [
          topic('Жизненный цикл эффекта', () => require('@/practice/02-react-hooks/use-effect/effect-lifecycle')),
          topic('Живые часы', () => require('@/practice/02-react-hooks/use-effect/live-clock')),
          topic('Поиск с debounce', () => require('@/practice/02-react-hooks/use-effect/search-with-debounce')),
        ],
      },
      {
        name: 'use-ref',
        topics: [
          topic('Счётчик рендеров', () => require('@/practice/02-react-hooks/use-ref/render-counter')),
          topic('Фокус на поле ввода', () => require('@/practice/02-react-hooks/use-ref/input-focus')),
        ],
      },
      {
        name: 'custom-hooks',
        topics: [
          topic('useToggle', () => require('@/practice/02-react-hooks/custom-hooks/use-toggle')),
          topic('useWindowSize', () => require('@/practice/02-react-hooks/custom-hooks/use-window-size')),
        ],
      },
      {
        name: 'hook-challenges',
        topics: [
          topic('Задача: таймер', () => require('@/practice/02-react-hooks/hook-challenges/timer-challenge')),
          topic('Задача: счётчик с шагами', () => require('@/practice/02-react-hooks/hook-challenges/multi-step-counter')),
        ],
      },
    ],
  },
  {
    name: '03. Нативные компоненты',
    groups: [
      {
        name: 'layout',
        topics: [
          topic('View: площадка', () => require('@/practice/03-native-components/layout/view-playground')),
          topic('Безопасные зоны', () => require('@/practice/03-native-components/layout/safe-area-demo')),
        ],
      },
      {
        name: 'text-and-input',
        topics: [
          topic('Составной текст', () => require('@/practice/03-native-components/text-and-input/text-composition')),
          topic('TextInput: лаборатория', () => require('@/practice/03-native-components/text-and-input/text-input-lab')),
        ],
      },
      {
        name: 'interaction',
        topics: [
          topic('Состояния Pressable', () => require('@/practice/03-native-components/interaction/pressable-states')),
          topic('Обратная связь кнопок', () => require('@/practice/03-native-components/interaction/button-feedback')),
        ],
      },
      {
        name: 'scrolling',
        topics: [
          topic('Галерея на ScrollView', () => require('@/practice/03-native-components/scrolling/scroll-view-gallery')),
          topic('Экран с клавиатурой', () => require('@/practice/03-native-components/scrolling/keyboard-aware-screen')),
        ],
      },
      {
        name: 'device-layouts',
        topics: [
          topic('Экран настроек', () => require('@/practice/03-native-components/device-layouts/settings-screen')),
          topic('Превью контакта', () => require('@/practice/03-native-components/device-layouts/contact-preview')),
        ],
      },
    ],
  },
  {
    name: '04. Стилизация',
    groups: [
      {
        name: 'fundamentals',
        topics: [
          topic('Цвета и типографика', () => require('@/practice/04-styling/fundamentals/colors-and-typography')),
          topic('Система отступов', () => require('@/practice/04-styling/fundamentals/spacing-system')),
        ],
      },
      {
        name: 'flexbox',
        topics: [
          topic('flexDirection', () => require('@/practice/04-styling/flexbox/flex-direction')),
          topic('Выравнивание: лаборатория', () => require('@/practice/04-styling/flexbox/alignment-lab')),
          topic('Адаптивные карточки', () => require('@/practice/04-styling/flexbox/responsive-cards')),
        ],
      },
      {
        name: 'design-systems',
        topics: [
          topic('Светлая и тёмная темы', () => require('@/practice/04-styling/design-systems/light-and-dark-theme')),
        ],
      },
      {
        name: 'interfaces',
        topics: [
          topic('Неоновый дашборд', () => require('@/practice/04-styling/interfaces/neon-dashboard')),
          topic('UI музыкального плеера', () => require('@/practice/04-styling/interfaces/music-player-ui')),
          topic('Карточка ленты', () => require('@/practice/04-styling/interfaces/social-feed-card')),
        ],
      },
    ],
  },
  {
    name: '05. Списки',
    groups: [
      {
        name: 'flatlist',
        topics: [
          topic('Базовый FlatList', () => require('@/practice/05-lists/flatlist/basic-flatlist')),
          topic('keyExtractor', () => require('@/practice/05-lists/flatlist/key-extractor')),
          topic('Пустое состояние и загрузка', () => require('@/practice/05-lists/flatlist/empty-and-loading-states')),
        ],
      },
      {
        name: 'sections',
        topics: [
          topic('SectionList', () => require('@/practice/05-lists/sections/section-list')),
          topic('Контакты по группам', () => require('@/practice/05-lists/sections/grouped-contacts')),
        ],
      },
      {
        name: 'performance',
        topics: [
          topic('Мемоизированный элемент', () => require('@/practice/05-lists/performance/memoized-list-item')),
          topic('Виртуализация: лаборатория', () => require('@/practice/05-lists/performance/virtualized-list-lab')),
        ],
      },
      {
        name: 'mini-projects',
        topics: [
          topic('Список чатов', () => require('@/practice/05-lists/mini-projects/chat-list')),
          topic('Таблица лидеров', () => require('@/practice/05-lists/mini-projects/leaderboard')),
          topic('Каталог товаров', () => require('@/practice/05-lists/mini-projects/product-catalog')),
        ],
      },
    ],
  },
  {
    name: '06. Формы',
    groups: [
      {
        name: 'inputs',
        topics: [
          topic('Управляемые поля', () => require('@/practice/06-forms/inputs/controlled-inputs')),
          topic('Поле пароля', () => require('@/practice/06-forms/inputs/password-field')),
          topic('Строка поиска', () => require('@/practice/06-forms/inputs/search-bar')),
        ],
      },
      {
        name: 'validation',
        topics: [
          topic('Обязательные поля', () => require('@/practice/06-forms/validation/required-fields')),
          topic('Валидация email', () => require('@/practice/06-forms/validation/email-validation')),
          topic('Показ ошибок', () => require('@/practice/06-forms/validation/validation-errors')),
        ],
      },
      {
        name: 'form-logic',
        topics: [
          topic('Форма на useReducer', () => require('@/practice/06-forms/form-logic/form-reducer')),
          topic('Динамические поля', () => require('@/practice/06-forms/form-logic/dynamic-fields')),
        ],
      },
      {
        name: 'mini-projects',
        topics: [
          topic('Экран входа', () => require('@/practice/06-forms/mini-projects/login-screen')),
          topic('Регистрация по шагам', () => require('@/practice/06-forms/mini-projects/registration-wizard')),
          topic('Редактор профиля', () => require('@/practice/06-forms/mini-projects/profile-editor')),
        ],
      },
    ],
  },
  {
    name: '07. Навигация',
    groups: [
      {
        name: 'stack-navigation',
        topics: [
          topic('Переходы между экранами', () => require('@/practice/07-navigation/stack-navigation/screen-transitions')),
          topic('Параметры маршрута', () => require('@/practice/07-navigation/stack-navigation/route-params')),
        ],
      },
      {
        name: 'tab-navigation',
        topics: [
          topic('Нижние вкладки', () => require('@/practice/07-navigation/tab-navigation/bottom-tabs')),
          topic('Вложенная навигация', () => require('@/practice/07-navigation/tab-navigation/nested-navigation')),
        ],
      },
      {
        name: 'navigation-patterns',
        topics: [
          topic('Защищённые экраны', () => require('@/practice/07-navigation/navigation-patterns/protected-screens')),
          topic('Deep linking', () => require('@/practice/07-navigation/navigation-patterns/deep-linking')),
        ],
      },
      {
        name: 'mini-projects',
        topics: [
          topic('Многоэкранное приложение', () => require('@/practice/07-navigation/mini-projects/multi-screen-app')),
          topic('Онбординг', () => require('@/practice/07-navigation/mini-projects/onboarding-flow')),
        ],
      },
    ],
  },
  {
    name: '08. Управление состоянием',
    groups: [
      {
        name: 'context',
        topics: [
          topic('Контекст темы', () => require('@/practice/08-state-management/context/theme-context')),
          topic('Контекст авторизации', () => require('@/practice/08-state-management/context/auth-context')),
        ],
      },
      {
        name: 'reducers',
        topics: [
          topic('Редьюсер задач', () => require('@/practice/08-state-management/reducers/todo-reducer')),
          topic('Редьюсер корзины', () => require('@/practice/08-state-management/reducers/cart-reducer')),
        ],
      },
      {
        name: 'architecture',
        topics: [
          topic('Локальное и глобальное состояние', () => require('@/practice/08-state-management/architecture/local-vs-global-state')),
          topic('Производное состояние', () => require('@/practice/08-state-management/architecture/derived-state')),
        ],
      },
      {
        name: 'mini-projects',
        topics: [
          topic('Менеджер задач', () => require('@/practice/08-state-management/mini-projects/task-manager')),
          topic('Приложение-корзина', () => require('@/practice/08-state-management/mini-projects/shopping-cart-app')),
        ],
      },
    ],
  },
  {
    name: '09. Хранение данных',
    groups: [
      {
        name: 'async-storage',
        topics: [
          topic('Сохранение настроек', () => require('@/practice/09-storage/async-storage/save-settings')),
          topic('Недавние поиски', () => require('@/practice/09-storage/async-storage/recent-searches')),
          topic('Избранное', () => require('@/practice/09-storage/async-storage/favorites-storage')),
        ],
      },
      {
        name: 'secure-storage',
        topics: [
          topic('Демо: учётные данные', () => require('@/practice/09-storage/secure-storage/credentials-demo')),
        ],
      },
      {
        name: 'mini-projects',
        topics: [
          topic('Офлайн-заметки', () => require('@/practice/09-storage/mini-projects/offline-notes')),
          topic('Todo с сохранением', () => require('@/practice/09-storage/mini-projects/persistent-todos')),
        ],
      },
    ],
  },
  {
    name: '10. Сеть и API',
    groups: [
      {
        name: 'http',
        topics: [
          topic('Основы fetch', () => require('@/practice/10-network/http/fetch-basics')),
        ],
      },
      {
        name: 'async-flow',
        topics: [
          topic('Загрузка, ошибка, успех', () => require('@/practice/10-network/async-flow/loading-error-success')),
          topic('Отмена запросов', () => require('@/practice/10-network/async-flow/request-cancellation')),
          topic('Пагинация', () => require('@/practice/10-network/async-flow/pagination')),
        ],
      },
      {
        name: 'mini-projects',
        topics: [
          topic('Дашборд погоды', () => require('@/practice/10-network/mini-projects/weather-dashboard')),
          topic('Поиск профиля GitHub', () => require('@/practice/10-network/mini-projects/github-profile-search')),
          topic('Поиск фильмов', () => require('@/practice/10-network/mini-projects/movie-explorer')),
        ],
      },
    ],
  },
  {
    name: '11. Анимации',
    groups: [
      {
        name: 'animated-api',
        topics: [
          topic('Плавное появление', () => require('@/practice/11-animations/animated-api/fade-in')),
          topic('Выезжающая панель', () => require('@/practice/11-animations/animated-api/slide-panel')),
        ],
      },
      {
        name: 'reanimated',
        topics: [
          topic('Shared values', () => require('@/practice/11-animations/reanimated/shared-values')),
          topic('Анимированный счётчик', () => require('@/practice/11-animations/reanimated/animated-counter')),
          topic('Карточка с жестами', () => require('@/practice/11-animations/reanimated/gesture-driven-card')),
        ],
      },
      {
        name: 'gestures',
        topics: [
          topic('Свайп для удаления', () => require('@/practice/11-animations/gestures/swipe-to-dismiss')),
          topic('Перетаскиваемый элемент', () => require('@/practice/11-animations/gestures/draggable-element')),
        ],
      },
      {
        name: 'transitions',
        topics: [
          topic('Переход модального окна', () => require('@/practice/11-animations/transitions/modal-transition')),
          topic('Skeleton-загрузка', () => require('@/practice/11-animations/transitions/skeleton-loader')),
        ],
      },
      {
        name: 'mini-projects',
        topics: [
          topic('Интерактивный плеер', () => require('@/practice/11-animations/mini-projects/interactive-player')),
          topic('Анимированный онбординг', () => require('@/practice/11-animations/mini-projects/animated-onboarding')),
        ],
      },
    ],
  },
  {
    name: '12. API устройства',
    groups: [
      {
        name: 'permissions',
        topics: [
          topic('Состояния разрешений', () => require('@/practice/12-device-apis/permissions/permission-states')),
        ],
      },
      {
        name: 'media',
        topics: [
          topic('Выбор изображения', () => require('@/practice/12-device-apis/media/image-picker')),
          topic('Превью камеры', () => require('@/practice/12-device-apis/media/camera-preview')),
        ],
      },
      {
        name: 'location',
        topics: [
          topic('Текущая локация', () => require('@/practice/12-device-apis/location/current-location')),
          topic('Маркеры на карте', () => require('@/practice/12-device-apis/location/map-markers')),
        ],
      },
      {
        name: 'device-info',
        topics: [
          topic('Батарея и информация об устройстве', () => require('@/practice/12-device-apis/device-info/battery-and-device-info')),
          topic('Различия платформ', () => require('@/practice/12-device-apis/device-info/platform-differences')),
        ],
      },
      {
        name: 'mini-projects',
        topics: [
          topic('Журнал локаций', () => require('@/practice/12-device-apis/mini-projects/location-journal')),
          topic('Редактор фото профиля', () => require('@/practice/12-device-apis/mini-projects/photo-profile-editor')),
        ],
      },
    ],
  },
  {
    name: '13. Качество кода',
    groups: [
      {
        name: 'typescript',
        topics: [
          topic('Типизированные props', () => require('@/practice/13-quality/typescript/typed-props')),
          topic('Типизированные хуки', () => require('@/practice/13-quality/typescript/typed-hooks')),
        ],
      },
      {
        name: 'debugging',
        topics: [
          topic('Error Boundaries', () => require('@/practice/13-quality/debugging/error-boundaries')),
          topic('Отладка: лаборатория', () => require('@/practice/13-quality/debugging/debugging-lab')),
        ],
      },
      {
        name: 'performance',
        topics: [
          topic('Профилирование рендеров', () => require('@/practice/13-quality/performance/render-profiling')),
          topic('Мемоизация: лаборатория', () => require('@/practice/13-quality/performance/memoization-lab')),
        ],
      },
      {
        name: 'code-quality',
        topics: [
          topic('Рефакторинг: задача', () => require('@/practice/13-quality/code-quality/refactoring-challenge')),
          topic('Доступность: лаборатория', () => require('@/practice/13-quality/code-quality/accessibility-lab')),
        ],
      },
    ],
  },
  {
    name: '14. Сборка и релиз',
    groups: [],
  },
  {
    name: '15. Итоговые проекты',
    groups: [],
  },
];

const pad = (n: number) => String(n).padStart(2, '0');

// Плоский список экранов в порядке изучения (для кнопок «Предыдущая / Следующая»)
const FLAT_TOPICS: FlatTopic[] = SECTIONS.flatMap((section, s) =>
    section.groups.flatMap((group, g) =>
        group.topics.map((item, i) => ({
          ...item,
          sectionName: section.name,
          groupName: group.name,
          code: `${pad(s + 1)}.${g + 1}.${i + 1}`,
        })),
    ),
);

const EXAMPLE = `export default function Practice() {
  return <ThemedText>Привет</ThemedText>;
}`;

// ─────────────────────────── Плавающая панель навигации ───────────────────────────

type Corner = 'bottom-right' | 'bottom-left' | 'top-left' | 'top-right';
const CORNERS: Corner[] = ['bottom-right', 'bottom-left', 'top-left', 'top-right'];

const IDLE_DELAY_MS = 2500; // через сколько без касаний панель «засыпает»
const IDLE_OPACITY = 0.28; // насколько прозрачной она становится в покое
const TOAST_VISIBLE_MS = 1400; // сколько показывать название темы после переключения

type FloatingNavProps = {
  code: string;
  title: string;
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  onList: () => void;
};

/*
 * Лежит поверх экрана (position: absolute), поэтому ничего не двигает и не сжимает.
 * Занимает только свой маленький прямоугольник, остальные касания идут в твой экран.
 */
function FloatingNav({ code, title, hasPrev, hasNext, onPrev, onNext, onList }: FloatingNavProps) {
  const [corner, setCorner] = useState<Corner>('bottom-right');
  const [collapsed, setCollapsed] = useState(false);

  const fade = useRef(new Animated.Value(1)).current;
  const toast = useRef(new Animated.Value(0)).current;
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // «Разбудить» панель: сделать непрозрачнее и снова запустить таймер засыпания
  const wake = useCallback(() => {
    if (idleTimer.current) {
      clearTimeout(idleTimer.current);
    }
    fade.stopAnimation();
    fade.setValue(1);
    idleTimer.current = setTimeout(() => {
      Animated.timing(fade, {
        toValue: IDLE_OPACITY,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }, IDLE_DELAY_MS);
  }, [fade]);

  // При каждой смене темы: будим панель и на секунду показываем название
  useEffect(() => {
    wake();
    toast.stopAnimation();
    toast.setValue(1);
    Animated.sequence([
      Animated.delay(TOAST_VISIBLE_MS),
      Animated.timing(toast, { toValue: 0, duration: 400, useNativeDriver: true }),
    ]).start();
  }, [code, wake, toast]);

  useEffect(
      () => () => {
        if (idleTimer.current) {
          clearTimeout(idleTimer.current);
        }
      },
      [],
  );

  const act = (fn: () => void) => () => {
    wake();
    fn();
  };

  const nextCorner = () =>
      setCorner((c) => CORNERS[(CORNERS.indexOf(c) + 1) % CORNERS.length]);

  const isBottom = corner.startsWith('bottom');
  const isRight = corner.endsWith('right');

  const anchor: ViewStyle = {
    ...(isBottom ? { bottom: BottomTabInset + Spacing.two } : { top: Spacing.one }),
    ...(isRight ? { right: 0 } : { left: 0 }),
    alignItems: isRight ? 'flex-end' : 'flex-start',
    // у нижних углов подпись сверху от панели, у верхних снизу
    flexDirection: isBottom ? 'column' : 'column-reverse',
  };

  return (
      <View pointerEvents="box-none" style={[styles.floatingNav, anchor]}>
        <Animated.View pointerEvents="none" style={[styles.floatingToast, { opacity: toast }]}>
          <ThemedText type="small" numberOfLines={1} style={styles.floatingToastText}>
            {title}
          </ThemedText>
        </Animated.View>

        <Animated.View style={{ opacity: fade }} onTouchStart={wake}>
          {collapsed ? (
              <Pressable
                  onPress={act(() => setCollapsed(false))}
                  onLongPress={act(nextCorner)}
                  delayLongPress={350}
                  hitSlop={10}
                  accessibilityRole="button"
                  accessibilityLabel="Показать панель навигации"
                  style={styles.floatingDot}>
                <ThemedText style={styles.floatingText}>⋯</ThemedText>
              </Pressable>
          ) : (
              <View style={styles.floatingPill}>
                <Pressable
                    onPress={act(onList)}
                    hitSlop={6}
                    accessibilityRole="button"
                    accessibilityLabel="К списку тем"
                    style={styles.floatingButton}>
                  <ThemedText style={styles.floatingText}>☰</ThemedText>
                </Pressable>

                <Pressable
                    disabled={!hasPrev}
                    onPress={act(onPrev)}
                    hitSlop={6}
                    accessibilityRole="button"
                    accessibilityLabel="Предыдущая тема"
                    style={[styles.floatingButton, !hasPrev && styles.navButtonDisabled]}>
                  <ThemedText style={styles.floatingText}>‹</ThemedText>
                </Pressable>

                <Pressable
                    onPress={act(() => setCollapsed(true))}
                    onLongPress={act(nextCorner)}
                    delayLongPress={350}
                    hitSlop={6}
                    accessibilityRole="button"
                    accessibilityLabel={`Тема ${code}. Нажми, чтобы свернуть, удерживай, чтобы сменить угол`}
                    style={styles.floatingCodeButton}>
                  <ThemedText type="small" style={styles.floatingCode}>
                    {code}
                  </ThemedText>
                </Pressable>

                <Pressable
                    disabled={!hasNext}
                    onPress={act(onNext)}
                    hitSlop={6}
                    accessibilityRole="button"
                    accessibilityLabel="Следующая тема"
                    style={[styles.floatingButton, !hasNext && styles.navButtonDisabled]}>
                  <ThemedText style={styles.floatingText}>›</ThemedText>
                </Pressable>
              </View>
          )}
        </Animated.View>
      </View>
  );
}

// ─────────────────────────── Открытая тема ───────────────────────────

// Ловит ошибки внутри открытой темы, чтобы одна тема не роняла всё приложение
class TopicErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
          <ThemedView style={styles.notice}>
            <ThemedText type="code">Ошибка в этой теме</ThemedText>
            <ThemedText type="small">{this.state.error.message}</ThemedText>
            <Pressable onPress={() => this.setState({ error: null })} style={styles.navButton}>
              <ThemedText type="code">Повторить</ThemedText>
            </Pressable>
          </ThemedView>
      );
    }
    return this.props.children;
  }
}

function TopicScreen({ item }: { item: FlatTopic }) {
  let Practice: ComponentType | null = null;
  let loadError: string | null = null;

  try {
    const mod = item.load() as { default?: unknown } | null | undefined;
    const exported = mod?.default;
    if (typeof exported === 'function' || (typeof exported === 'object' && exported !== null)) {
      Practice = exported as ComponentType;
    }
  } catch (e) {
    loadError = e instanceof Error ? e.message : String(e);
  }

  if (loadError) {
    return (
        <ThemedView style={styles.notice}>
          <ThemedText type="code">Не удалось загрузить файл</ThemedText>
          <ThemedText type="small">{loadError}</ThemedText>
        </ThemedView>
    );
  }

  if (!Practice) {
    return (
        <ThemedView style={styles.notice}>
          <ThemedText type="code">Файл пока пуст</ThemedText>
          <ThemedText type="small">
            Открой его в WebStorm и добавь компонент с export default, например:
          </ThemedText>
          <ThemedText type="code">{EXAMPLE}</ThemedText>
        </ThemedView>
    );
  }

  return (
      <TopicErrorBoundary>
        <Practice />
      </TopicErrorBoundary>
  );
}

// ─────────────────────────── Главный экран ───────────────────────────

export default function HomeScreen() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [lastIndex, setLastIndex] = useState<number | null>(null);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    [SECTIONS[0].name]: true,
  });

  const closeTopic = useCallback(() => setSelectedIndex(null), []);
  const goTo = useCallback(
      (offset: number) =>
          setSelectedIndex((i) =>
              i === null ? i : Math.min(Math.max(i + offset, 0), FLAT_TOPICS.length - 1),
          ),
      [],
  );
  const goPrev = useCallback(() => goTo(-1), [goTo]);
  const goNext = useCallback(() => goTo(1), [goTo]);
  const toggleSection = (name: string) =>
      setOpenSections((prev) => ({ ...prev, [name]: !prev[name] }));

  // Запоминаем последнюю открытую тему и раскрываем её раздел,
  // чтобы после возврата к списку сразу видеть, где ты остановился
  useEffect(() => {
    if (selectedIndex === null) {
      return undefined;
    }
    const current = FLAT_TOPICS[selectedIndex];
    setLastIndex(selectedIndex);
    setOpenSections((prev) =>
        prev[current.sectionName] ? prev : { ...prev, [current.sectionName]: true },
    );
    return undefined;
  }, [selectedIndex]);

  // Кнопка «Назад» на Android возвращает к списку, а не закрывает приложение
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
              <View style={styles.topicRoot}>
                {/* Твой экран занимает всё место целиком */}
                <ScrollView key={selected.code} contentContainerStyle={styles.content}>
                  <TopicScreen item={selected} />
                </ScrollView>

                {/* Панель поверх экрана: ничего не двигает */}
                <FloatingNav
                    code={selected.code}
                    title={selected.title}
                    hasPrev={hasPrev}
                    hasNext={hasNext}
                    onPrev={goPrev}
                    onNext={goNext}
                    onList={closeTopic}
                />
              </View>
          ) : (
              <ScrollView contentContainerStyle={styles.listContent}>
                <ThemedText type="title" style={styles.title}>
                  React Native: практика
                </ThemedText>
                <ThemedText type="small">
                  Платформа: {Platform.OS}. Экранов: {FLAT_TOPICS.length}. Иди сверху вниз, номер
                  раздела и порядок файлов = порядок изучения. В списке только .tsx-экраны; файлы
                  .ts и .md открывай в WebStorm.
                </ThemedText>
                <ThemedText type="small" style={styles.hint}>
                  Внутри темы: ☰ список, ‹ › листать. Тап по номеру сворачивает панель, долгое
                  нажатие переносит её в другой угол.
                </ThemedText>

                {SECTIONS.map((section) => {
                  const isOpen = !!openSections[section.name];
                  const count = section.groups.reduce((sum, g) => sum + g.topics.length, 0);
                  return (
                      <ThemedView key={section.name} style={styles.section}>
                        <Pressable
                            onPress={() => toggleSection(section.name)}
                            style={styles.sectionHeader}>
                          <ThemedText type="code" style={styles.sectionName}>
                            {isOpen ? '▾' : '▸'} {section.name}
                          </ThemedText>
                          <ThemedText type="small">{count}</ThemedText>
                        </Pressable>

                        {isOpen && (
                            <ThemedView type="backgroundElement" style={styles.card}>
                              {section.groups.length === 0 ? (
                                  <ThemedText type="small" style={styles.empty}>
                                    Здесь нет .tsx-экранов: файлы читай и правь в WebStorm.
                                  </ThemedText>
                              ) : (
                                  section.groups.map((group) => (
                                      <View key={group.name}>
                                        <ThemedText type="small" style={styles.groupName}>
                                          {group.name}/
                                        </ThemedText>
                                        {group.topics.map((item, i) => {
                                          const flatIndex = FLAT_TOPICS.findIndex((f) => f.load === item.load);
                                          return (
                                              <Pressable
                                                  key={item.title}
                                                  onPress={() => setSelectedIndex(flatIndex)}
                                                  style={({ pressed }) => [
                                                    styles.row,
                                                    flatIndex === lastIndex && styles.rowLast,
                                                    pressed && styles.rowPressed,
                                                  ]}>
                                                <ThemedText>
                                                  {pad(i + 1)}. {item.title}
                                                </ThemedText>
                                              </Pressable>
                                          );
                                        })}
                                      </View>
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
  topicRoot: {
    flex: 1,
  },
  content: {
    gap: Spacing.three,
    paddingVertical: Spacing.three,
    // запас снизу, чтобы можно было прокрутить контент выше панели и нижних вкладок
    paddingBottom: BottomTabInset + 64,
  },
  listContent: {
    gap: Spacing.three,
    paddingVertical: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  hint: {
    opacity: 0.6,
  },
  navButton: {
    paddingVertical: Spacing.two,
  },
  navButtonDisabled: {
    opacity: 0.3,
  },
  notice: {
    gap: Spacing.two,
    paddingVertical: Spacing.two,
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
  groupName: {
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.two,
    opacity: 0.6,
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
  rowLast: {
    backgroundColor: 'rgba(128,128,128,0.18)',
    borderRadius: Spacing.two,
  },
  rowPressed: {
    opacity: 0.5,
  },

  // ── плавающая панель ──
  floatingNav: {
    position: 'absolute',
    gap: Spacing.one,
  },
  floatingPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 2,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
  floatingButton: {
    minWidth: 34,
    paddingVertical: 5,
    alignItems: 'center',
  },
  floatingCodeButton: {
    paddingHorizontal: 6,
    paddingVertical: 5,
    alignItems: 'center',
  },
  floatingText: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 22,
  },
  floatingCode: {
    color: '#fff',
    fontSize: 11,
    lineHeight: 14,
  },
  floatingDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
  floatingToast: {
    maxWidth: 240,
    paddingHorizontal: Spacing.two,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
  floatingToastText: {
    color: '#fff',
    fontSize: 11,
    lineHeight: 14,
  },
});
