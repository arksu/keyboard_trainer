import {createRouter, createWebHistory} from "vue-router";
import NotFound from "@/pages/NotFound";
import Main from "@/pages/Main";
import Lesson1 from "@/pages/Lesson1";

const routes = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/lesson/1",
        component: Lesson1,
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
export * from "vue-router";
