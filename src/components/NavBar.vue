<template>
  <nav class="bg-white bg-opacity-30 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-10">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-blue-600">
        Dizotech
      </div>
      <div class="flex-grow flex justify-center">
        <div class="hidden md:flex space-x-8">
          <a v-for="link in navLinks" 
             :key="link.href" 
             :href="link.href" 
             class="text-gray-700 hover:text-blue-600 transition duration-300">
            {{ link.text }}
          </a>
        </div>
      </div>
      <div class="hidden md:block">
        <a href="#contact" 
           class="bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-500">
          Book a Consultation
        </a>
      </div>
      <div class="md:hidden">
        <button @click="isMenuOpen = !isMenuOpen" class="text-gray-700 focus:outline-none">
          <i class="fas fa-bars fa-lg"></i>
        </button>
      </div>
    </div>
    
    <div v-show="isMenuOpen" class="md:hidden bg-white bg-opacity-30 backdrop-blur-md shadow-md">
      <div class="flex flex-col px-4 py-2 space-y-2">
        <a v-for="link in navLinks" 
           :key="link.href" 
           :href="link.href" 
           class="text-gray-700 hover:text-blue-600 transition duration-300">
          {{ link.text }}
        </a>
        <a href="#contact" 
           class="bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-500 text-center">
          Book a Consultation
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navLinks = [
  { href: '#services', text: 'Services' },
  { href: '#about', text: 'About Us' },
  { href: '#contact', text: 'Contact' }
]
</script>

<style scoped>
nav {
  backdrop-filter: blur(10px);
}

a {
  position: relative;
}

a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  height: 2px;
  width: 100%;
  background: transparent;
  transition: background 0.3s;
}

a:hover::after {
  background: #2563eb;
}
</style>