<template>
    <div>
        <login></login>
        <register></register>
    </div>
</template>
<script>
    import login from '../components/login.vue'
    import register from '../components/register.vue'
    export default {
        components: { login, register }
    }
</script>