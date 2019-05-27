<style scoped>
    @import 'styles/common.css';
</style>
<template>
    <div>
        <keep-alive>
            <bar @userSignIn="userSignIn" v-if="!$route.meta.keepAlive"></bar>
        </keep-alive>
        <bar  @userSignIn="userSignIn" v-if="$route.meta.keepAlive"></bar>
        <router-view></router-view>
        <Foot></Foot>
    </div>
</template>
<script>
    import bar from './components/bar/bar.vue'
    import Foot from "./components/foot";
    export default {
        components: {
            Foot,
            bar
        },
        data () {
            return {
                userName: sessionStorage.userName,
                is_admin: sessionStorage.is_admin,
            }
        },
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {
            //子组件(register)将用户名传过来
            userSignIn(userName, is_admin) {
                sessionStorage.userName = userName;
                sessionStorage.is_admin = is_admin;
                this.userName = sessionStorage.userName;
                this.is_admin = sessionStorage.is_admin;
            }
        }
    }
</script>
