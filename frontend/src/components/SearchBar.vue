<script setup></script>

<template>
  <form class="hidden md:flex">
    <div
      class="relative flex items-center text-gray-400 focus-within:text-gray-600 pointer-events-auto"
    >
      <i class="pi pi-search w-5 h-5 absolute ml-3"></i>
      <input
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
