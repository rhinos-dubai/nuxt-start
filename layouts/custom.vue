<template>
  <NuxtLoadingIndicator />
  <div class="flex flex-col min-h-screen">
    <div class="flex w-full bg-gray-200">
      <TheHeader layout="row" />
    </div>
    <div class="flex flex-col flex-1 w-full">
      <slot></slot>
    </div>
    <div class="flex p-2">
      <TheFooter/>
    </div>
  </div>
</template>
