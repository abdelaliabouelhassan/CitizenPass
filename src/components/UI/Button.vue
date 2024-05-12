<template>
  <button
    class=" text-[40px] md:text-[46px] font-bold text-white font-orbitron text-center bg-[#02C2CE] rounded-[20px] border-2 border-[#00F0FF] btn h-[80px] md:h-[100px] px-[4px]  hover:scale-110 duration-200"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  box-shadow: 4px 4px 4px 0px #00f0ff inset, 2px 4px 4px 0px #000000bf;
}
</style>
