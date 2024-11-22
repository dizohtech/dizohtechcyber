<template>
  <section class="relative py-20 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-luxury-cream to-white"></div>
    <div class="absolute inset-0 bg-grid opacity-10"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="text-luxury-gold text-sm font-bold tracking-wider uppercase mb-4 block">Available Times</span>
        <h2 class="text-4xl font-display text-luxury-charcoal mb-6">Working Hours</h2>
        <p class="text-luxury-charcoal/80 max-w-2xl mx-auto">
          We're here to serve you during these hours, with 24/7 emergency support available
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Working Hours Card -->
          <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 class="text-2xl font-bold text-luxury-navy mb-6 flex items-center">
              <i class="fas fa-clock text-luxury-gold mr-3"></i>
              Regular Hours
            </h3>
            
            <div class="space-y-4">
              <div v-for="(hours, day) in workingHours" 
                   :key="day"
                   class="hours-row"
                   :class="{ 'current-day': isCurrentDay(day) }">
                <div class="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-luxury-cream/30 transition-colors">
                  <div class="flex items-center">
                    <span class="w-24 font-sans text-luxury-charcoal font-bold">{{ day }}</span>
                    <div class="hidden md:block w-4 h-0.5 bg-luxury-gold/30 mx-4"></div>
                  </div>
                  <div class="flex items-center">
                    <span :class="[
                      'text-luxury-navy',
                      hours === 'Closed' ? 'text-luxury-maroon' : ''
                    ]">
                      {{ hours }}
                    </span>
                    <i v-if="isCurrentDay(day)" 
                       class="fas fa-circle text-green-500 text-xs ml-3 animate-pulse"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Emergency Support Card -->
          <div class="bg-luxury-navy rounded-2xl shadow-xl p-8 text-white">
            <h3 class="text-2xl font-bold mb-6 flex items-center">
              <i class="fas fa-phone-alt text-luxury-gold mr-3"></i>
              Emergency Support
            </h3>

            <div class="space-y-6">
              <div class="bg-white/10 rounded-lg p-6">
                <div class="flex items-center mb-4">
                  <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                  <span class="font-bold">24/7 Available</span>
                </div>
                <p class="text-sm opacity-90 mb-4">
                  Our emergency team is always ready to assist you with critical issues.
                </p>
                <a href="tel:+254724948294" 
                   class="flex items-center text-luxury-gold hover:text-white transition-colors">
                  <i class="fas fa-phone mr-2"></i>
                  +254 724 948 294
                </a>
              </div>

              <div class="space-y-4">
                <h4 class="font-bold">Emergency Services Include:</h4>
                <ul class="space-y-3">
                  <li v-for="service in emergencyServices" 
                      :key="service"
                      class="flex items-center">
                    <i class="fas fa-check-circle text-luxury-gold mr-3"></i>
                    {{ service }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Information -->
        <div class="mt-12 grid md:grid-cols-3 gap-6">
          <div v-for="info in additionalInfo" 
               :key="info.title"
               class="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-colors">
            <i :class="[info.icon, 'text-2xl text-luxury-gold mb-4']"></i>
            <h4 class="font-bold text-luxury-navy mb-2">{{ info.title }}</h4>
            <p class="text-sm text-luxury-charcoal/80">{{ info.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WorkingHoursSection',
  data() {
    return {
      workingHours: {
        'Monday': '9:00 AM - 6:00 PM',
        'Tuesday': '9:00 AM - 6:00 PM',
        'Wednesday': '9:00 AM - 6:00 PM',
        'Thursday': '9:00 AM - 6:00 PM',
        'Friday': '9:00 AM - 5:00 PM',
        'Saturday': '10:00 AM - 2:00 PM',
        'Sunday': 'Closed'
      },
      emergencyServices: [
        'System Crashes',
        'Security Breaches',
        'Network Outages',
        'Data Recovery'
      ],
      additionalInfo: [
        {
          icon: 'fas fa-calendar-check',
          title: 'Online Booking',
          description: 'Schedule appointments easily through our online booking system'
        },
        {
          icon: 'fas fa-clock',
          title: 'Flexible Hours',
          description: 'Early and late appointments available upon request'
        },
        {
          icon: 'fas fa-phone-volume',
          title: 'Quick Response',
          description: 'Get a response within 15 minutes for emergency cases'
        }
      ]
    }
  },
  methods: {
    isCurrentDay(day) {
      const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
      return today === day
    },
    isCurrentlyOpen() {
      const now = new Date()
      const day = now.toLocaleDateString('en-US', { weekday: 'long' })
      const hours = this.workingHours[day]
      
      if (hours === 'Closed') return false

      // Add logic to check if current time is within working hours
      return true // Placeholder
    }
  }
}
</script>

<style scoped>
.bg-grid {
  background-image: linear-gradient(var(--luxury-navy) 1px, transparent 1px),
    linear-gradient(90deg, var(--luxury-navy) 1px, transparent 1px);
  background-size: 50px 50px;
}

.current-day {
  @apply bg-luxury-cream/20;
}

.hours-row:hover {
  transform: translateX(10px);
  transition: transform 0.3s ease;
}

/* Add smooth hover transitions */
.hours-row {
  transition: all 0.3s ease;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
