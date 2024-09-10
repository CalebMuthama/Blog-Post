<script setup>
import Header from "./Header.vue";
</script>

<template>
  <div
    class="hidden md:flex flex-col items-center bg-[url(../assets/images/nature.jpg)] h-[40rem] w-auto bg-no-repeat bg-cover bg-center"
  >
    <Header />
    <h1 class="text-7xl font-bold text-white mt-10">
      Discover the power of an inline engine.
    </h1>
  </div>
  <div class="md:hidden m-3 w-1/2 flex items-center justify-between gap-5">
    <img
      src="../assets/images/subaru.jpg"
      alt="image on small screens"
      class="h-56 w-auto rounded-2xl object-cover"
    />
    <h1 class="text-5xl text-center font-semibold break-words max-w-screen-md">
      Discover the power of an inline engine.
    </h1>
  </div>
</template>
