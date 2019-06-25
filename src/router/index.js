import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MovieList from '@/components/MovieList'
import MovieDetail from "../components/MovieDetail";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: "/movieList",
            name: "movieList",
            component: MovieList
        },
        {
            path: "/movieDetail",
            name: "movieDetail",
            component: MovieDetail
        },
    ]
})
