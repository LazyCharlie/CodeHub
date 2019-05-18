<template>
    <div>
        {{ $route.params.id }}
        <button @click="test">have a test</button>
    </div>
</template>
<script>

    import bar from '../components/bar/bar.vue'
    export default {
        name: "questions",
        components: { bar },
        methods: {
            test() {
                console.log(this.$route.params.id);
            }
        }
    }
</script>

<style scoped>

</style>
