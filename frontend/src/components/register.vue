<style scoped>
    .register-header {
        text-align: left;
        font-size: 17px;
    }
    .register-form {
        text-align:center;
        margin-left:auto;
        margin-right:auto;
        margin-top:20px;
    }
    .register-user-title{
        margin-left:-274px;
        font-weight:bold;
        font-size:14px;
    }
    .register-name-input{
        margin-left:auto;
        margin-right:auto;
        width:320px;
        margin-top:5px;
    }
    .register-password-label{
        margin-left:-292px;
        margin-top:-7px;
        font-weight:bold;
        font-size:14px;
    }
    .register-password-input{
        margin-left:auto;
        margin-right:auto;
        width:320px;
    }
    .register-email-input{
        margin-left:auto;
        margin-right:auto;
        width:320px;
    }
    .register-login-label{
        margin-top:-25px;
        margin-left: -210px;
    }
</style>
<template>
    <div class="register">
        <Button @click="handle_register" type="primary" size="large">快速注册</Button>
        <Modal id="register"
               v-model="show_register"
               onselectstart="return false"
               footer-hide>
            <p slot="header"
                class="register-header">
                <span>注册</span>
            </p>
            <div class="register-form">
                <Form ref="formInline" :model="formInline" :rules="ruleInline">
                    <p class="register-user-title">用户名</p>
                    <FormItem prop="user">
                        <Input type="text"
                               class="register-name-input"
                               v-model="formInline.user"
                               placeholder="Username"
                               size="large">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <p class="register-password-label">邮箱</p>
                        <Input type="text"
                               class="register-email-input"
                               v-model="formInline.email"
                               placeholder="Email"
                               size="large">
                            <Icon type="ios-mail-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <p class="register-password-label">密码</p>
                        <Input type="password"
                               class="register-password-input"
                               v-model="formInline.password"
                               placeholder="Password"
                               size="large">
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem class="register-login-label">
                        已经拥有账户？
                        <a @click="switch_to_login">登录</a>
                    </FormItem>
                    <FormItem>
                        <Button style="width:320px" type="primary" @click="handleSubmit('formInline')">注册</Button><br>
                        <span class="login-footer">登陆即表示您同意网站的</span><a href="tos">《服务条款》</a>
                    </FormItem>
                </Form>
            </div>
        </Modal>
    </div>
</template>
<script>
    import login from './login.vue'
    export default {
        name: "register",
        components: { login },
        data() {
            return {
                show_register: false,
                formInline: {
                    user: '',
                    password: '',
                    email: '',
                },
                ruleInline: {
                    user: [
                        { trigger: 'blur' }
                    ],
                    password: [
                        { trigger: 'blur' },
                    ],
                    email: [
                        { trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {
            clear_input() {
                this.user = '',
                this.password = '',
                this.email = ''
            },
            handle_register() {
                this.clear_input();
                this.show_register = true;
            },
            switch_to_login() {
                render:(h)=>{
                    return h('login');
                }
            }
        }
    }
</script>
<style scoped>

</style>