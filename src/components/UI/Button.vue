<template>
  <button
   :class="{
    'font-bold text-white font-orbitron text-center bg-[#02C2CE] rounded-[20px] border-2 border-[#00F0FF] btn-primary h-[80px] md:h-[100px] px-[4px]  hover:scale-110 duration-200':color == 'primary',
    'font-bold text-white text-opacity-20 font-orbitron text-center bg-[#3A3A3A] rounded-[20px] border-2 border-[#767676] btn-secondary h-[80px] md:h-[100px] px-[4px]  hover:scale-110 duration-200':color == 'secondary'
   }"
    
  >
    <slot />
  </button>
</template>


<script setup>
 const props = defineProps(['color'])
</script>

<style scoped>
.btn-primary {
  box-shadow: 4px 4px 4px 0px #00f0ff inset, 2px 4px 4px 0px #000000bf;
}

.btn-secondary {
    box-shadow: 4px 4px 4px 0px #767676 inset;
}
</style>
