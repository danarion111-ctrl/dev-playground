# Маршрут обучения React Native (до уровня Junior)

Иди строго по номерам: папка 01 -> 02 -> ..., внутри папки файл 01 -> 02 -> ...

## 01. Окружение и инструменты  (`01-environment/`)
- `01-git-basics.tsx` - Git: основы: init, add, commit, status, log, diff, .gitignore, отмена изменений (restore, reset)
- `02-git-branches-and-prs.tsx` - Git: ветки и Pull Request: branch, merge, rebase, конфликты, GitHub, PR, code review
- `03-expo-vs-bare.tsx` - Expo и Bare Workflow: Expo Go, dev build, prebuild, отличия от bare, когда что выбирать
- `04-project-structure.tsx` - Структура проекта: app.json, package.json, tsconfig, алиас @/, папки src/app и assets
- `05-running-and-fast-refresh.tsx` - Запуск и Fast Refresh: Metro, npx expo start, Expo Go, эмулятор Android, телефон по кабелю/Wi-Fi, Fast Refresh
- `06-debugging.tsx` - Отладка: console.log, React Native DevTools, dev menu, LogBox, чтение красного экрана ошибок

## 02. Основы React  (`02-react-basics/`)
- `01-jsx.tsx` - JSX: выражения в {}, один корневой элемент, Fragment, отличия от HTML
- `02-functional-components.tsx` - Функциональные компоненты: функция возвращает JSX, именование, экспорт, композиция
- `03-props.tsx` - Props: передача, деструктуризация, значения по умолчанию, односторонний поток данных
- `04-children-and-composition.tsx` - children и композиция: props.children, слоты, переиспользуемые обёртки
- `05-conditional-rendering.tsx` - Условный рендеринг: &&, тернарный оператор, ранний return, null
- `06-rendering-lists-and-keys.tsx` - Списки и key: map, уникальный key, почему нельзя использовать index
- `07-events-and-handlers.tsx` - События и обработчики: onPress, onChangeText, передача функций, замыкания
- `08-smart-and-presentational.tsx` - Умные и глупые компоненты: контейнер против представления, где держать логику
- `09-typing-components.tsx` - Типизация компонентов (TypeScript): типы props, ReactNode, ComponentProps, типизация событий

## 03. Хуки React  (`03-react-hooks/`)
- `01-use-state.tsx` - useState: объявление, обновление, асинхронность setState, несколько состояний
- `02-state-patterns.tsx` - Паттерны работы со state: функциональный апдейт, иммутабельность объектов и массивов, подъём состояния, derived state
- `03-rules-of-hooks.tsx` - Правила хуков и жизненный цикл: хуки только на верхнем уровне, mount/update/unmount, Strict Mode
- `04-use-effect.tsx` - useEffect: зависимости, cleanup, подписки, запросы данных, бесконечный цикл и как его избежать
- `05-use-ref.tsx` - useRef: хранение значения без рендера, фокус TextInput, предыдущее значение
- `06-use-memo.tsx` - useMemo: дорогие вычисления, стабильные ссылки, когда НЕ нужен
- `07-use-callback.tsx` - useCallback: стабильные функции, связь с React.memo
- `08-react-memo.tsx` - React.memo: предотвращение лишних ререндеров, сравнение props
- `09-use-context.tsx` - useContext: createContext, Provider, тема/пользователь, prop drilling
- `10-use-reducer.tsx` - useReducer: reducer, action, типизация actions, когда лучше useState
- `11-custom-hooks.tsx` - Кастомные хуки: useToggle, useDebounce, useFetch; правила именования и вынос логики

## 04. Базовые компоненты React Native  (`04-native-components/`)
- `01-view-text.tsx` - View и Text: View как div, вложенность Text, numberOfLines, стили текста
- `02-image.tsx` - Image: локальные и удалённые картинки, resizeMode, размеры, expo-image
- `03-touchable-pressable.tsx` - TouchableOpacity и Pressable: onPress, onLongPress, pressed-стили, hitSlop, disabled
- `04-text-input.tsx` - TextInput: value/onChangeText, keyboardType, secureTextEntry, multiline, onSubmitEditing
- `05-button-switch-activity-indicator.tsx` - Button, Switch, ActivityIndicator: базовые контролы, своя кнопка вместо Button
- `06-scroll-view.tsx` - ScrollView: вертикальный и горизонтальный, contentContainerStyle, когда нужен FlatList
- `07-modal.tsx` - Modal: visible, animationType, закрытие, оверлей
- `08-keyboard-handling.tsx` - Клавиатура: KeyboardAvoidingView, Keyboard.dismiss, keyboardShouldPersistTaps
- `09-alert-and-status-bar.tsx` - Alert и StatusBar: Alert.alert с кнопками, стиль статус-бара

## 05. Стилизация и вёрстка  (`05-styling/`)
- `01-stylesheet.tsx` - StyleSheet: create, массив стилей, условные стили, отличия от CSS
- `02-flexbox.tsx` - Flexbox: flexDirection (по умолчанию column), justifyContent, alignItems, flex, gap, flexWrap
- `03-dimensions-and-window.tsx` - Dimensions и useWindowDimensions: размеры экрана, ориентация, проценты
- `04-responsive-layout.tsx` - Адаптивная вёрстка: телефон и планшет, брейкпоинты, aspectRatio, maxWidth
- `05-safe-area.tsx` - Безопасные зоны: SafeAreaView, useSafeAreaInsets, вырез, home indicator
- `06-platform-os.tsx` - Platform.OS и Platform.select: платформенные стили, файлы .ios.tsx и .android.tsx
- `07-dark-mode-and-theming.tsx` - Тёмная тема: useColorScheme, токены темы, переключатель
- `08-icons-and-fonts.tsx` - Иконки и шрифты: @expo/vector-icons, expo-font, кастомные шрифты

## 06. Списки  (`06-lists/`)
- `01-flat-list.tsx` - FlatList: data, renderItem, keyExtractor, separator, header/footer, ListEmptyComponent
- `02-section-list.tsx` - SectionList: sections, renderSectionHeader, sticky-заголовки
- `03-list-performance.tsx` - Производительность списков: memo для item, getItemLayout, windowSize, initialNumToRender
- `04-pull-to-refresh-and-pagination.tsx` - Pull-to-refresh и пагинация: refreshing/onRefresh, onEndReached, бесконечный скролл (на фейковых данных)
- `05-search-and-filter.tsx` - Поиск и фильтрация: поиск по списку, debounce, пустое состояние

## 07. Формы  (`07-forms/`)
- `01-controlled-inputs.tsx` - Управляемые поля: state на всю форму, один обработчик для многих полей
- `02-manual-validation.tsx` - Ручная валидация: ошибки по полям, touched, блокировка кнопки
- `03-react-hook-form-zod.tsx` - React Hook Form + Zod: Controller, схемы, resolver, типы из схемы (z.infer)

## 08. Навигация  (`08-navigation/`)
- `01-navigation-concepts.tsx` - Концепции навигации: stack, tabs, drawer, экран как компонент, React Navigation и Expo Router
- `02-navigation-container.tsx` - NavigationContainer: контекст навигации; внутри Expo Router нужен NavigationIndependentTree
- `03-native-stack.tsx` - Native Stack: createNativeStackNavigator, navigate/goBack/push/replace, options заголовка
- `04-bottom-tabs.tsx` - Bottom Tabs: createBottomTabNavigator, иконки, badge
- `05-route-params.tsx` - route.params и navigate: передача параметров, типизация ParamList, useNavigation/useRoute
- `06-nested-navigators.tsx` - Вложенные навигаторы: tabs внутри stack, навигация между уровнями, useFocusEffect
- `07-expo-router.tsx` - Expo Router: файловая маршрутизация, _layout, динамические маршруты [id], Link, useLocalSearchParams
- `08-auth-flow.tsx` - Поток авторизации: защищённые маршруты, redirect, экран входа и основное приложение

## 09. Управление состоянием  (`09-state-management/`)
- `01-context-reducer.tsx` - Context API и useReducer: глобальное состояние без библиотек, ограничения (лишние ререндеры)
- `02-redux-toolkit.tsx` - Redux Toolkit: configureStore, createSlice, useSelector/useDispatch, createAsyncThunk
- `03-zustand.tsx` - Zustand: create, селекторы, middleware persist
- `04-choosing-state-solution.tsx` - Как выбирать решение: локальный state, context, Redux, Zustand, React Query: что для чего

## 10. Хранение данных  (`10-storage/`)
- `01-async-storage.tsx` - AsyncStorage: setItem/getItem, JSON, ключи, ошибки
- `02-secure-store.tsx` - SecureStore: токены и секреты, отличие от AsyncStorage
- `03-persisting-state.tsx` - Сохранение состояния: zustand persist, redux-persist, гидратация при старте
- `04-sqlite-basics.tsx` - SQLite (по желанию): expo-sqlite, таблицы, CRUD

## 11. Сеть и API  (`11-network/`)
- `01-http-and-rest.tsx` - HTTP и REST: методы, статус-коды, заголовки, JSON, curl/Postman
- `02-fetch-api.tsx` - fetch: GET/POST, async/await, res.ok, обработка ошибок, AbortController
- `03-axios.tsx` - axios: instance, baseURL, interceptors, обработка ошибок
- `04-loading-and-error-states.tsx` - Состояния загрузки и ошибок: loading/error/data, retry, skeleton
- `05-react-query.tsx` - TanStack Query: useQuery, useMutation, кэш, invalidateQueries
- `06-jwt-auth.tsx` - JWT и авторизация: access/refresh токены, SecureStore, interceptor с обновлением токена
- `07-websockets.tsx` - WebSockets и Socket.IO: подключение, события, reconnect, cleanup в useEffect

## 12. Анимации  (`12-animations/`)
- `01-animated-api.tsx` - Animated API: Animated.Value, timing, spring, interpolate, useNativeDriver
- `02-layout-animation.tsx` - LayoutAnimation: анимация изменения layout
- `03-reanimated-basics.tsx` - Reanimated: useSharedValue, useAnimatedStyle, withTiming/withSpring
- `04-gestures.tsx` - Жесты: react-native-gesture-handler, Pan, Tap, свайп-карточка

## 13. Устройство и платформа  (`13-device-apis/`)
- `01-permissions.tsx` - Разрешения: запрос, статусы, отказ пользователя, переход в настройки
- `02-linking-and-deep-links.tsx` - Linking и deep links: openURL, схемы, обработка входящих ссылок
- `03-image-picker-and-camera.tsx` - Галерея и камера: expo-image-picker, expo-camera
- `04-location.tsx` - Геолокация: expo-location, текущая позиция, watchPositionAsync
- `05-push-notifications.tsx` - Push-уведомления: expo-notifications, локальные уведомления, push-токен
- `06-misc-device-apis.tsx` - Haptics, Clipboard, Share, NetInfo: мелкие API, которые часто нужны в продакшене

## 14. Качество кода  (`14-quality/`)
- `01-error-handling.tsx` - Обработка ошибок: try/catch, Error Boundary, глобальные ошибки
- `02-performance.tsx` - Производительность: лишние ререндеры, React DevTools Profiler, Hermes, размер бандла
- `03-unit-testing-jest.tsx` - Unit-тесты (Jest): describe/it/expect, моки, чистые функции и хуки
- `04-component-testing-rntl.tsx` - Тесты компонентов (RNTL): render, screen, fireEvent, getByText, async-тесты
- `05-eslint-prettier.tsx` - ESLint и Prettier: правила, автоформат в WebStorm, pre-commit (husky)
- `06-accessibility.tsx` - Доступность: accessibilityLabel, role, размер зоны касания, TalkBack/VoiceOver
- `07-localization.tsx` - Локализация: i18next, expo-localization, плюрализация

## 15. Сборка и публикация  (`15-build-and-release/`)
- `01-app-config-and-env.tsx` - Конфиг приложения и env: app.json/app.config.ts, EXPO_PUBLIC_*, разные окружения
- `02-eas-build.tsx` - EAS Build: eas.json, профили, APK/AAB, подпись
- `03-ota-updates.tsx` - OTA-обновления: EAS Update, каналы, ограничения
- `04-store-publishing.tsx` - Публикация в сторах: Google Play Console, App Store, скриншоты, политика конфиденциальности

## 16. Итоговые проекты  (`16-projects/`)
- `01-todo-app.tsx` - Todo-приложение: state, списки, формы, AsyncStorage
- `02-weather-app.tsx` - Погода по API: fetch/axios, loading/error, геолокация
- `03-notes-app.tsx` - Заметки: навигация и состояние: Zustand/Redux, навигация, поиск, persist
- `04-shop-app.tsx` - Магазин: авторизация и корзина: Expo Router, JWT, React Query, Redux/Zustand, формы
