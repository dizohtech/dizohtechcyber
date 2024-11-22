<template>
    <div class="our-approach bg-white py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-display text-luxury-charcoal mb-8">Our Approach</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="(step, index) in approachSteps" :key="index"
            class="approach-card bg-luxury-cream p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="step-number-wrapper">
                <div class="relative">
                  <span class="text-3xl font-bold text-luxury-navy step-number">{{ index + 1 }}</span>
                  <i :class="step.icon" class="absolute top-0 left-0 w-full h-full text-4xl text-luxury-navy opacity-0 transition-opacity duration-300"></i>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-luxury-navy mb-2">{{ step.title }}</h3>
                <p class="text-luxury-charcoal">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'OurApproach',
    data() {
      return {
        approachSteps: [
          {
            title: 'Assessment',
            description: 'We begin with a thorough evaluation of your current security infrastructure and needs.',
            icon: 'fas fa-search-plus'
          },
          {
            title: 'Strategy Development',
            description: 'Based on the assessment, we create a customized security strategy aligned with your goals.',
            icon: 'fas fa-chess'
          },
          {
            title: 'Implementation',
            description: 'We deploy robust security solutions using industry-leading technologies and best practices.',
            icon: 'fas fa-rocket'
          },
          {
            title: 'Monitoring & Optimization',
            description: 'Continuous monitoring and refinement of security measures to ensure optimal protection.',
            icon: 'fas fa-chart-line'
          }
        ]
      }
    }
  })
  </script>
  
  <style scoped>
  .approach-card {
    position: relative;
    overflow: hidden;
  }
  
  .approach-card::before {
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
  
  .approach-card:hover::before {
    box-shadow: 0 0 20px rgba(0, 0, 128, 0.3),
                0 0 40px rgba(212, 175, 55, 0.2);
  }
  
  .step-number-wrapper {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .step-number, .step-number-wrapper i {
    position: absolute;
    transition: all 0.3s ease;
  }
  
  .approach-card:hover .step-number {
    opacity: 0;
    transform: scale(0.5);
  }
  
  .approach-card:hover .step-number-wrapper i {
    opacity: 1;
    transform: scale(1) rotate(0deg);
    color: var(--luxury-gold);
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  }
  
  .step-number-wrapper i {
    opacity: 0;
    transform: scale(0.5) rotate(-180deg);
  }
  
  /* Add a subtle gradient background on hover */
  .approach-card:hover {
    background: linear-gradient(
      145deg,
      var(--luxury-cream) 0%,
      rgba(245, 230, 211, 0.9) 100%
    );
  }
  
  /* Add connection lines between cards */
  @media (min-width: 768px) {
    .approach-card::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -2rem;
      width: 2rem;
      height: 2px;
      background: var(--luxury-navy);
      opacity: 0.2;
      transition: opacity 0.3s ease;
    }
  
    .approach-card:hover::after {
      opacity: 0.5;
    }
  
    .approach-card:nth-child(2n)::after {
      display: none;
    }
  }
  
  /* Add subtle flow animation */
  @keyframes flow {
    0% { transform: translateX(0); }
    50% { transform: translateX(10px); }
    100% { transform: translateX(0); }
  }
  
  .approach-card:hover::after {
    animation: flow 2s infinite ease-in-out;
  }
  </style>
  