const routers = [
    {
        path: '/',
        meta: {
            title: '',
            keepAlive: true,
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/questions/:id',
        meta: {
            title: '',
            keepAlive: true,
        },
        component: (resolve) => require(['./views/questions.vue'], resolve)
    }
];
export default routers;
