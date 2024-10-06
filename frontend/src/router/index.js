import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BlogsView from "@/views/BlogsView.vue";
import SinglePageBlog from "@/views/SinglePageBlog.vue";
import AddBlogView from "@/views/AddBlogView.vue";
import EditBlogView from "@/views/EditBlogView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/blogs",
      name: "blogs",
      component: BlogsView,
    },
    {
      path: "/blogs/:id",
      name: "blog",
      component: SinglePageBlog,
    },
    {
      path: "/blogs/add",
      name: "blog-add",
      component: AddBlogView,
    },
    {
      path: "/blogs/edit/:id",
      name: "blog-edit",
      component: EditBlogView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
