<template>
  <!-- Hero Section -->
  <section class="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
    <div class="flex flex-col md:flex-row items-center justify-between px-6 py-14 max-w-7xl mx-auto">
      <!-- Text Content -->
      <div class="w-full md:w-1/2 z-10 text-center md:text-left">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-4 leading-tight">
          Construyendo Sueños, <br class="hidden sm:block" />
          <span class="text-gray-800">28 Veces Más Fuerte</span>
        </h1>
        
        <p class="text-xl text-gray-600 mb-8">
          De la adversidad nace la fortaleza. Cada caída es una oportunidad para levantarse más fuerte.
        </p>

        <!-- Texto inicial visible -->
        <div class="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <p class="text-gray-700 mb-4 leading-relaxed">
            ME llamo Miguel Ariel Veces nací el 28 de agosto de 1982 en La Chorrera, Panamá Oeste. Mi historia comienza en un entorno de extrema pobreza, 
            marcado por desafíos que para muchos serían imposibles de superar.
          </p>

          <!-- Texto expandible -->
          <transition name="fade">
            <div v-show="showMore" class="space-y-6">
              <div class="border-l-4 border-blue-500 pl-4">
                <p class="text-gray-700 mb-4">
                  Nací sin la oportunidad de conocer a mi padre, y junto a mi madre y seis hermanos, 
                  aprendí que la verdadera riqueza está en la fuerza de voluntad y el amor familiar.
                </p>
              </div>

              <div class="bg-blue-50 rounded-lg p-4 my-4">
                <p class="text-gray-700 italic">
                  "Mi madre fue mi primera gran maestra, mi inspiración y mi héroe. Con firmeza y cariño, 
                  me enseñó a soñar en grande aunque no tuviéramos nada."
                </p>
              </div>

              <p class="text-gray-700">
                De ingeniero civil frustrado a especialista en desarrollo de software, 
                mi camino ha estado lleno de giros inesperados. Pero cada obstáculo me ha hecho más fuerte,
                cada caída me ha enseñado a levantarme con más determinación.
              </p>
            </div>
          </transition>

          <button 
            @click="toggleShowMore" 
            class="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {{ showMore ? 'Mostrar menos' : 'Conoce mi historia' }}
          </button>
        </div>
      </div>

      <!-- Image with enhanced effects -->
      <div class="w-full md:w-1/2 mt-10 md:mt-0 relative">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-lg"></div>
        <img 
          src="@/assets/image.png" 
          alt="Miguel Ariel Veces" 
          class="w-full h-auto object-cover rounded-lg shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showMore = ref(false)

function toggleShowMore() {
  showMore.value = !showMore.value
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
