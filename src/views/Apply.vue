<template>
    <DefaultLayout>
        <section class=" w-full  relative overflow-hidden "  >
           <div class=" w-full h-full absolute top-0 left-0">
             <img src="/images/manga.png" class=" w-full h-full object-cover" alt="">
           </div>
            <div class="w-full h-full  top-0 left-0 relative z-10 px-4">
                <div class=" flex items-center justify-center py-20 lg:py-0 lg:gap-10">
                   <div class=" hidden lg:block">
                     <img src="/images/JP-Young.png" alt="JP-Young">
                   </div>
                    <div class=" absolute top-0 lg:hidden">
                     <img src="/images/JP-Young2.png" alt="JP-Young">
                   </div>

                   <div class=" flex flex-col items-center space-y-8 relative pt-[140px] lg:pt-0 z-10">
                        <div class=" border-2 border-[#00F0FF] text-center max-w-[480px] bg-[#042538] rounded-[20px] p-8 ">
                            <p class=" text-center text-white font-bold font-orbitron text-[18px] lg:text-[22px] uppercase">
                                This is Survivor City 01, a sanctuary built by the UWO to protect humanity from the threat of the IRD parasites.   However, access is subject to strict security measures. 
                                <br><br>
                                Please proceed to the counter over there and apply for your Citizen Pass following a medical examination. But be warned that proof of infection can have serious consequences. Are you aware of the possible risks?
                            </p>
                        </div>
                        <br>
                   
                        <Button color="primary"  class="min-w-[300px] md:min-w-[360px] text-[22px] lg:text-[24px] uppercase">
                           Apply for a <br> citizen pass
                        </Button>
                        <Button color="secondary" class="min-w-[300px] md:min-w-[360px] text-[22px] lg:text-[24px] uppercase">
                           Not interested
                        </Button>
                   </div>
                </div>
            </div>
        </section>
    </DefaultLayout>
</template>

<script setup>
 import DefaultLayout from '@/layouts/Default.vue'
 import Button from '@/components/UI/Button.vue'
</script>
