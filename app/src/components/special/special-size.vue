<template>
    <div class="w-full max-w-xs mx-auto py-6">
        <input 
            type="range" 
            min="1" max="5" step="1" 
            v-model="scaleStep" 
            class="range text-blue-400" 
        />
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

const scaleMap = [1, 1.01, 1.05, 1.09, 1.1]

function applyZoom(step) {
    const zoom = scaleMap[step - 1] || 1
    const baseSize = 16 
    document.documentElement.style.fontSize = `${baseSize * zoom}px`
}

onMounted(() => {
    const saved = localStorage.getItem('zoom-step')
    if (saved) {
        scaleStep.value = parseInt(saved)
        applyZoom(scaleStep.value)
    }
})

watch(scaleStep, (val) => {
    applyZoom(val)
    localStorage.setItem('zoom-step', val)
})

function reset() {
    scaleStep.value = 1
    applyZoom(1)
    localStorage.removeItem('zoom-step')
}

defineExpose({ reset })
</script>

<style>
.range {
    width: 100%;
}
</style>
