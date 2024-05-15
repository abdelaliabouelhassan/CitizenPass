<template>
    <DefaultLayout>
        <section class=" w-full   relative overflow-hidden "  >
           <div class=" w-full h-full absolute top-0 left-0">
             <img src="/images/manga.png" class=" w-full h-full object-cover" alt="">
           </div>
            <div class="w-full h-full  top-0 left-0 relative z-10 px-4">
                <div class=" flex items-start justify-center py-20 xl:py-0 xl:gap-10">
                   <div class=" hidden xl:block">
                     <img src="/images/JP-Young.png" alt="JP-Young">
                   </div>
                    <div class=" absolute top-0 xl:hidden">
                     <img src="/images/JP-Young.png" class=" max-w-[224px]" alt="JP-Young">
                   </div>

                   <div class=" flex flex-col items-center space-y-8 relative pt-[140px] xl:pt-10 z-10">
                        <div class=" border-2 border-[#00F0FF] text-center max-w-[460px] bg-[#042538] rounded-[20px] pt-[24px] pb-[40px] px-14">
                            <h1 class=" text-[60px]  font-orbitron font-bold text-white uppercase">Stop!</h1>
                            <p class=" text-center text-white font-bold font-orbitron text-[24px]  uppercase">
                                This is a security area. No access without a citizen pass.
                                    <br> <br>
                                Show me your pass!
                            </p>
                        </div>
                        <br>
                        <Button color="secondary" class=" cursor-not-allowed hover:!scale-100 min-w-[300px] md:min-w-[360px] text-[20px] !h-[80px] uppercase">
                        Here is my Pass
                        </Button>
                        <router-link to="/apply">
                              <Button color="primary"  class="min-w-[300px] md:min-w-[360px]  text-[20px] !h-[80px] uppercase">
                                I don't have a pass
                             </Button>
                        </router-link>
                      
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
