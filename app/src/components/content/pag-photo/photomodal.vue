<template>
    <dialog ref="modalRef" class="modal" id="photo-modal">
      <div class="modal-box relative max-w-4xl bg-white/20 backdrop-blur-sm rounded-lg p-0 overflow-hidden">
        <img
          :src="photo?.url"
          alt="Preview"
          loading="lazy"
          class="w-full h-auto max-h-[80vh] object-contain"
        />
        <button
          @click.stop="emit('prev')"
          class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-black px-3 py-2 rounded-full shadow hover:bg-gray-200 z-10"
        >
          ◀
        </button>
        <button
          @click.stop="emit('next')"
          class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-black px-3 py-2 rounded-full shadow hover:bg-gray-200 z-10"
        >
          ▶
        </button>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button class="text-white bg-black/50 hover:bg-black/70 px-4 py-2 rounded">Yopish</button>
      </form>
    </dialog>
  </template>
  
  <script setup>
  import { ref, watch, defineExpose } from 'vue'
  
  const props = defineProps({
    photo: Object,
    show: Boolean,
  })
  
  const emit = defineEmits(['prev', 'next'])
  
  const modalRef = ref(null)
  
  watch(() => props.show, (val) => {
    if (val) {
      modalRef.value?.showModal()
    } else {
      modalRef.value?.close()
    }
  })
  
  defineExpose({
    close: () => modalRef.value?.close(),
  })
  </script>
  