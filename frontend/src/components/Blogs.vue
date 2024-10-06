<script setup>
import { reactive, onMounted, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import BeatLoader from "vue-spinner/src/BeatLoader.vue";
import BlogsServices from "@/services/BlogsServices";
import SearchBar from "./SearchBar.vue";

const route = useRoute();

const state = reactive({
  articles: [],
  isLoading: true,
  isError: null,
});

const stripHtml = (html) => {
  if (!html) return "";
  const regex = /(<([^>]+)>)/gi;
  return html.replace(regex, "");
};

const shortenContent = (content, maxLength) => {
  const stripped = stripHtml(content);
  return stripped.length > maxLength
    ? stripped.substring(0, maxLength) + "..."
    : stripped;
};

onMounted(async () => {
  try {
    const response = await BlogsServices.getAllPosts();
    console.log(response.data);
    state.articles = response.data;
  } catch (error) {

    if(error.response && error.response.data && error.response.data.error) {
    state.isError = error.response?.data?.error
    } else {
      state.isError = "Unexpected error occured"
    }
    console.log("Hello error", error.message);
  } finally {
    state.isLoading = false;
  }
});

watch(
  () => route.query.search,
  async (value) => {
    try {
      let response;
      if (value) {
        //Fetch the blog based on the search query
        response = await BlogsServices.getAllPosts(value);
      } else {
        response = await BlogsServices.getAllPosts();
      }
      state.articles = response.data;
    } catch (error) {
      console.log(error.message);
    }
  },
);
</script>

<template>
  <div id="section">
    <div class="container mx-auto mx md:w-3/4 mt-10 p-5">
      <h2 class="text-center text-3xl font-bold my-5">
        Learn about the latest technologies
      </h2>
      <SearchBar />
      <div v-if="state.isLoading" class="text-4xl py-6 text-center">
        <BeatLoader />
      </div>
      <div
        v-else-if="state.isError"
        class="text-red-500 text-center text-2xl mt-10"
      >
        {{ state.isError }}
      </div>
      <div v-else class="grid grid-flow-row md:grid-cols-3 gap-5">
        <div
          v-for="article in state.articles"
          :key="article.id"
          class="flex flex-col bg-white rounded-lg shadow-2xl"
        >
          <RouterLink :to="'/blogs/' + article._id">
            <img
              :src="article.imageURL"
              alt="images"
              class="h-56 w-screen object-cover rounded-lg rounded-b-none"
            />
          </RouterLink>

          <div class="px-5 text-center">
            <h3 class="font-bold my-3 text-[1.3rem]">
              {{ article.title }}
            </h3>
            <p>{{ shortenContent(article?.content, 200) }}</p>

            <div class="flex items-center justify-evenly mt-3 mb-3">
              <i class="pi pi-clock ml-0.5 text-center"
                ><span class="ml-3 italic font-bold">{{
                  article.date
                }}</span></i
              >

              <i class="ml-3 pi pi-tag"
                ><span class="ml-3 italic font-bold">{{
                  article.category
                }}</span></i
              >
            </div>
            <RouterLink
              :to="'/blogs/' + article._id"
              class="bg-[#121520] flex items-center justify-center hover:bg-gray-500 transition duration-300 ease-in-out p-4 text-white text-center my-4 rounded-lg w-full h-[2.5rem]"
            >
              Read More
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
