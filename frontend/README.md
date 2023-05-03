# Что это за мем frontend

## Доступные скрипты

В директории проекта вы можете запустить:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Чтоб сбилдить и в прод

### `npx tailwindcss -i ./src/css/index.css -o ./dist/index.css`
### `npx tailwindcss -i ./src/css/index.css -o ./dist/index.css --watch`

Чтоб сбилдить стили tailwind и в прод (так сказала дока по tailwind) 
> _[Дока 2 по taliwind, тыкни если хочешь знать больше](https://tailwindcss.com/docs/installation)_

Отправка для сокета
```fetch("http://memology.test/api/v1/send", {
  body: JSON.stringify({message: 'Hello from laravel local pusher'}),
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  method: "POST"
})```


