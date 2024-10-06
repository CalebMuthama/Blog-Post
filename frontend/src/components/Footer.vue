<script setup></script>

<template>
  <footer>
    <div
      class="flex flex-col-reverse space-y-10 md:flex-row justify-evenly items-center text-white mt-10 bg-[#121520] py-5"
    >
      <div
        class="inline-flex space-x-10 mt-5 text-white md:flex md:flex-col items-center"
      >
        <img
          src="../assets/images/logo.jpg"
          alt=""
          class="h-48 w-48 object-cover rounded-full"
        />
        <div class="space-x-5 mt-5">
          <a href="#">
            <i class="pi pi-whatsapp text-3xl"></i>
          </a>
          <a href="#">
            <i class="pi pi-twitter text-3xl"></i>
          </a>
          <a href="#">
            <i class="pi pi-linkedin text-3xl"></i>
          </a>
          <a href="#">
            <i class="pi pi-instagram text-3xl"></i>
          </a>
        </div>
      </div>
      <div class="flex items-center space-x-8">
        <a href="#" class="hover:text-gray-500">Blogs</a>
        <a href="#" class="hover:text-gray-500">Travel</a>
        <a href="#" class="hover:text-gray-500">Food</a>
        <a href="#" class="hover:text-gray-500">Books</a>
        <a href="#" class="hover:text-gray-500">About</a>
        <a href="#" class="hover:text-gray-500">Contact</a>
      </div>

      <div class="flex flex-col items-center">
        <h2 class="text-2xl">Get free Newsletter in your inbox</h2>
        <form class="flex items-center justify-center mt-5">
          <input
            type="text"
            name="newsletter"
            autocomplete="off"
            aria-label="newsletter"
            placeholder="you@example.com"
            class="border-gray-500 h-[2rem] w-auto pl-2 rounded-md border-none ring-2 ring-blue-300 shadow-lg focus:ring-blue-500 focus:ring-2 focus:outline-none placeholder-gray-500 font-semibold"
          />
          <button
            class="h-[2rem] w-auto px-4 bg-white text-black ml-3 rounded-md hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </footer>
</template>
