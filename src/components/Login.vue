<template>
    <div>
        <van-cell-group>
            <van-field
                    v-model="username"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"
                    @click-right-icon="$toast('哈哈')"/>
            <van-field
                v-model="password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
            />
        </van-cell-group>
        <van-button  type="primary" v-on:click="login">登录</van-button>

        <van-button type="primary" v-on:click="register">注册</van-button>
    </div>
</template>

<script>
    import axios from 'axios'
    import Vue from 'vue'
    import { Button, Field, Dialog, CellGroup } from 'vant'
    Vue.use(Button).use(Field).use(Dialog).use(CellGroup)
    export default {
        name: "Login",
        data(){
            return{
                username:"",
                password:"",
                ctmUserInfo:{
                    username:"",
                    password:"",
                },
            }
        },
        methods:{
            login(){
                var username = this.username
                var password = this.password
                if(isEmpty(username)){
                    Dialog.alert({
                        title:"提示",
                        message:"未输入用户名"
                    })
                    return;
                }
                if(isEmpty(password)){
                    Dialog.alert({
                        title:"提示",
                        message:"未输入密码"
                    })
                    return;
                }

                this.ctmUserInfo.username = username
                this.ctmUserInfo.password = password
                axios.post("http://192.168.4.224:8088/user/login", {data:this.ctmUserInfo}).then((response)=>{
                    //获取请求结果码
                    var resultCode = response.data.resultCode
                    if(resultCode > 0){
                        //请求成功 页面跳转
                        this.$router.push({path:'/movieList'})
                    }else{
                        //接口请求 业务错误
                        Dialog.alert({
                            title: "提示",
                            message: response.data.msg
                        })
                    }

                }).catch(()=>{
                    //网络请求异常
                    Dialog.alert({
                        title: "提示",
                        message: "网络请求异常"
                    })
                })
            },
            register(){
                Dialog.alert({
                    title:"提示",
                    message:"功能暂未开通"
                })
            },
        }
    }

    //校验是否为空
    function isEmpty(obj){
        if(typeof obj == "undefined" || obj == null || obj == ""){
            return true;
        }else{
            return false;
        }
    }
</script>

<style lang="less">
    .van-button{
        &--normal:not(:last-child){
            margin-right: 20px;
         }
    }
</style>