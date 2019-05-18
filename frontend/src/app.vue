<style scoped>
    @import 'styles/common.css';
</style>
<template>
    <div>
        <keep-alive>
            <bar v-if="$route.meta.keepAlive"></bar>
        </keep-alive>
        <bar v-if="!$route.meta.keepAlive"></bar>
        <router-view></router-view>
    </div>
</template>
<script>
    import bar from './components/bar/bar.vue'
    export default {
        components: {
            bar
        },
        data () {
            return {}
        },
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
