# React Native Practice

Учебный проект для последовательного изучения React Native, Expo, React и TypeScript на практических примерах.

## Требования

- Node.js
- npm
- Expo CLI через `npx`

## Запуск

Установи зависимости:

```bash
npm install
```

Запусти проект:

```bash
npx expo start
```

Для запуска веб-версии:

```bash
npm run web
```

## Структура обучения

Материалы организованы в 16 разделов:

1. Environment — окружение и инструменты
2. React Basics — основы React
3. React Hooks — хуки React
4. Native Components — компоненты React Native
5. Styling — стилизация и адаптивные интерфейсы
6. Lists — списки и производительность
7. Forms — формы и валидация
8. Navigation — навигация
9. State Management — управление состоянием
10. Storage — локальное хранение данных
11. Network — сетевые запросы и API
12. Animations — анимации и жесты
13. Device APIs — возможности устройства
14. Quality — тестирование, производительность и качество
15. Build and Release — сборка и публикация
16. Projects — практические проекты

Учебные материалы находятся в `src/practice/`, а экран выбора тем — в `src/app/index.tsx`.

## Проверки

Проверка ESLint:

```bash
npm run lint
```

Проверка типов TypeScript:

```bash
npx tsc --noEmit
```

Проверка конфигурации Expo:

```bash
npx expo-doctor
```