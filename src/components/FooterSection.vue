<template>
    <footer class="bg-luxury-charcoal text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div>
            <h3 class="text-luxury-gold font-display text-xl mb-4">Dizohtech Cyber</h3>
            <p class="text-luxury-cream">
              Providing expert cybersecurity solutions and digital transformation services.
            </p>
          </div>
  
          <!-- Quick Links -->
          <div>
            <h4 class="text-luxury-gold font-sans text-lg mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-luxury-cream hover:text-luxury-gold transition-colors">Home</a></li>
              <li><a href="#" class="text-luxury-cream hover:text-luxury-gold transition-colors">About</a></li>
              <li><a href="#" class="text-luxury-cream hover:text-luxury-gold transition-colors">Services</a></li>
              <li><a href="#" class="text-luxury-cream hover:text-luxury-gold transition-colors">Contact</a></li>
            </ul>
          </div>
  
          <!-- Services -->
          <div>
            <h4 class="text-luxury-gold font-sans text-lg mb-4">Services</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-luxury-cream hover:text-luxury-gold transition-colors">Cybersecurity</a></li>
              <li><a href="#" class="text-luxury-cream hover:text-luxury-gold transition-colors">Digital Transformation</a></li>
              <li><a href="#" class="text-luxury-cream hover:text-luxury-gold transition-colors">IT Consulting</a></li>
              <li><a href="#" class="text-luxury-cream hover:text-luxury-gold transition-colors">Cloud Solutions</a></li>
            </ul>
          </div>
  
          <!-- Social Media -->
          <div>
            <h4 class="text-luxury-gold font-sans text-lg mb-4">Connect With Us</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-luxury-cream hover:text-luxury-gold transition-colors">
                <i class="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" class="text-luxury-cream hover:text-luxury-gold transition-colors">
                <i class="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" class="text-luxury-cream hover:text-luxury-gold transition-colors">
                <i class="fab fa-facebook text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
  
        <div class="border-t border-luxury-gold/20 mt-8 pt-8 text-center">
          <p class="text-luxury-cream">
            © {{ new Date().getFullYear() }} Dizohtech Cyber. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterSection'
  }
  </script>
  