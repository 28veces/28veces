<template>

  <!-- Hero Section -->
  <section id="more-content" class="relative overflow-hidden">
    <div class="flex flex-col md:flex-row items-center justify-between px-6 py-14 max-w-7xl mx-auto">
      <!-- Text -->
      <div class="w-full md:w-1/2 z-10 text-center md:text-left">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-4 leading-tight">
          Miguel Ariel Veces <br class="hidden sm:block" />yo si creo en ti
        </h2>
        <h3 class="text-2xl font-bold text-gray-800 mb-4">Más sobre mí</h3>

        <!-- Texto inicial visible -->
        <p class="text-gray-700 mb-2">
          Nací en un entorno humilde y perdí a mis padres siendo muy joven.
        </p>

        <!-- Texto oculto -->
        <transition name="fade">
          <div v-show="showMore">
            <p class="text-gray-700">
              A pesar de eso, decidí luchar por mi futuro. Estudié con esfuerzo, me formé como ingeniero de software
              y hoy tengo la oportunidad de inspirar a otros. Mi historia no es solo mía: es una prueba de que sí se
              puede.
            </p>
          </div>
        </transition>
        <button @click="toggleShowMore" class="mt-4 text-green-700 font-semibold hover:underline focus:outline-none">
          {{ showMore ? 'Mostrar menos' : 'Leer más' }}
        </button>
      </div>

      <!-- Image with fade effect -->
      <div class="w-full md:w-1/2 mt-10 md:mt-0">
        <img src="@/assets/image.png" alt="Inspiring person" class="w-full h-auto object-cover mask-fade-left" />
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
