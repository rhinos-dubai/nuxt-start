<template>
    <NuxtLoadingIndicator />
    <div class="flex flex-row ">
      
      
      <div class="flex flex-1 bg-gray-200">
        <TheHeader layout="col" />
      </div>
      <div class="flex flex-col flex-3 w-full">
        <slot></slot>
      </div>
      <div class="flex p-20">
        <TheFooter/>
      </div>
    </div>
  </template>
  