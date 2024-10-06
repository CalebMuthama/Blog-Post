<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";
import lodash from "lodash";

const search = ref("");
const route = useRoute();

watch(
  search,
  lodash.debounce(async (value) => {
    const newRoute = {
      name: "blogs",
    };

    if (search.value !== "") {
      newRoute.query = {
        search: search.value,
      };
    }

    router.push(newRoute);
    console.log(value);
  }, 700),
);

//Watch for chnages in route query parameter search;
watch(
  () => route.query.search,
  (value) => {
    search.value = value;
  },
  { immediate: true },
);
</script>

<template>
  <form class="hidden md:flex">
    <div
      class="relative flex items-center text-gray-400 focus-within:text-gray-600 pointer-events-auto"
    >
      <i class="pi pi-search w-5 h-5 absolute ml-3"></i>
      <input
        v-model="search"
        type="text"
        name="search"
        placeholder="Search..."
        autocomplete="off"
        aria-label="Search"
        class="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-full border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 focus:outline-none"
      />
    </div>
  </form>
</template>
