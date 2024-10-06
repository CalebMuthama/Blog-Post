<script setup>
import router from "@/router";
import { useRoute } from "vue-router";
import { reactive, onMounted } from "vue";
import TextEditor from "@/components/TextEditor.vue";
import BlogsServices from "@/services/BlogsServices";

const route = useRoute();
const blogId = route.params.id;

const form = reactive({
  title: "",
  imageURL: "",
  content: "",
  author: "",
  date: "",
  category: "",
});

const state = reactive({
  blog: {},
  isLoading: true,
});
const handleSubmit = async () => {
  const updatedBlog = {
    title: form.title,
    imageURL: form.imageURL,
    content: form.content,
    author: form.author,
    date: form.date,
    category: form.category,
  };

  try {
    const response = await BlogsServices.updatePost(blogId, updatedBlog);
    router.push(`/blogs/${blogId}`);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

onMounted(async () => {
  try {
    const response = await BlogsServices.getPost(blogId);
    state.blog = response.data;

    //Populate the inputs
    form.title = state.blog.title;
    form.imageURL = state.blog.imageURL;
    form.content = state.blog.content;
    form.author = state.blog.author;
    form.date = state.blog.date;
    form.category = state.blog.category;
  } catch (error) {
    console.log(error.message);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-[#dfe2ec]">
    <div class="container m-auto max-w-4xl py-24">
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">Edit Job</h2>

          <div class="mb-4">
            <label for="title" class="block text-gray-700 font-bold mb-2"
              >Image:
            </label>
            <input
              v-model="form.imageURL"
              type="text"
              id="image"
              name="image"
              placeholder="Add Image URL..."
              required
              class="border-none placeholder:font-bold rounded w-full py-2 px-3 mb-2 ring-2 ring-gray-500 focus:ring-2 focus:ring-[121520]"
            />
          </div>

          <div class="mb-4">
            <label for="title" class="block text-gray-700 font-bold mb-2"
              >Title:
            </label>
            <input
              v-model="form.title"
              type="text"
              id="title"
              name="title"
              placeholder="Title..."
              required
              class="border-none rounded w-full py-2 px-3 mb-2 ring-2 ring-gray-500 focus:ring-2 focus:ring-[121520]"
            />
          </div>

          <div class="mb-4">
            <label for="body" class="block text-gray-700 font-bold mb-2"
              >Body:
            </label>
            <TextEditor v-model="form.content" />
            <!-- <textarea
              v-model="form.content.rendered"
              type="text"
              id="body"
              name="Body"
              placeholder="Content of the blog..."
              required
              class="border-none rounded w-full h-[20rem] py-2 px-3 mb-2 ring-2 ring-gray-500 focus:ring-2 focus:ring-[121520]"
            /> -->
          </div>

          <div class="mb-4">
            <label for="author" class="block text-gray-700 font-bold mb-2">
              Author:
            </label>
            <input
              v-model="form.author"
              type="text"
              id="author"
              name="author"
              placeholder="Author..."
              required
              class="border-none rounded w-full py-2 px-3 mb-2 ring-2 ring-gray-500 focus:ring-2 focus:ring-[121520]"
            />
          </div>

          <div class="mb-4">
            <label for="date" class="block text-gray-700 font-bold mb-2">
              Date:
            </label>
            <input
              v-model="form.date"
              type="date"
              id=" Date"
              name="Date"
              placeholder="Date..."
              required
              class="border-none rounded w-full py-2 px-3 mb-2 ring-2 ring-gray-500 focus:ring-2 focus:ring-[121520]"
            />
          </div>

          <div class="mb-4">
            <label for="date" class="block text-gray-700 font-bold mb-2">
              Category:
            </label>
            <select
              v-model="form.category"
              name="category"
              id="category"
              class="border rounded w-full py-2 px-3"
            >
              <option value="Tech">Tech</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Books">Books</option>
              <option value="Poesy">Poesy</option>
            </select>
          </div>
          <button
            type="submit"
            class="bg-black hover:bg-gray-500 text-white w-full transition duration-300 ease-in-out py-2 rounded-lg"
          >
            Edit Blog
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
