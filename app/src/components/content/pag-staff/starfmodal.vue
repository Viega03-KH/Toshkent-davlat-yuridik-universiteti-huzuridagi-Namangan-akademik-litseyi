<template>
  <div class="modal modal-open">
    <div
      class="modal-box max-w-5xl w-full text-black bg-white rounded-md shadow-lg transition-all duration-500 transform animate-modal-in max-h-[80vh] overflow-hidden"
    >
      <h3 class="text-xl text-center font-bold mb-4">{{ item.name }}</h3>
      <h3 class="text-xl text-center font-normal py-2 border-t">{{ item.lavozm }}</h3>
  
      <!-- Scroll qilinadigan matn -->
      <div class="text-md font-light leading-relaxed p-2 overflow-auto max-h-[50vh]">
        <p v-html="item.text"></p>
      </div>
  
      <div class="modal-action mt-4 flex justify-end">
        <button @click="$emit('close')" class="btn btn-sm">Yopish</button>
      </div>
    </div>
  </div>
  
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
@keyframes modalIn {
  0% {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-modal-in {
  animation: modalIn 0.2s ease-out forwards;
}
</style>
