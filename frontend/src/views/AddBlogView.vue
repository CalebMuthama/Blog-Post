<script setup>
import TextEditor from "../components/TextEditor.vue";
import DOMPurify from "dompurify";
import router from "@/router";
import { reactive, ref } from "vue";
import BlogsServices from "@/services/BlogsServices";

const form = reactive({
  title: "",
  imageURL: "",
  content: "",
  author: "",
  date: "",
  category: "",
});

const errorMessage = ref(null);

// const resetForm = () => {
//   form.title = "";
//   (form.imageURL = ""), (form.content = ""), (form.author = "");
//   form.date = "";
//   form.category = "";
// };

const handleSubmit = async () => {
  const santizedContent = DOMPurify.sanitize(form.content);
  const newBlog = {
    title: form.title,
    imageURL: form.imageURL,
    content: santizedContent,
    author: form.author,
    date: form.date,
    category: form.category,
  };

  try {
    const response = await BlogsServices.createPost(newBlog);
    router.push("/blogs/");
    console.log(response.data);
    // resetForm();
  } catch (error) {
    errorMessage.value = error.response.data.error;
    console.log(error.message);
  }
};
</script>

<template>
  <section class="bg-[#dfe2ec]">
    <div class="container m-auto max-w-2xl py-24">
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">Add Job</h2>
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
              class="border-none placeholder:font-bold rounded w-full py-2 px-3 mb-2 ring-2 ring-gray-500 focus:ring-2 focus:ring-[121520]"
            />
          </div>

          <div class="mb-4">
            <label for="body" class="block text-gray-700 font-bold mb-2"
              >Body:
            </label>
            <TextEditor v-model="form.content" />
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
              class="border-none placeholder:font-bold rounded w-full py-2 px-3 mb-2 ring-2 ring-gray-500 focus:ring-2 focus:ring-[121520]"
            />
          </div>

          <div class="mb-4">
            <label for="date" class="block text-gray-700 font-bold mb-2">
              Date:
            </label>
            <input
              v-model="form.date"
              type="date"
              id=" date"
              name="date"
              placeholder="Date..."
              required
              class="border-none placeholder:font-bold rounded w-full py-2 px-3 mb-2 ring-2 ring-gray-500 focus:ring-2 focus:ring-[#121520]"
            />
          </div>

          <div class="mb-4">
            <label for="category" class="block text-gray-700 font-bold mb-2">
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

          <div v-if="errorMessage" class="text-red-500">
            {{ errorMessage }}
          </div>
          <button
            type="submit"
            class="bg-black hover:bg-gray-500 text-white w-full transition duration-300 ease-in-out py-2 rounded-lg"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
