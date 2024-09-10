<script setup>
import { ref } from "vue";
import Logo from "./Logo.vue";
import SearchBar from "./SearchBar.vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const links = [
  { name: "Home", link: "#" },
  { name: "Travel", link: "#" },
  { name: "Food", link: "#" },
  { name: "Books", link: "#" },
  { name: "About", link: "#" },
  { name: "Contact", link: "#" },
];
</script>

<template>
  <nav class="container mx-auto">
    <div class="px-6 md:flex justify-between items-center">
      <Logo />

      <span
        @click="toggleMenu()"
        class="absolute md:hidden right-6 top-5 cursor-pointer"
      >
        <i
          :class="[isOpen ? 'pi pi-times' : 'pi pi-bars']"
          class="text-4xl"
        ></i>
      </span>
      <ul
        class="bg-white text-black text-1xl mt-10 md:mt-0 md:bg-transparent rounded-lg md:flex md:items-center md:space-x-12 md:static absolute w-full md:w-auto top-14 duration-200 ease-in"
        :class="[isOpen ? 'left-0' : 'left-[-100000000px]']"
      >
        <li
          v-for="link in links"
          :key="link"
          class="text-center p-1 rounded-lg md:bg-transparent md:hover:bg-transparent md:mx-4 md:my-0 my-6"
        >
          <a
            :href="link.link"
            class="md:hover:text-gray-600 md:hover:border-b-4 hover:border-gray-500 hover:text-gray-500"
            >{{ link.name }}</a
          >
        </li>
        <SearchBar />
      </ul>
    </div>
  </nav>
</template>
