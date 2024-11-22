<template>
  <section class="relative bg-gray-800 text-white py-20 mt-16"
    :style="{ backgroundImage: 'url(desktop.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="container mx-auto flex justify-between items-center relative z-10">
      <!-- Text Content - Left Side -->
      <div class="w-1/2">
        <h1 class="text-6xl font-bold mb-4">
          {{ title }}
        </h1>
        <h2 class="text-4xl font-semibold mb-4">
          {{ subtitle }}
        </h2>
        <p class="text-lg mb-8">
          {{ description }}
        </p>
        <div class="flex justify-start">
          <a v-for="button in buttons"
            :key="button.text"
            :href="button.href"
            :class="button.class">
            {{ button.text }}
          </a>
        </div>
      </div>

      <!-- Logo - Right Side -->
      <div class="w-1/2 flex justify-center items-center">
        <img
          src="@/assets/logostiker.png"
          alt="Dizotech Logo"
          class="h-80 animate-float"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const title = 'Dizotech'
const subtitle = 'We Make Technology Work for You'
const description = 'Empowering your digital presence with innovative solutions'
const buttons = [
  {
    text: 'Explore Services',
    href: '#services',
    class: 'bg-white text-blue-600 px-8 py-4 rounded-full font-semibold mr-4 transition duration-300 hover:bg-blue-600 hover:text-white'
  },
  {
    text: 'Book a Consultation',
    href: '#contact',
    class: 'bg-blue-800 text-white px-8 py-4 rounded-full font-semibold transition duration-300 hover:bg-blue-600'
  }
]
</script>

<style scoped>
.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translatey(0px); }
  50% { transform: translatey(-10px); }
  100% { transform: translatey(0px); }
}
</style>
