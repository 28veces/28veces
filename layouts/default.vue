<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <Header />

    <!-- Body -->
    <main   class="flex flex-grow p-4 items-center justify-center h-screen bg-white text-gray-800 mt-20">
      
        <slot />
   
    </main>

    <!-- Footer -->
    <footer class=" px-6 py-4 bg-pastelOrange text-white mt-4 ">
      <p class="text-center">Mi Footer</p>
    </footer>
  </div>
</template>

