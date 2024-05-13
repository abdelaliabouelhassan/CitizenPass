<template>
    <DefaultLayout>
        <section class=" w-full  relative overflow-hidden "  >
           <div class=" w-full h-full absolute top-0 left-0">
             <img src="/images/manga2.png" class=" w-full h-full object-cover" alt="">
           </div>
            <div class="w-full h-full  top-0 left-0 relative z-10 px-4 flex flex-col items-center py-20 space-y-10">
                <div class=" w-full flex items-center md:flex-row flex-col space-y-10 md:space-y-0 md:justify-between max-w-[966px]">
                    <div class=" max-w-[310px] h-[71px]">
                        <img src="/images/logo.png" class=" w-full h-full object-cover" alt="">
                    </div>
                    <Button color="primary"  class="min-w-[300px] md:min-w-[360px] text-[20px] !h-[60px] uppercase">
                           Connect wallet
                    </Button>
                </div>
               <h1 class=" text-white font-bold text-[40px] md:text-[70px] lg:text-[96px] font-orbitron">Mint is (not) live</h1>
                <MintCard />
               <div class=" w-full max-w-[800px] bg-[#091A23] rounded-[20px] p-8 border border-[#00F0FF] flex flex-col items-center space-y-5">
                <p class=" text-center text-white text-[18px] md:text-[20px] font-orbitron ">
                    The OG pre-sale, limited to only 666 pieces, offers early supporters huge benefits, such as free Section 16 character mints with exclusive OG Skill, XP Multiplier, a Nifty Island Avatar, Access to special events and much more (depending on the rarity of the pass), while initial funds are raised for the production of the first merchandise products and the development of Survivor City 01.
                    <br> <br>
                    As a special highlight, the Citizen Pass is a burnable token which holders can burn at a later date and in return receive a customized Soulbound Token with lifelong benefits.
                </p>
                 <Button color="primary"  class="min-w-[290px] md:min-w-[360px] text-[20px] md:text-[24px]  uppercase">
                          More Information
                 </Button>
               </div>

               <div>
                <img src="/images/Steps_mintpage.png" class=" w-full h-full object-cover" alt="">
               </div>
            </div>
        </section>
    </DefaultLayout>
</template>

<script setup>
 import DefaultLayout from '@/layouts/Default.vue'
 import Button from '@/components/UI/Button.vue'
 import MintCard from '@/components/UI/MintCard.vue'
</script>
