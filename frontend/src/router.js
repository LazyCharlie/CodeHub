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
        path: '/questions/',
        meta: {
            title: 'question',
            keepAlive: true,
        },
        component: (resolve) => require(['./views/questions.vue'], resolve)
    },
    {
        path: '/questions/1234',
        meta: {
            title: 'question',
            keepAlive: true,
        },
        component: (resolve) => require(['./views/blog.vue'], resolve)
    }
];
export default routers;
