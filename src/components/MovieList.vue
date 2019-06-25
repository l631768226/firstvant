<template>
    <div>
        <van-list
            v-model = "loading"
            :finished = "finished"
            finished-text="这是个有底线的"
            @load="onLoad"
        >
            <van-cell
                v-for="item in list"
                :key="item.id"
                :title="item.moviename"
                :value="item.score"
                :border=false
                v-on:click="postMovieDetail(item.ranking)"
            />
        </van-list>
    </div>
</template>

<script>
    import axios from 'axios'
    import Vue from 'vue'
    import { List, Cell, Dialog } from 'vant'

    Vue.use(List).use(Cell).use(Dialog)

    export default {
        name: "MovieList",
        data(){
            return {
                list: [],
                loading: false,
                finished: false,
                movieDetailRec:{
                    ranking:""
                },
                movieInfo:"",
            }
        },
        methods:{
            onLoad(){
                setTimeout(() => {
                    axios.get("http://192.168.4.224:8088/movie/list").then((response)=>{
                        this.list = response.data.resultData
                        this.loading = false;

                        if(this.list.length >= 250){
                            this.finished = true
                        }
                    }).catch((response)=>{
                        Dialog.alert({
                            title:"提示",
                            message:response.type
                        })
                    })
                }, 500 );
            },
            postMovieDetail(ranking){
                this.movieDetailRec.ranking = ranking
                axios.post("http://192.168.4.224:8088/movie/detail", {data:this.movieDetailRec}).then((response)=>{
                    var resultCode = response.data.resultCode
                    if(resultCode > 0){
                        this.movieInfo = response.data.resultData

                        this.$router.push({path:'/movieDetail', query:this.movieInfo})
                        // this.$router.push({name:"MovieDetail",params:this.movieInfo})
                    }else{
                        alert(response.data.msg)
                    }
                }).catch((response)=>{
                    alert(response.data.msg)
                })
            }
        }
    }
</script>

<style scoped>

</style>