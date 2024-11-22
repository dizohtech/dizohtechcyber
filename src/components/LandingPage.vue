<template>
  <div class="font-roboto bg-gray-100 text-gray-900">
    <!-- Navigation Bar -->
    <nav class="bg-white bg-opacity-30 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-10">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="text-2xl font-bold text-blue-600">Dizotech</div>
        <div class="hidden md:flex space-x-8">
          <a href="#services" class="text-gray-700 hover:text-blue-600">Services</a>
          <a href="#about" class="text-gray-700 hover:text-blue-600">About Us</a>
          <a href="#contact" class="text-gray-700 hover:text-blue-600">Contact</a>
        </div>
        <div class="hidden md:block">
          <a href="#contact" class="bg-blue-600 text-white px-4 py-2 rounded-lg">Book a Consultation</a>
        </div>
        <!-- Mobile Menu Toggle -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMobileMenu" class="text-gray-700">
            <i class="fas fa-bars fa-lg"></i>
          </button>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div v-if="mobileMenuVisible" class="md:hidden bg-white shadow-md">
        <div class="flex flex-col px-4 py-2 space-y-2">
          <a href="#services" class="text-gray-700 hover:text-blue-600">Services</a>
          <a href="#about" class="text-gray-700 hover:text-blue-600">About Us</a>
          <a href="#contact" class="bg-blue-600 text-white px-4 py-2 rounded-lg">Book a Consultation</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section
      class="relative bg-gray-800 text-white py-20 mt-16"
      :style="{ backgroundImage: `url(${images.desktopImage})`, backgroundSize: 'cover' }"
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
        <div class="md:w-1/2 text-center md:text-left px-4">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Dizotech</h1>
          <h2 class="text-2xl md:text-4xl font-semibold mb-4">We Make Technology Work for You</h2>
          <p class="text-base md:text-lg mb-8">
            Empowering your digital presence with innovative solutions.
          </p>
          <div class="flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4">
            <a href="#services" class="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold">
              Explore Services
            </a>
            <a href="#contact" class="bg-blue-800 text-white px-8 py-4 rounded-full font-semibold">
              Book a Consultation
            </a>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center px-4">
          <img :src="images.logo" alt="Dizotech Logo" class="h-32 md:h-48" />
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-gradient-to-r from-green-400 to-blue-500" id="services">
      <div class="container mx-auto text-center px-4">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-12">Our Services</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.title"
            class="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            <i :class="service.icon" class="text-4xl md:text-5xl text-green-600 mb-4"></i>
            <h3 class="text-xl md:text-2xl font-bold mb-2 text-gray-800">{{ service.title }}</h3>
            <p class="mb-4 text-gray-600">{{ service.description }}</p>
            <a href="#" class="text-green-600 font-semibold hover:underline">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div class="flex flex-col items-center mb-4 md:mb-0">
          <img :src="images.logo" alt="Dizotech Logo" class="h-12 md:h-16 mb-2" />
          <h2 class="text-xl md:text-2xl font-bold">Dizotech</h2>
        </div>
        <div class="flex flex-wrap justify-center">
          <a href="#about" class="text-white mx-2 hover:text-gray-300">About Us</a>
          <a href="#services" class="text-white mx-2 hover:text-gray-300">Services</a>
          <a href="#contact" class="text-white mx-2 hover:text-gray-300">Contact</a>
        </div>
      </div>
      <p class="text-center text-sm mt-4">&copy; 2023 Dizotech. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuVisible: false,
      services: [
        {
          title: "Cybersecurity and IT Consulting",
          description: "Protect your business with our top-notch services.",
          icon: "fas fa-shield-alt",
        },
        {
          title: "Content Creation and Design",
          description: "Engage your audience with creative solutions.",
          icon: "fas fa-pencil-alt",
        },
        {
          title: "Web and App Development",
          description: "Build robust applications with our expert team.",
          icon: "fas fa-code",
        },
      ],
      images: {
        logo: "@/assets/logostiker.png",
        desktopImage: "@/assets/desktop.jpg",
      },
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuVisible = !this.mobileMenuVisible;
    },
  },
};
</script>
