<template>
    <div class="bg-white py-8">
      <div class="max-w-4xl mx-auto px-6">
        <h1 class="text-4xl font-semibold text-gray-800 mb-6">{{ article.title }}</h1>
        <p class="text-gray-600">{{ article.content }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  
  const articles = [
    {
      id: 1,
      title: "Cómo empezar con Nuxt 3",
      content: "Aquí va el contenido completo del artículo...",
      slug: "como-empezar-con-nuxt-3",
    },
    {
      id: 2,
      title: "La importancia de la optimización web",
      content: "Aquí va el contenido completo del artículo...",
      slug: "importancia-optimización-web",
    },
    // Puedes agregar más artículos aquí.
  ]
  
  const article = articles.find(a => a.slug === route.params.slug)
  </script>
  