<template>
    <div class="what-we-offer bg-white py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-display text-luxury-charcoal mb-8">What We Offer</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(offer, index) in offerings" :key="index"
            class="offer-card bg-luxury-cream p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
            <div class="icon-wrapper mb-4 flex justify-center">
              <i :class="offer.icon" class="text-4xl text-luxury-navy"></i>
            </div>
            <h3 class="text-xl font-bold text-luxury-navy mb-3">{{ offer.title }}</h3>
            <p class="text-luxury-charcoal">{{ offer.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'WhatWeOffer',
    data() {
      return {
        offerings: [
          {
            title: 'Security Audits',
            description: 'Comprehensive security assessments to identify vulnerabilities in your systems.',
            icon: 'fas fa-clipboard-list'
          },
          {
            title: 'Penetration Testing',
            description: 'Thorough testing of your systems to identify potential security weaknesses.',
            icon: 'fas fa-bug'
          },
          {
            title: 'Incident Response Planning',
            description: 'Development of robust response strategies for security incidents.',
            icon: 'fas fa-fire-extinguisher'
          },
          {
            title: 'Security Consulting',
            description: 'Expert advice on improving your security posture and implementing best practices.',
            icon: 'fas fa-comments'
          },
          {
            title: 'Managed Security Services',
            description: '24/7 monitoring and management of your security infrastructure.',
            icon: 'fas fa-shield-virus'
          },
          {
            title: 'Employee Training',
            description: 'Comprehensive security awareness training for your team.',
            icon: 'fas fa-chalkboard-teacher'
          }
        ]
      }
    }
  })
  </script>
  
  <style scoped>
  .offer-card {
    position: relative;
    overflow: hidden;
  }
  
  .offer-card::before {
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
  
  .offer-card:hover::before {
    box-shadow: 0 0 20px rgba(0, 0, 128, 0.3), /* Navy glow */
                0 0 40px rgba(212, 175, 55, 0.2); /* Gold glow */
  }
  
  .offer-card:hover .icon-wrapper i {
    transform: scale(1.1) rotate(5deg);
    color: var(--luxury-gold);
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  }
  
  .icon-wrapper i {
    transition: all 0.3s ease;
  }
  
  /* Add a subtle gradient background on hover */
  .offer-card:hover {
    background: linear-gradient(
      145deg,
      var(--luxury-cream) 0%,
      rgba(245, 230, 211, 0.9) 100%
    );
  }
  
  /* Add a subtle pulse animation to icons */
  @keyframes subtle-pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  .icon-wrapper i:hover {
    animation: subtle-pulse 1.5s infinite;
  }
  </style>
  