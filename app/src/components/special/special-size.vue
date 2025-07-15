<template>
    <div class="w-full max-w-xs mx-auto py-6">
        <input type="range" min="1" max="5" step="1" v-model="scaleStep" class="range text-blue-400" />
        <div class="flex justify-between px-2.5 mt-1 text-xs text-blue-400">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
        </div>
        <div class="flex justify-between px-2.5 mt-1 text-xs text-blue-400 font-semibold">
            <span>1x</span>
            <span>1.01x</span>
            <span>1.05x</span>
            <span>1.09x</span>
            <span>1.1x</span>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const scaleStep = ref(1)

const scaleMap = {
    1: 1,
    2: 1.01,
    3: 1.05,
    4: 1.09,
    5: 1.1
}

// ✅ Sahifa yuklanganda oldingi zoomni tiklash
onMounted(() => {
    const saved = localStorage.getItem('zoom-step')
    if (saved) {
        scaleStep.value = Number(saved)
        const zoom = scaleMap[saved]
        if (zoom) {
            document.body.style.zoom = zoom
        }
    }
})

// ✅ Slider o‘zgarganda zoomni qo‘llash
watch(scaleStep, (val) => {
    const zoom = scaleMap[val] || 1
    document.body.style.zoom = zoom
    localStorage.setItem('zoom-step', val)
})

// ✅ Barchasini default holatga qaytarish funksiyasi
function reset() {
    scaleStep.value = 1
    document.body.style.zoom = '1'
    localStorage.removeItem('zoom-step')
}

// ❗Expose — parentdan ref orqali chaqirish uchun
defineExpose({ reset })
</script>
