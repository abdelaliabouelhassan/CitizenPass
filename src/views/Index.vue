<template>
  <DefaultLayout>
    <section class="w-full relative overflow-hidden h-screen">
      <img src="/images/homebg.png" class="w-full h-full object-cover" alt="" />
      <div
        class="w-full h-full absolute top-0 left-0 flex items-center justify-center"
      >
        <div class="pt-[300px] 2xl:pt-[500px]">
          <router-link to="/pass-check">
            <Button
              color="primary"
              class="min-w-[300px] md:min-w-[350px] text-[40px] md:text-[46px] uppercase"
            >
              » Enter «
            </Button>
          </router-link>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/Default.vue";
import Button from "@/components/UI/Button.vue";
</script>
