<script setup>
import { reactive, onMounted } from "vue";
import axios from "axios";
import BeatLoader from "vue-spinner/src/BeatLoader.vue";

const state = reactive({
  blogs: [],
  isLoading: true,
});

defineProps({
  limit: Number,
});

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:5000/blogs");
    state.blogs = response.data
      .filter((blog) => blog.likes >= 10)
      .sort((a, b) => b.likes - a.likes);
  } catch (error) {
    console.log(error.message);
  } finally {
    state.isLoading = false;
  }
});

const getImageUrl = (image) => {
  return new URL(`../assets/images/${image}`, import.meta.url).href;
};
</script>

<template>
  <div class="container mx-auto mx md:w-3/4 mt-10 p-5">
    <h2 class="text-center text-3xl font-bold my-5">Popular Blogs</h2>
    <div v-if="state.isLoading" class="text-4xl text-center text-red-500 py-6">
      <BeatLoader />
    </div>
    <div v-else class="grid grid-flow-row md:grid-cols-3 gap-5">
      <div
        v-for="blog in state.blogs.slice(0, limit || state.blogs.length)"
        :key="blog.id"
        class="flex flex-col flex-shrink-0 bg-white rounded-lg"
      >
        <a href="#">
          <img
            :src="getImageUrl(blog.image)"
            alt="image"
            class="h-56 w-screen object-cover rounded-lg rounded-b-none"
          />
        </a>

        <div class="px-5">
          <h3 class="font-bold mt-3">{{ blog.title }}</h3>
          <p>
            {{ blog.content.rendered }}
          </p>
          <div class="flex items-center mt-3 mb-3">
            <i class="pi pi-user"></i>
            <p class="font-semibold ml-2">{{ blog.author }}</p>
            <i class="pi pi-clock ml-5"></i>
            <small class="ml-3">{{ blog.date }}</small>
            <small class="ml-5 font-bold text-2xl">{{ blog.likes }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
