<template>
    <div class=" w-full bg-[#042538] border-2 border-[#00F0FF] rounded-[20px] flex md:flex-row flex-col max-w-[800px] overflow-hidden">
        <div class=" w-full h-[400px] md:max-w-[400px]">
            <img src="/images/PassImage.png" class=" w-full h-full object-cover" alt="">
        </div>
        <div class=" flex flex-col items-center px-5 py-5 w-full space-y-5">
            <h3 class=" text-2xl font-bold font-orbitron text-white uppercase text-center">mint your <br class=" sm:hidden" /> Citizen Pass</h3>
            <span class=" text-xl text-white font-normal font-orbitron">66 / 666</span>
           <div class=" w-full text-center space-y-2">
             <div class=" w-full flex justify-between items-center">
                    <Button @click="nbr--" color="primary"  class=" flex font-bold !h-[55px] !w-[50px] text-[36px] uppercase !rounded-[10px]">
                           <div class=" m-auto -mt-[2px]">
                             -
                           </div>
                     </Button>
                    <span class=" font-normal text-[32px] text-white font-orbitron">{{nbr}}</span>
                     <Button @click="nbr++" color="primary"  class=" flex font-bold !h-[55px] !w-[50px] text-[36px] uppercase !rounded-[10px]">
                          <div class=" m-auto -mt-[2px]">
                            +
                          </div>
                    </Button>
            </div>
            <span class=" font-orbitron text-xs text-white">max per wallet: 4</span>
           </div>

           <div class=" w-full flex justify-between items-center border-y-2 py-4 border-[#00F0FF]">
            <span class=" text-white text-2xl font-normal font-orbitron">Total</span>
             <span class=" text-white text-2xl font-normal font-orbitron">0.12 ETH + GAS</span>
           </div>
          <div class=" w-full pt-4 flex items-center space-x-4">
            <img src="/images/etherscan.png" class=" max-w-[50px] max-h-[50px]" alt="">
             <Button color="primary"  class=" w-full text-[26px] !h-[50px]  uppercase !rounded-[10px] hover:!scale-105">
                           mint
            </Button>
          </div>

        </div>
    </div>
</template>

<script setup>
 import Button from '@/components/UI/Button.vue'
import { ref } from 'vue';
 const nbr = ref(2);
</script>