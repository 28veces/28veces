<template>
  <header class="bg-gray-800 text-white" role="banner">
   <div class="flex justify-between items-center pr-10 pl-6 pt-4 pb-4">
      <!-- Logo a la izquierda -->
      <div class="flex items-center space-x-2">
        <img src="/public/logo/logo.png" alt="Logo" class="h-16 w-40" />
      </div>
      <!-- Título centrado -->
            <h1 class="text-4xl font-bold flex-1 text-center">Miguel Ariel Veces</h1>
      <!-- Menú a la derecha -->
      <nav>
        <ul class="flex space-x-6">
          <li><a href="/" class="hover:text-teal-300 transition">Inicio</a></li>
          <li><a href="/blog" class="hover:text-teal-300 transition">Blog</a></li>
          <li><a href="/contacto" class="hover:text-teal-300 transition">Contacto</a></li>
          <li><a href="/pr" class="hover:text-teal-300 transition">Proyectos</a></li>
        </ul>
      </nav>
    </div>
    <!-- Ondas debajo del header con capas múltiples -->
    <div class="w-full overflow-hidden relative h-20">
      <!-- Capa inferior (azul claro) - Considera usar fill-blue-100 o similar -->
      <svg
        class="w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
      >
        <path
          fill="#d6eaf8" 
          d="M0,0 C320,60 720,0 1440,40 L1440,100 L0,100 Z"
        ></path>
      </svg>
      
      <!-- Capa media (turquesa) - Considera usar fill-teal-300 o similar -->
      <svg
        class="w-full absolute top-0 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
      >
        <path
          fill="#76d7c4" 
          fill-opacity="0.8"
          d="M0,40 C480,0 960,70 1440,30 L1440,100 L0,100 Z"
          
        ></path>
      </svg>
      
      <!-- Capa superior (gris oscuro) - Considera usar fill-gray-800 o similar -->
      <svg
        class="w-full absolute top-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
      >
        <path
          fill="#1f2937" 
          d="M0,60 C360,30 720,70 1440,55 L1440,100 L0,100 Z"
        ></path>
      </svg>
    </div>
  </header>
</template>