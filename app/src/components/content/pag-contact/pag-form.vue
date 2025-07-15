<script setup>
import { ref } from 'vue'
import { useAppelStore } from '@/stores/appelStore' // ✅ TO‘G‘RI store nomi

const appelStore = useAppelStore()

const form = ref({
    fio: '',
    email: '',
    subject: '',
    body: ''
})

const formErrors = ref({})

const submit = async () => {
    formErrors.value = {}

    const payload = {
        fio: form.value.fio,
        email: form.value.email,
        subject: form.value.subject,
        body: form.value.body,
    }

    await appelStore.sendAppeal(payload)

    if (appelStore.success) {
        alert('Xabar muvaffaqiyatli yuborildi!')
        form.value = { fio: '', email: '', subject: '', body: '' }
    } else {
        formErrors.value = appelStore.error
    }
}
</script>


<template>
    <div class="bg-gray-50 rounded-2xl md:px-16">
        <h2 class="text-2xl font-bold mb-6">Murojaat yuborish</h2>

        <input v-model="form.fio" type="text" placeholder="Ismingiz" required class="form-input h-12 mb-1" />
        <p v-if="formErrors.fio" class="text-red-500 text-sm mb-4">{{ formErrors.fio[0] }}</p>

        <input v-model="form.email" type="email" placeholder="Elektron pochta" required class="form-input h-12 mb-1" />
        <p v-if="formErrors.email" class="text-red-500 text-sm mb-4">{{ formErrors.email[0] }}</p>

        <input v-model="form.subject" type="text" placeholder="Mavzu" required class="form-input h-12 mb-1" />
        <p v-if="formErrors.subject" class="text-red-500 text-sm mb-4">{{ formErrors.subject[0] }}</p>

        <textarea v-model="form.body" rows="4" placeholder="Xabaringizni yozing..." required
            class="form-input h-40 mb-1"></textarea>
        <p v-if="formErrors.body" class="text-red-500 text-sm mb-4">{{ formErrors.body[0] }}</p>

        <button @click="submit"
            class="w-full h-16 text-white rounded-md bg-blue-400 hover:bg-blue-500 transition duration-300 shadow-sm">
            Yuborish
        </button>
    </div>
</template>


<style scoped>
.form-input {
    @apply w-full text-gray-600 placeholder-gray-400 bg-white text-base shadow-md font-normal leading-7 rounded-md border border-gray-300 focus:outline-none px-4;
}
</style>
