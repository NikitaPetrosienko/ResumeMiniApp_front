# Мини‑резюме в Telegram

Простое интерактивное резюме в формате Telegram Mini App: серия экранов с приветствием, информацией «Обо мне», бонусом и формой обратной связи. Дизайн реализован в фирменных цветах Зарубежнефть. Реализовано на React/Vite, бэкенд на Node.js/Express и бот на `node-telegram-bot-api`.

---

## Структура проекта

```text
.
├── client/           # Фронтенд на React + Vite
│   ├── public/
│   └── src/
│       ├── lib/      # константы и инициализация Telegram SDK
│       ├── screens/  # экраны мини‑аппа
│       ├── styles/   # CSS-модули
│       └── main.jsx  # точка входа
└── README.md
```
Текущий статус
✅ Реализованы все экраны Mini App:

Стартовый экран с логотипом

Intro → AboutMe → Main → Congrats → BonusCat

Экран обратной связи (звёзды + комментарий)

✅ Интеграция с Telegram WebApp SDK
✅ Запрос котика с TheCatAPI
✅ API POST /feedback логирует отзыв
✅ Бот получает данные через sendData и отвечает в чат
✅ Мини‑апп закрывается после отправки отзыва

⏳ В разработке:

Постоянное хранение отзывов (БД / файл)

Админ‑панель для просмотра отзывов

Запуск проекта
Требования
Node.js ≥ 18

npm ≥ 8

Локальный запуск
```bash
# Сервер
cd server
npm install
npm start        # по‑умолчанию http://localhost:3001

# Клиент
cd client
npm install
# в src/lib/api.js или в .env (VITE_API_URL) пропишите http://localhost:3001
npm run dev      # по‑умолчанию http://localhost:5173
```
Технологии
Фронтенд
React 18 + Vite

Framer Motion (анимации)

Axios (HTTP)

Telegram WebApp SDK

Бэкенд
Node.js + Express

CORS

dotenv

Бот
Node.js + node-telegram-bot-api

polling mode

Возможности
Реализовано
Анимированные переходы между экранами

Адаптация под разные экраны

Информация «Обо мне» с React Fragment

Бонус‑котик через сторонний API

Форма оценки с 5 звёздами и комментарием

Отправка отзыва на бэкенд и логирование

Отправка web_app_data боту и ответное сообщение

В разработке
Постоянное хранение отзывов (БД / файл)

Админ‑панель для просмотра отзывов