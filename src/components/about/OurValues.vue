<template>
    <div class="our-values bg-white py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-display text-luxury-charcoal mb-8">Our Values</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(value, index) in coreValues" :key="index"
            class="value-card bg-luxury-cream p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
            <div class="icon-wrapper mb-4 flex justify-center">
              <i :class="value.icon" class="text-4xl text-luxury-navy"></i>
            </div>
            <h3 class="text-xl font-bold text-luxury-navy mb-3">{{ value.title }}</h3>
            <p class="text-luxury-charcoal">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'OurValues',
    data() {
      return {
        coreValues: [
          {
            title: 'Integrity',
            description: 'We maintain the highest ethical standards in all our operations, ensuring trust and transparency in every interaction.',
            icon: 'fas fa-shield-alt'
          },
          {
            title: 'Excellence',
            description: 'We strive for excellence in everything we do, continuously improving our services and expertise.',
            icon: 'fas fa-star'
          },
          {
            title: 'Innovation',
            description: 'We embrace cutting-edge technologies and creative solutions to stay ahead of evolving cyber threats.',
            icon: 'fas fa-lightbulb'
          },
          {
            title: 'Client-Centric',
            description: 'Our clients\' success and security are our top priorities, driving all our decisions and actions.',
            icon: 'fas fa-users'
          },
          {
            title: 'Collaboration',
            description: 'We believe in working together with our clients and partners to achieve the best possible outcomes.',
            icon: 'fas fa-handshake'
          },
          {
            title: 'Responsibility',
            description: 'We take our role in protecting digital assets seriously and act with utmost responsibility.',
            icon: 'fas fa-check-circle'
          }
        ]
      }
    }
  })
  </script>
  
  <style scoped>
  .value-card {
    position: relative;
    overflow: hidden;
  }
  
  .value-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0.5rem;
    pointer-events: none;
    transition: all 0.3s ease;
  }
  
  .value-card:hover::before {
    box-shadow: 0 0 20px rgba(0, 0, 128, 0.3), /* Navy glow */
                0 0 40px rgba(212, 175, 55, 0.2); /* Gold glow */
  }
  
  .value-card:hover .icon-wrapper i {
    transform: scale(1.1);
    color: var(--luxury-gold);
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  }
  
  .icon-wrapper i {
    transition: all 0.3s ease;
  }
  </style>
  