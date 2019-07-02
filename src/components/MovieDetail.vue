<template>
    <div>
        <a>{{cData.moviename}}</a>
    </div>
</template>

<script>

    import Vue from 'vue'
    import { Row, Col } from 'vant'

    Vue.use(Row).use(Col)

    export default {
        name: "MovieDetail",
        data(){
            return{
                cData: ""
            }
        },
        methods:{

        },
        mounted() {
            this.cData = this.$route.query
        }
    }
</script>

<style scoped>

</style>