<template>
  <div class="pt-28 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Sección Principal -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-blue-600 mb-4">¿Qué es 28veces?</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Una filosofía de perseverancia y superación, un recordatorio de que siempre podemos volver a empezar.
        </p>
      </div>

      <!-- Tarjeta ¿Por qué 28veces? -->
      <div class="bg-white rounded-lg shadow-xl p-8 mb-12 hover:shadow-2xl transition-shadow duration-300">
        <div class="flex justify-between items-center cursor-pointer group" @click="toggleCard1">
          <h2 class="text-3xl font-bold text-gray-800">¿Por qué 28veces?</h2>
          <svg 
            class="w-6 h-6 text-blue-600 transform transition-transform duration-500 ease-bounce group-hover:scale-110"
            :class="{ 'rotate-180': showCard1 }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7" />
          </svg>
        </div>
        <transition 
          name="expand" 
          @enter="el => el.style.height = el.scrollHeight + 'px'"
          @leave="el => el.style.height = '0'"
        >
          <div v-show="showCard1" class="prose prose-lg text-gray-600 mt-6 overflow-hidden">
            <p>
              "28" es mi fecha de nacimiento. "Veces", mi apellido materno. Pero 28veces es más que eso: es una filosofía.
              Representa todas las veces que uno puede caer y volver a levantarse. Significa que no importa cuántas veces fracases,
              siempre puedes volverlo a intentar. Siempre puedes volver a creer en ti.
            </p>
          </div>
        </transition>
      </div>

      <!-- Tarjeta Objetivo -->
      <div class="bg-white rounded-lg shadow-xl p-8 mb-12 hover:shadow-2xl transition-shadow duration-300">
        <div class="flex justify-between items-center cursor-pointer group" @click="toggleCard2">
          <h2 class="text-3xl font-bold text-gray-800">¿Qué quiero lograr?</h2>
          <svg 
            class="w-6 h-6 text-blue-600 transform transition-transform duration-500 ease-bounce group-hover:scale-110"
            :class="{ 'rotate-180': showCard2 }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7" />
          </svg>
        </div>
        <transition 
          name="expand" 
          @enter="el => el.style.height = el.scrollHeight + 'px'"
          @leave="el => el.style.height = '0'"
        >
          <div v-show="showCard2" class="prose prose-lg text-gray-600 mt-6 overflow-hidden">
            <p>
              Quiero que 28veces sea un espacio de motivación y oportunidades. 
              Un lugar donde jóvenes —y también adultos— encuentren inspiración para seguir luchando por sus metas, 
              sin importar de dónde vienen ni cuántos obstáculos enfrentan. Quiero compartir mi experiencia de vida y 
              profesional para demostrar que sí se puede.
            </p>
          </div>
        </transition>
      </div>

      <!-- Tarjetas de Valores -->
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Mis Valores</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Tarjeta Perseverancia -->
        <div class="bg-white rounded-lg shadow-xl p-6 transform hover:scale-[1.05] transition-transform">
          <div class="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">Perseverancia</h3>
          <p class="text-gray-600 text-center">
            Porque la constancia es más poderosa que el talento.
          </p>
        </div>

        <!-- Tarjeta Respeto -->
        <div class="bg-white rounded-lg shadow-xl p-6 transform hover:scale-[1.05] transition-transform">
          <div class="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">Respeto</h3>
          <p class="text-gray-600 text-center">
            Porque todos merecemos dignidad y oportunidades.
          </p>
        </div>

        <!-- Tarjeta Responsabilidad -->
        <div class="bg-white rounded-lg shadow-xl p-6 transform hover:scale-[1.05] transition-transform">
          <div class="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">Responsabilidad</h3>
          <p class="text-gray-600 text-center">
            Porque los sueños se construyen paso a paso, con compromiso.
          </p>
        </div>
      </div>

      <!-- Mensaje Final -->
      <div class="text-center mt-16">
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Si tú también estás intentando cumplir tus metas, si alguna vez sentiste que no podías más,
          este espacio es para ti. Aquí estoy, compartiendo lo que sé y lo que viví, 
          para que tú también te levantes... 28 veces si es necesario.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showCard1 = ref(false) // Comienza contraída
const showCard2 = ref(false) // Comienza contraída

function toggleCard1() {
  showCard1.value = !showCard1.value
}

function toggleCard2() {
  showCard2.value = !showCard2.value
}
</script>

<style scoped>
.prose {
  max-width: none;
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  height: 0;
  opacity: 0;
}

@keyframes bounceRotate {
  0%, 100% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
}

.ease-bounce {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
</style>
