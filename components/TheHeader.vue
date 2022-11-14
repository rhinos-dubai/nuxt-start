<template>
    <nav class="flex align-center gap-4 p-4 bg-gray-200 " :class="'flex-'+layout">
        <NuxtLink to="/" class="n-link-base">
            Home
        </NuxtLink>
        <NuxtLink to="/about" class="n-link-base">
            About
        </NuxtLink>
    </nav>
    
</template>

<script setup>
const direction = defineProps(['layout'])


</script>