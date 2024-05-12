<template>
    <div class=" w-full">
        <div class=" w-full">
            <slot />
        </div>
        <Footer />
    </div>
</template>



<script setup>
 import Footer from '@/components/partials/Footer.vue'
</script>