<script setup>
import { ref } from "vue";
import Logo from "./Logo.vue";
// import SearchBar from "./SearchBar.vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const links = [
  { name: "Home", link: "/" },
  { name: "Blogs", link: "/blogs" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];
</script>

<template>
  <nav class="text-white bg-[#111111]">
    <div class="px-6 py-2 md:flex justify-between items-center">
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
        class="bg-white list-none text-1xl mt-10 md:mt-0 md:bg-transparent rounded-lg md:flex md:items-center md:space-x-12 md:static absolute w-full md:w-auto top-14 duration-200 ease-in"
        :class="[isOpen ? 'left-0' : 'left-[-100000000px]']"
      >
        <li
          v-for="link in links"
          :key="link"
          class="text-center p-1 rounded-lg md:bg-transparent md:hover:bg-transparent md:mx-4 md:my-0 my-6"
        >
          <a
            :href="link.link"
            class="text-black md:text-white md:hover:text-gray-600 md:hover:border-b-4 hover:border-gray-500 hover:text-gray-500"
            >{{ link.name }}</a
          >
        </li>
        <!-- <SearchBar /> -->
        <div class="flex items-center justify-center">
          <RouterLink
            to="/blogs/add"
            class="bg-white rounded-full text-black hover:bg-[#dfe2ec] py-2 px-2 transition duration-300 ease-in-out"
          >
            <i class="pi pi-plus-circle"> Add Blog </i>
          </RouterLink>
        </div>
      </ul>
    </div>
  </nav>
</template>
