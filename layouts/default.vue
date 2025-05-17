<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <Header />

    <!-- Body -->
    <main class="flex-grow bg-gray-50">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-pastelOrange text-white py-6">
      <div class="container mx-auto px-4">
        <p class="text-center">&copy; 2025 28veces. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
</script>

