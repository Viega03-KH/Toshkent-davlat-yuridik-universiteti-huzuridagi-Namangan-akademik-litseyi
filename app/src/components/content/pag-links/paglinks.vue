<template>
    <div class="bg-gray-900 h-screen flex items-center justify-center overflow-hidden">
      <div
        ref="cardRef"
        class="tilt-card w-80 h-96 bg-gradient-to-br from-purple-700 to-pink-500 rounded-2xl shadow-2xl relative cursor-pointer transition-all duration-300 ease-out hover:scale-100"
        @mousemove="handleMouseMove"
        @mouseleave="resetTilt"
      >
        <div ref="glowRef" class="glow absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none" />
        <div class="p-6 flex flex-col h-full justify-between relative z-10">
          <div>
            <h2 class="text-3xl font-bold text-white mb-2">Quantum Leap</h2>
            <p class="text-gray-200">
              Experience the future of technology with our revolutionary quantum computing solution.
            </p>
          </div>
          <div class="space-y-4">
            <div class="bg-white bg-opacity-20 rounded-lg p-3">
              <div class="text-xs text-gray-300 uppercase">Processing Power</div>
              <div class="text-2xl font-bold text-white">100 Qubits</div>
            </div>
            <button
              class="w-full py-2 bg-white text-purple-700 rounded-lg font-semibold transform transition hover:scale-100 active:scale-100"
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const cardRef = ref(null)
  const glowRef = ref(null)
  
  const handleMouseMove = (e) => {
    const card = cardRef.value
    const glow = glowRef.value
  
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
  
    const centerX = rect.width / 2
    const centerY = rect.height / 2
  
    const percentX = (x - centerX) / centerX
    const percentY = -((y - centerY) / centerY)
  
    card.style.transform = `perspective(1000px) rotateY(${percentX * 15}deg) rotateX(${percentY * 15}deg)`
    glow.style.opacity = '1'
    glow.style.backgroundImage = `
      radial-gradient(
        circle at 
        ${x}px ${y}px, 
        #ffffff44,
        #0000000f
      )
    `
  }
  
  const resetTilt = () => {
    const card = cardRef.value
    const glow = glowRef.value
  
    card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
    glow.style.opacity = '0'
  }
  </script>
  