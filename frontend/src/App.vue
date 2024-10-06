<script setup>
import Header from "./components/Header.vue";
import Heading from "./components/Heading.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Header class="sticky top-0" />
  <Heading />
  <RouterView />
  <Footer />
</template>
