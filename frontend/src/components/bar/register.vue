<style scoped>
    .register-header {
        background: #f3f3f3;
        height: 56px;
        width: 520px;
        margin-left: -16px;
        margin-top: -16px;
        border-bottom: 1px solid #e5e5e5;
        border-radius: 6px 6px 0 0;
    }
    .register-header-text {
        text-align: left;
        font-size: 21px;
        font-weight: 700;
        padding: 12px 16px;
    }
    .register-form {
        text-align:center;
        margin-left:auto;
        margin-right:auto;
        margin-top:40px;
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
            <div class="register-header">
                <p class="register-header-text">注册</p>
            </div>
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
                        <Button style="width:320px" type="primary" @click="handleSubmit()">注册</Button><br>
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
            ShowRegister()
            {
                this.show_register = true;
            },
            handle_register() {
                this.$emit('bar_com',2);
            },
            switch_to_login() {
                this.show_register = false;
                this.$emit('bar_com', 1);
            },
            handleSubmit() {
                let _this = this
                this.$http.request({
                    url: _this.$url + 'users/register/' + this.formInline.user + '/' + this.formInline.password + '/',
                    method: 'get',
                }).then(function (response) {
                    if (response.data == 'Success') {
                        _this.$Message.success('注册成功!');
                        _this.show_register = false;
                    } else {
                        _this.$Message.error('该用户名已存在！');
                    }
                }).catch(function(response) {
                    console.log(response)
                })
            }
        }
    }
</script>
<style scoped>

</style>
