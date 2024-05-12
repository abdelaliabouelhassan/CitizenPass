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
                        <div class=" border-2 border-[#00F0FF] text-center max-w-[460px] bg-[#042538] rounded-[20px] py-8 px-14">
                            <h1 class=" text-[60px] lg:text-[90px] font-orbitron font-bold text-white uppercase">Stop!</h1>
                            <p class=" text-center text-white font-bold font-orbitron text-[22px] lg:text-[34px] uppercase">
                                This is a security area. No access without a citizen pass.
                                    <br> <br>
                                Show me your pass!
                            </p>
                        </div>
                        <br>
                        <Button color="secondary" class="min-w-[300px] md:min-w-[360px] text-[22px] lg:text-[24px]">
                        Here is my Pass
                        </Button>
                        <Button color="primary"  class="min-w-[300px] md:min-w-[360px] text-[22px] lg:text-[24px]">
                        I don't have a pass
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
