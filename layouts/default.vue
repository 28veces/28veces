<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <Header />

    <!-- Body -->
    <main   class="flex flex-grow p-4 items-center justify-center h-screen bg-blue-500">
      
        <slot />
   
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4">
      <p class="text-center">Mi Footer</p>
    </footer>
  </div>
</template>

