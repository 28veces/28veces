<template>
    
      <!-- Header -->
      <header class="fixed top-0 left-0 w-full z-50 bg-pastelOrange text-white border-b-4 border-green-600 px-6 py-4">

        <div class="flex justify-between items-center">
          <!-- Logo -->
          <a href="/">
            <img src="/public/logo/logo.png" alt="Logo" class="h-20 w-auto rounded" />
          </a>
  
          <!-- Hamburger Icon (mobile) -->
          <button @click="toggleMenu" class="md:hidden focus:outline-none text-orange-900">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
  
          <!-- Nav (desktop) -->
          <nav class="hidden md:flex space-x-6 text-white-900 text-lg">
            <NuxtLink to="/" class="hover:underline">Inicio</NuxtLink>
            <NuxtLink to="/sobre-mi" class="hover:underline">¿Qué es 28veces?</NuxtLink>
            <NuxtLink to="/blog" class="hover:underline">Blog</NuxtLink>
            <a href="#contact" class="hover:underline">Contacto</a>
          </nav>
        </div>
  
        <!-- Mobile Menu (animated) -->
        <transition name="slide">
          <div
            v-show="isMenuOpen"
            class="overflow-hidden transition-all duration-300 max-h-40 flex flex-col space-y-2 mt-4 md:hidden text-white-900"
          >
            <NuxtLink to="/" class="hover:underline" @click="closeMenu">Inicio</NuxtLink>
            <NuxtLink to="/sobre-mi" class="hover:underline" @click="closeMenu">¿Qué es 28veces?</NuxtLink>
            <NuxtLink to="/blog" class="hover:underline" @click="closeMenu">Blog</NuxtLink>
            <a href="#contact" class="hover:underline" @click="closeMenu">Contacto</a>
          </div>
        </transition>
      </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const isMenuOpen = ref(false)
  
  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }
  
  function closeMenu() {
    isMenuOpen.value = false
  }
  </script>
  
  <style scoped>
  .mask-fade-left {
    -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0));
    mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0));
  }
  
  /* Slide-down transition */
  .slide-enter-active,
  .slide-leave-active {
    transition: max-height 0.3s ease;
  }
  .slide-enter-from,
  .slide-leave-to {
    max-height: 0;
  }
  .slide-enter-to,
  .slide-leave-from {
    max-height: 160px;
  }
  </style>
