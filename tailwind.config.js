/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './app.vue',
    ],
    theme: {
      extend: {
        colors: {
          pastelOrange: '#e67e22', // puedes ajustar este hex si quieres un tono diferente
        },
      },
    },
    plugins: [],
  }
  