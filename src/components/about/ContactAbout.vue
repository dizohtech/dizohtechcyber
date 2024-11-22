<template>
    <div class="contact-about bg-luxury-cream py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-display text-luxury-charcoal mb-12 text-center">Get in Touch</h2>
        <div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Contact Form and Info Section -->
          <div class="bg-white rounded-lg shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            <div class="space-y-8">
              <div class="contact-info">
                <h3 class="text-2xl font-bold text-luxury-navy mb-6">Contact Information</h3>
                <div class="space-y-6">
                  <div class="flex items-center group">
                    <i class="fas fa-map-marker-alt text-luxury-gold text-2xl mr-4 group-hover:scale-110 transition-transform"></i>
                    <p class="text-luxury-charcoal">123 Cyber Security Street, Tech City</p>
                  </div>
                  <div class="flex items-center group">
                    <i class="fas fa-phone-alt text-luxury-gold text-2xl mr-4 group-hover:scale-110 transition-transform"></i>
                    <p class="text-luxury-charcoal">+1 (555) 123-4567</p>
                  </div>
                  <div class="flex items-center group">
                    <i class="fas fa-envelope text-luxury-gold text-2xl mr-4 group-hover:scale-110 transition-transform"></i>
                    <p class="text-luxury-charcoal">contact@dizohtechcyber.com</p>
                  </div>
                  <div class="flex space-x-4 mt-6">
                    <a href="#" class="social-icon">
                      <i class="fab fa-linkedin text-2xl"></i>
                    </a>
                    <a href="#" class="social-icon">
                      <i class="fab fa-twitter text-2xl"></i>
                    </a>
                    <a href="#" class="social-icon">
                      <i class="fab fa-facebook text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
  
              <div class="quick-contact">
                <h3 class="text-2xl font-bold text-luxury-navy mb-6">Quick Contact</h3>
                <form class="space-y-4">
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      class="input-field"
                    >
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      placeholder="Your Email"
                      class="input-field"
                    >
                  </div>
                  <div class="form-group">
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      class="input-field"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    class="submit-button"
                  >
                    <i class="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
  
          <!-- Map Section -->
<div class="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
  <div class="h-full min-h-[600px] relative">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.507733864775!2d36.430635074129285!3d-0.7149162352668053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829175bad50308f%3A0x3b15787891634c3e!2sDizohtechcyber!5e0!3m2!1sen!2ske!4v1732264142674!5m2!1sen!2ske"
      width="100%"
      height="100%"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="absolute inset-0"
    ></iframe>
  </div>
</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'ContactAbout'
  })
  </script>
  
  <style scoped>
  .input-field {
    @apply w-full p-3 border border-luxury-gold/20 rounded-lg focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300;
  }
  
  .submit-button {
    @apply w-full bg-luxury-navy text-white px-6 py-3 rounded-lg hover:bg-luxury-gold 
    transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg
    flex items-center justify-center;
  }
  
  .social-icon {
    @apply w-12 h-12 rounded-full bg-luxury-navy text-white flex items-center justify-center
    hover:bg-luxury-gold transition-all duration-300 transform hover:scale-110;
  }
  
  /* Add shine effect to form card */
  .bg-white {
    position: relative;
    overflow: hidden;
  }
  
  .bg-white::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: rotate(45deg);
    transition: transform 0.6s;
    pointer-events: none;
  }
  
  .bg-white:hover::before {
    transform: rotate(45deg) translate(50%, 50%);
  }
  
  /* Floating animation for icons */
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0px); }
  }
  
  .fas, .fab {
    animation: float 3s ease-in-out infinite;
  }
  </style>
  