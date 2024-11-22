<template>
  <div class="bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen">
    <PrivacyHeader />
    <main class="container mx-auto px-4 py-8">
      <div class="grid md:grid-cols-3 gap-8">
        <PrivacySidebar :sections="sections" />
        <div class="md:col-span-2 space-y-8">
          <PrivacyIntro />
          <PrivacyContent :sections="sections" />
          <PrivacyFAQ />
        </div>
      </div>
    </main>
    <PrivacyFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PrivacyHeader from './privacy/PrivacyHeader.vue'
import PrivacySidebar from './privacy/PrivacySidebar.vue'
import PrivacyIntro from './privacy/PrivacyIntro.vue'
import PrivacyContent from './privacy/PrivacyContent.vue'
import PrivacyFAQ from './privacy/PrivacyFAQ.vue'
import PrivacyFooter from './privacy/PrivacyFooter.vue'

const sections = [
  { id: 'information-we-collect', title: '1. Information We Collect', icon: 'Database' },
  { id: 'how-we-use-your-information', title: '2. How We Use Your Information', icon: 'Settings' },
  { id: 'how-we-share-your-information', title: '3. How We Share Your Information', icon: 'Share2' },
  { id: 'security-of-your-information', title: '4. Security of Your Information', icon: 'Shield' },
  { id: 'your-rights-and-choices', title: '5. Your Rights and Choices', icon: 'User' },
  { id: 'third-party-links', title: '6. Third-Party Links', icon: 'ExternalLink' },
  { id: 'childrens-privacy', title: "7. Children's Privacy", icon: 'Users' },
  { id: 'changes-to-this-privacy-policy', title: '8. Changes to This Privacy Policy', icon: 'RefreshCw' },
  { id: 'contact-us', title: '9. Contact Us', icon: 'Mail' }
]
</script>