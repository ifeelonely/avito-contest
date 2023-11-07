# Работа с проектом

1. Склонировать репозиторий(git clone)
2. Установить зависимости(npm i)
3. Запустить проект в режиме разработки (npm start)
  - После запуска проекта его можно открыть по адресу localhost:3001 или кликнув ctrl + ЛКМ по IP адресу в терминале 

# Описание проекта

## 1. Инструменты
- React;
- Redux / Redux toolkit;
- Vite;
- CSS modules;
- React router v6;
- Material UI
- npm
- TypeScript
## 2. Что было сделано
- Показывает игры, игры можно отфильтровать и отсортировать;
- По клику на игру происходит переход на страницу игры;
- Обработка ошибок при ошибках запросов и отсутствии данных;
- Страница игры содержит информацию об игре и карусель скриншотов(интерактив с каруселью осуществляется как в рабочей области картинки так и снизу карусели)
- На запросы и загрузку скриншотов был добавлен индикатор загрузки;
- Адаптивный интерфейс;
- Три попытки запроса при неудачном запросе;
- Сохранение последней игры в Session Storage;
