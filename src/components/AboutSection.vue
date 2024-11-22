<template>
  <div>
    <Sidebar />
    <div class="ml-0 transition-margin duration-300 ease-in-out" :class="{ 'ml-64': isSidebarOpen }">
      <HeroAbout />
      <OurStory />
      <OurValues />
      <OurExpertise />
      <WhatWeOffer />
      <OurImpact />
      <OurApproach />
      <ContactAbout />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './about/Sidebar.vue'
import HeroAbout from './about/HeroAbout.vue'
import OurStory from './about/OurStory.vue'
import OurValues from './about/OurValues.vue'
import OurExpertise from './about/OurExpertise.vue'
import WhatWeOffer from './about/WhatWeOffer.vue'
import OurImpact from './about/OurImpact.vue'
import OurApproach from './about/OurApproach.vue'
import ContactAbout from './about/ContactAbout.vue'

const isSidebarOpen = ref(false)
</script>