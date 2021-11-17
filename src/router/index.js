import {createRouter, createWebHistory} from "vue-router";
import NotFound from "@/pages/NotFound";
import Main from "@/pages/Main";

const routes = [
    {
        path: "/",
        component: Main
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
