<template>
  <section id="booking" class="py-20 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-luxury-navy to-luxury-charcoal"></div>
    <div class="absolute inset-0 booking-grid opacity-10"></div>
    
    <!-- Floating Elements -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-luxury-gold opacity-10 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-luxury-cream opacity-10 rounded-full blur-3xl animate-float-delayed"></div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="text-luxury-gold text-sm font-bold tracking-wider uppercase mb-4 block">Let's Connect</span>
        <h2 class="text-4xl md:text-5xl font-bold text-luxury-cream mb-6">Book a Consultation</h2>
        <p class="text-luxury-cream/80 max-w-2xl mx-auto">Take the first step towards transforming your digital presence with our expert consultation services</p>
      </div>

      <div class="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div class="grid md:grid-cols-2">
          <!-- Booking Form -->
          <div class="p-8 lg:p-12">
            <h3 class="text-2xl font-bold text-luxury-navy mb-8">Schedule Your Meeting</h3>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Progress Steps -->
              <div class="flex justify-between mb-8">
                <div v-for="(step, index) in steps" :key="index"
                     class="flex items-center">
                  <div :class="[
                    'w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors duration-300',
                    currentStep >= index 
                      ? 'bg-luxury-gold text-white' 
                      : 'bg-gray-200 text-gray-600'
                  ]">
                    {{ index + 1 }}
                  </div>
                  <div v-if="index < steps.length - 1" 
                       class="w-full h-1 bg-gray-200 mx-2">
                    <div :class="[
                      'h-full bg-luxury-gold transition-all duration-300',
                      {'w-full': currentStep > index, 'w-0': currentStep <= index}
                    ]"></div>
                  </div>
                </div>
              </div>

              <!-- Form Fields -->
              <div v-show="currentStep === 0" class="space-y-6">
                <div class="form-group">
                  <label class="form-label">Full Name</label>
                  <input
                    v-model="form.name"
                    type="text"
                    class="form-input"
                    :class="{ 'border-red-500': errors.name }"
                    required
                  />
                  <span v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</span>
                </div>
                <div class="form-group">
                  <label class="form-label">Email Address</label>
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-input"
                    :class="{ 'border-red-500': errors.email }"
                    required
                  />
                  <span v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</span>
                </div>
                <div class="form-group">
                  <label class="form-label">Phone Number</label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    class="form-input"
                    required
                  />
                </div>
              </div>

              <div v-show="currentStep === 1" class="space-y-6">
                <div class="form-group">
                  <label class="form-label">Service Type</label>
                  <select
                    v-model="form.service"
                    class="form-select"
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    <option v-for="service in services"
                            :key="service"
                            :value="service">
                      {{ service }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Preferred Date</label>
                  <input
                    v-model="form.date"
                    type="date"
                    class="form-input"
                    required
                  />
                </div>
                <div class="form-group">
                  <label class="form-label">Preferred Time</label>
                  <select
                    v-model="form.time"
                    class="form-select"
                    required
                  >
                    <option v-for="time in availableTimes"
                            :key="time"
                            :value="time">
                      {{ time }}
                    </option>
                  </select>
                </div>
              </div>

              <div v-show="currentStep === 2" class="space-y-6">
                <div class="form-group">
                  <label class="form-label">Message (Optional)</label>
                  <textarea
                    v-model="form.message"
                    rows="4"
                    class="form-textarea"
                  ></textarea>
                </div>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <input type="checkbox" v-model="form.terms" class="mt-1" required>
                    <span class="ml-2 text-sm text-gray-600">
                      I agree to the terms and conditions and privacy policy
                    </span>
                  </div>
                </div>
              </div>

              <!-- Navigation Buttons -->
              <div class="flex justify-between pt-6">
                <button
                  v-if="currentStep > 0"
                  type="button"
                  @click="previousStep"
                  class="px-6 py-2 text-luxury-navy border border-luxury-navy rounded-lg hover:bg-luxury-navy hover:text-white transition-colors"
                >
                  Previous
                </button>
                <button
                  v-if="currentStep < steps.length - 1"
                  type="button"
                  @click="nextStep"
                  class="ml-auto px-6 py-2 bg-luxury-navy text-white rounded-lg hover:bg-luxury-gold transition-colors"
                >
                  Next
                </button>
                <button
                  v-if="currentStep === steps.length - 1"
                  type="submit"
                  class="ml-auto px-8 py-3 bg-luxury-navy text-white rounded-lg hover:bg-luxury-gold transition-colors"
                >
                  Book Consultation
                </button>
              </div>
            </form>
          </div>

          <!-- Information Panel -->
          <div class="bg-luxury-navy p-8 lg:p-12 text-luxury-cream">
            <h3 class="text-2xl font-bold mb-8">Why Choose Us?</h3>
            <div class="space-y-8">
              <div v-for="benefit in benefits"
                   :key="benefit.title"
                   class="flex items-start group">
                <div class="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center mr-4 group-hover:bg-luxury-gold/20 transition-colors">
                  <i :class="[benefit.icon, 'text-luxury-gold text-xl']"></i>
                </div>
                <div>
                  <h4 class="font-semibold mb-2">{{ benefit.title }}</h4>
                  <p class="text-sm opacity-90">{{ benefit.description }}</p>
                </div>
              </div>
            </div>

            <!-- Contact Information -->
            <div class="mt-12 pt-8 border-t border-luxury-cream/20">
              <h4 class="font-semibold mb-6">Contact Information</h4>
              <div class="space-y-4">
                <a href="tel:+254724948294" 
                   class="flex items-center hover:text-luxury-gold transition-colors">
                  <i class="fas fa-phone text-luxury-gold mr-4"></i>
                  <span>+254 724 948 294</span>
                </a>
                <a href="mailto:contact@dizotech.com"
                   class="flex items-center hover:text-luxury-gold transition-colors">
                  <i class="fas fa-envelope text-luxury-gold mr-4"></i>
                  <span>contact@dizotech.com</span>
                </a>
                <div class="flex items-start">
                  <i class="fas fa-map-marker-alt text-luxury-gold mr-4 mt-1"></i>
                  <span>123 Tech Street, Silicon Valley, CA</span>
                </div>
              </div>

              <!-- Social Media Links -->
              <div class="mt-8 flex space-x-4">
                <a v-for="social in socials"
                   :key="social.icon"
                   :href="social.link"
                   target="_blank"
                   class="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-navy transition-all duration-300">
                  <i :class="social.icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const steps = ['Personal Info', 'Schedule', 'Confirmation']
const currentStep = ref(0)
const errors = reactive({})

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  message: '',
  terms: false
})

const services = [
  'Web Development',
  'Mobile Development',
  'Cloud Solutions',
  'Cybersecurity',
  'IT Consulting',
  'Digital Marketing'
]

const availableTimes = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM'
]

const benefits = [
  {
    icon: 'fas fa-clock',
    title: 'Quick Response',
    description: 'Get a response within 24 hours of your booking'
  },
  {
    icon: 'fas fa-user-tie',
    title: 'Expert Consultation',
    description: 'Meet with our experienced technology consultants'
  },
  {
    icon: 'fas fa-handshake',
    title: 'Tailored Solutions',
    description: 'Receive customized solutions for your specific needs'
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Growth Focus',
    description: 'Strategic guidance to scale your business'
  }
]

const socials = [
  { icon: 'fab fa-linkedin', link: '#' },
  { icon: 'fab fa-twitter', link: '#' },
  { icon: 'fab fa-facebook', link: '#' },
  { icon: 'fab fa-instagram', link: '#' }
]

const validateStep = () => {
  errors.name = form.value.name ? '' : 'Name is required'
  errors.email = form.value.email ? '' : 'Email is required'
  return !Object.values(errors).some(error => error)
}

const nextStep = () => {
  if (validateStep()) {
    currentStep.value++
  }
}

const previousStep = () => {
  currentStep.value--
}

const handleSubmit = () => {
  if (validateStep()) {
    // Handle form submission
    console.log('Form submitted:', form.value)
  }
}
</script>

<style scoped>
.booking-grid {
  background-image: linear-gradient(var(--luxury-cream) 1px, transparent 1px),
    linear-gradient(90deg, var(--luxury-cream) 1px, transparent 1px);
  background-size: 50px 50px;
}

.form-label {
  @apply block text-sm font-medium text-gray-700 mb-2;
}

.form-input, .form-select, .form-textarea {
  @apply w-full px-4 py-3 border border-gray-300 rounded-lg 
         focus:ring-2 focus:ring-luxury-gold focus:border-transparent
         transition-all duration-300;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(0, 20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 6s ease-in-out infinite;
  animation-delay: 3s;
}
</style>
