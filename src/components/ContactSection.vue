<template>
  <section class="relative py-20 overflow-hidden" id="contact">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-white to-luxury-cream/30"></div>
    <div class="absolute inset-0 contact-pattern opacity-5"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="text-luxury-gold text-sm font-bold tracking-wider uppercase mb-4 block">Get In Touch</span>
        <h2 class="text-4xl md:text-5xl font-display text-luxury-charcoal mb-6">Contact Us</h2>
        <p class="text-luxury-charcoal/80 max-w-2xl mx-auto">
          We're here to help and answer any questions you might have. We look forward to hearing from you.
        </p>
      </div>

      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div class="space-y-8">
            <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h3 class="text-2xl font-bold text-luxury-navy mb-6">Contact Information</h3>
              
              <div class="space-y-6">
                <a href="tel:+254724948294" 
                   class="contact-info-item">
                  <div class="icon-wrapper">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div>
                    <span class="text-sm text-luxury-charcoal/60">Call Us</span>
                    <p class="font-semibold">+254 724 948 294</p>
                  </div>
                </a>

                <a href="mailto:contact@dizohtechcyber.com" 
                   class="contact-info-item">
                  <div class="icon-wrapper">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div>
                    <span class="text-sm text-luxury-charcoal/60">Email Us</span>
                    <p class="font-semibold">contact@dizohtechcyber.com</p>
                  </div>
                </a>

                <div class="contact-info-item">
                  <div class="icon-wrapper">
                    <i class="fas fa-location-dot"></i>
                  </div>
                  <div>
                    <span class="text-sm text-luxury-charcoal/60">Visit Us</span>
                    <p class="font-semibold">123 Cyber Street, Tech City</p>
                  </div>
                </div>
              </div>

              <!-- Social Media Links -->
              <div class="mt-8 pt-8 border-t border-gray-100">
                <h4 class="text-sm font-semibold text-luxury-charcoal mb-4">Follow Us</h4>
                <div class="flex space-x-4">
                  <a v-for="social in socialLinks" 
                     :key="social.name"
                     :href="social.url"
                     :title="social.name"
                     class="social-link"
                     target="_blank">
                    <i :class="social.icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h3 class="text-2xl font-bold text-luxury-navy mb-8">Send us a Message</h3>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="form-group">
                  <label class="form-label">First Name</label>
                  <input 
                    type="text"
                    v-model="formData.firstName"
                    class="form-input"
                    :class="{ 'error': errors.firstName }"
                    required
                  >
                  <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
                </div>

                <div class="form-group">
                  <label class="form-label">Last Name</label>
                  <input 
                    type="text"
                    v-model="formData.lastName"
                    class="form-input"
                    :class="{ 'error': errors.lastName }"
                    required
                  >
                  <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Email Address</label>
                <input 
                  type="email"
                  v-model="formData.email"
                  class="form-input"
                  :class="{ 'error': errors.email }"
                  required
                >
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>

              <div class="form-group">
                <label class="form-label">Phone Number</label>
                <input 
                  type="tel"
                  v-model="formData.phone"
                  class="form-input"
                  :class="{ 'error': errors.phone }"
                >
                <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
              </div>

              <div class="form-group">
                <label class="form-label">Subject</label>
                <select 
                  v-model="formData.subject"
                  class="form-select"
                  required
                >
                  <option value="">Select a subject</option>
                  <option v-for="subject in subjects" 
                          :key="subject"
                          :value="subject">
                    {{ subject }}
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Message</label>
                <textarea 
                  v-model="formData.message"
                  class="form-textarea"
                  rows="6"
                  required
                ></textarea>
              </div>

              <div class="flex items-start mb-6">
                <input 
                  type="checkbox"
                  v-model="formData.consent"
                  id="consent"
                  class="mt-1"
                  required
                >
                <label for="consent" class="ml-2 text-sm text-luxury-charcoal/80">
                  I agree to the privacy policy and consent to being contacted regarding my request.
                </label>
              </div>

              <button 
                type="submit"
                class="submit-button"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else class="flex items-center">
                  <i class="fas fa-spinner fa-spin mr-2"></i>
                  Sending...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal"
         class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
         @click.self="showSuccessModal = false">
      <div class="bg-white rounded-xl p-8 max-w-md w-full text-center">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i class="fas fa-check text-2xl text-green-500"></i>
        </div>
        <h3 class="text-xl font-bold text-luxury-navy mb-2">Message Sent!</h3>
        <p class="text-luxury-charcoal/80 mb-6">
          Thank you for contacting us. We'll get back to you shortly.
        </p>
        <button @click="showSuccessModal = false"
                class="px-6 py-2 bg-luxury-navy text-white rounded-lg hover:bg-luxury-gold transition-colors">
          Close
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false
      },
      errors: {},
      isSubmitting: false,
      showSuccessModal: false,
      subjects: [
        'General Inquiry',
        'Technical Support',
        'Business Proposal',
        'Career Opportunity',
        'Other'
      ],
      socialLinks: [
        { name: 'LinkedIn', icon: 'fab fa-linkedin', url: '#' },
        { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
        { name: 'Facebook', icon: 'fab fa-facebook', url: '#' },
        { name: 'Instagram', icon: 'fab fa-instagram', url: '#' }
      ]
    }
  },
  methods: {
    validateForm() {
      this.errors = {}
      
      if (!this.formData.firstName) {
        this.errors.firstName = 'First name is required'
      }
      if (!this.formData.email) {
        this.errors.email = 'Email is required'
      } else if (!this.isValidEmail(this.formData.email)) {
        this.errors.email = 'Please enter a valid email'
      }
      
      return Object.keys(this.errors).length === 0
    },
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    },
    async submitForm() {
      if (!this.validateForm()) return
      
      this.isSubmitting = true
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        this.showSuccessModal = true
        this.resetForm()
      } catch (error) {
        console.error('Error submitting form:', error)
      } finally {
        this.isSubmitting = false
      }
    },
    resetForm() {
      this.formData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false
      }
    }
  }
}
</script>

<style scoped>
.contact-pattern {
  background-image: linear-gradient(var(--luxury-navy) 1px, transparent 1px),
    linear-gradient(90deg, var(--luxury-navy) 1px, transparent 1px);
  background-size: 50px 50px;
}

.form-label {
  @apply block text-sm font-medium text-luxury-charcoal mb-2;
}

.form-input, .form-select, .form-textarea {
  @apply w-full px-4 py-3 border border-gray-200 rounded-lg 
         focus:ring-2 focus:ring-luxury-gold focus:border-transparent
         transition-all duration-300;
}

.form-input.error, .form-select.error, .form-textarea.error {
  @apply border-red-500;
}

.error-message {
  @apply text-red-500 text-sm mt-1;
}

.contact-info-item {
  @apply flex items-center space-x-4 p-3 rounded-lg hover:bg-luxury-cream/20 transition-all duration-300;
}

.icon-wrapper {
  @apply w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold;
}

.social-link {
  @apply w-10 h-10 rounded-full bg-luxury-cream flex items-center justify-center text-luxury-navy
         hover:bg-luxury-gold hover:text-white transition-all duration-300;
}

.submit-button {
  @apply w-full bg-luxury-navy text-white px-8 py-4 rounded-lg
         hover:bg-luxury-gold transition-all duration-300
         disabled:opacity-50 disabled:cursor-not-allowed;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.fa-spinner {
  animation: spin 1s linear infinite;
}
</style>
