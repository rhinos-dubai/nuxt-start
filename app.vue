<script setup>

const route = useRoute()
const layout = ref('custom')
function enableCustomLayout() {
  layout.value = layout.value === 'default' ? 'custom' : 'default'
  setPageLayout(layout.value)
}
definePageMeta({
  layout: false,
});

</script>

<template>
  <NuxtLayout>
    <div>
      <button class="bg-gray-400 p-2 m-2 rounded-md text-white" @click="enableCustomLayout">change layout to ({{layout==='default'?'custom' : 'default' }} )</button>
    </div>
    <NuxtPage />
  </NuxtLayout>
</template>
