import Vue from 'vue';
import Router from "vue-router";
import Hello from '../pages/hello.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    scrollBehavior(to) {
        if (to.hash) {
            return window.scrollTo({
                top: document.querySelector(to.hash).offsetTop, behavior: 'smooth'
            });
        }

        return window.scrollTo({
            top: 0, behavior: 'smooth'
        });
    },
    routes: [
        {
            path: '/',
            name: 'hello',
            component: Hello,
            meta: {
                title: 'O2System Framework',
            }
        },
    ]
});