<template>
    <div>
        <a>{{cData.moviename}}</a>
    </div>
</template>

<script>
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