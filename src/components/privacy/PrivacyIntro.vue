<template>
  <section class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold mb-4">Introduction</h2>
    <p class="text-gray-600 mb-4">Effective Date: {{ effectiveDate }}</p>
    <p class="text-gray-700">
      DizohTech ("we," "us," or "our") respects your privacy and is committed to protecting it through our
      compliance with this policy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
      information when you visit our website or use our services.
    </p>
    <div class="mt-6 float">
      <img src="desktop.jpeg" alt="Privacy illustration" class="mx-auto rounded-full shadow-lg w-48 h-48 object-cover">
    </div>
  </section>
</template>

<script setup>
const effectiveDate = 'November 1, 2023'
</script>

<style scoped>
.float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}
</style>