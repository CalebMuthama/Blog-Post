<script setup>
import { reactive, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import router from "@/router";
import axios from "axios";
import { useRoute } from "vue-router";
import DOMPurify from "dompurify";
import BlogsServices from "@/services/BlogsServices";

const route = useRoute();
const blogId = route.params.id;

const state = reactive({
  article: {
    imageURL: "",
    title: "",
    content: "",
    author: "",
    date: "",
    category: "",
    likes: "",
  },
  isLoading: true,
});

const santizedContent = ref("");

onMounted(async () => {
  try {
    const response = await BlogsServices.getPost(blogId);
    state.article = response.data;
    //Santizing the content
    santizedContent.value = DOMPurify.sanitize(state.article.content);
  } catch (error) {
    console.log(error.message);
  } finally {
    state.isLoading = false;
  }
});

const deleteBlog = async () => {
  try {
    await BlogsServices.deletePost(blogId);
    router.push("/blogs");
  } catch (error) {
    console.log(error.message);
  }
};
console.log("hello world.");
</script>

<template>
  <div id="singlePageBlog">
    <RouterLink to="/blogs">
      <i class="pi pi-arrow-circle-left ml-10 mt-5 text-3xl"></i>
    </RouterLink>
    <div class="flex items-center justify-end space-x-5 mx-10">
      <RouterLink
        to="/blogs/add"
        class="bg-[#121520] text-white rounded-lg hover:bg-gray-500 py-3 px-2 transition duration-300 ease-in-out"
      >
        Add Blog
      </RouterLink>
      <RouterLink
        :to="`/blogs/edit/${state.article._id}`"
        class="bg-gray-500 text-white rounded-lg hover:bg-gray-400 py-3 px-2 transition duration-300 ease-in-out"
      >
        Edit Blog
      </RouterLink>
      <Button
        @click="deleteBlog()"
        class="bg-red-500 text-white rounded-lg hover:bg-red-400 py-3 px-2 transition duration-300 ease-in-out"
      >
        Delete Blog
      </Button>
    </div>
    <h1 class="font-bold text-5xl my-12 text-center">
      {{ state.article.title }}
    </h1>
    <div class="flex flex-row justify-center items-center text-center mx-4">
      <div class="grid grid-cols-2 gap-5 md:w-1/2">
        <img
          :src="state.article.imageURL"
          alt="image"
          class="h-full w-full object-fit rounded-xl"
        />
        <h5 class="text-3xl italic">
          Have you ever fallen in love? Well, I have not but here five easy
          steps to help you find you soulmate whom you will share the rest of
          your life with
        </h5>
      </div>
    </div>

    <div class="flex items-center justify-center">
      <div class="mx-5 grid grid-cols-10 w-11/12 place-content-center gap-10">
        <div class="col-span-10 md:col-span-7">
          <p v-html="santizedContent" class="text-2xl space-y-5 mt-10"></p>
          <!--I am santizing the content using DOM purify before rendering it to the browser to prevent XXS attcks-->
          <br />
          <figure class="md:hidden my-3">
            <img
              :src="state.article.imageURL"
              alt=""
              class="object-fit h-[20rem] w-full shadow-2xl"
            />
            <figcaption class="italic font-semibold text-center">
              An image showing how a yamaha looks like
            </figcaption>
          </figure>
        </div>

        <figure class="hidden md:block col-span-3">
          <img
            :src="state.article.imageURL"
            alt=""
            class="w-full h-full object-fit shadow-2xl"
          />
          <figcaption class="italic font-semibold mt-2 text-center">
            A classic yamaha bike from the early 2000s
          </figcaption>
        </figure>
      </div>
    </div>

    <!--News letter-->
    <div class="flex flex-col justify-center text-center mt-10">
      <p class="font-bold text-2xl italic my-4">
        Subscribe to our weekly articles
      </p>
      <form>
        <input
          type="text"
          autocomplete="off"
          placeholder="Type your email..."
          class="h-[2.5rem] w-1/2 pl-4 placeholder-gray-500 text-black font-bold ring-2 ring-gray-500 border-none focus:ring-2 focus:ring-[#121520] focus:outline-none rounded-xl"
        />
        <button
          class="bg-white text-black py-2 mx-2 px-2 hover:bg-gray-500 transition duration-500 ease-in-out rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
