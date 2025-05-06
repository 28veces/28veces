<template>
    <div class="bg-white py-8">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="text-3xl font-semibold text-gray-800 mb-6">Blog</h2>
        <div v-for="article in articles" :key="article.id" class="mb-8">
          <div class="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-50 transition duration-300">
            <h3 class="text-2xl font-semibold text-gray-700">{{ article.title }}</h3>
            <p class="mt-2 text-gray-500">{{ article.excerpt }}</p>
            <a :href="`/blog/${article.slug}`" class="text-blue-600 mt-4 inline-block">Leer más</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const articles = [
    {
      id: 1,
      title: "Cómo empezar con Nuxt 3",
      excerpt: "Una introducción rápida para comenzar con Nuxt 3...",
      slug: "como-empezar-con-nuxt-3",
    },
    {
      id: 2,
      title: "La importancia de la optimización web",
      excerpt: "La optimización web es crucial para mejorar el rendimiento de tu página...",
      slug: "importancia-optimización-web",
    },
    // Puedes agregar más artículos aquí.
  ]
  </script>
  
