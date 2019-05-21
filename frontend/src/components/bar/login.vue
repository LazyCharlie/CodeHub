<style scoped>
.login-input{
    margin-left:84px;
    margin-top:40px;
}
.user-title{
    font-weight:bold;
    font-size:14px;
}
.login-header {
    background: #f3f3f3;
    height: 56px;
    width: 520px;
    margin-left: -16px;
    margin-top: -16px;
    border-bottom: 1px solid #e5e5e5;
    border-radius: 6px 6px 0 0;
}
.login-header-text {
    text-align: left;
    font-size: 21px;
    font-weight: 700;
    padding: 12px 16px;
}
.login-name-input {
    width:320px;
    margin-top:5px;
}
.login-password-input{
    width:320px;
}
.login-password-label{
    margin-top:-7px;
    font-weight:bold;
    font-size:14px;
}
.login-forget-label{
    margin-top:-27px;
}
.login-footer{
    color:#9ea7b4;
    margin-left: 61px;
    text-align:center;
}
</style>
<template>
    <div class="login">
        <Button @click="handle_login" type="dashed" size="large">立即登录</Button>
        <Modal id="login"
               v-if="fresh"
               v-model="show_login"
               footer-hide
               class="test-style"
               onselectstart="return false">
            <div
               class="login-header">
                <p class="login-header-text">登录</p>
            </div>
            <div class="login-input">
                <Form ref="formInline" :model="formInline" :rules="ruleInline">
                    <p class="user-title">用户名 或 邮箱</p>
                    <FormItem prop="user">
                        <Input type="text"
                               class="login-name-input"
                               v-model="formInline.user"
                               placeholder="Username"
                               size="large">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <p class="login-password-label">密码</p>
                        <Input type="password"
                               class="login-password-input"
                               v-model="formInline.password"
                        placeholder="Password"
                               size="large">
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem class="login-forget-label">
                        <a href="forget" target="_blank">忘记密码?</a>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;
                        尚未拥有账户？
                        <a @click="switch_to_register">注册</a>
                    </FormItem>
                    <FormItem style="margin-top:-5px">
                        <Button style="width:320px;margin-top:1px" :loading="loading" type="primary" @click="handleSubmit()">登录</Button><br>
                        <span class="login-footer">登陆即表示您同意网站的</span><a href="tos">《服务条款》</a>
                    </FormItem>
                </Form>
            </div>
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                test: true,
                loading: false,
                show_login: false,
                fresh: true,
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { trigger: 'change', required: true, message: ' ' }
                    ],
                    password: [
                        { trigger: 'change', required: true, message: ' ' },
                    ]
                }
            }
        },
        methods: {
            switch_to_register()
            {
                this.show_login = false
                this.$emit('bar_com', 2);
            },
            ShowLogin()
            {
                this.show_login = true;
            },
            handle_login()
            {
                this.$emit('bar_com', 1);
            },
            handleSubmit() {
                let _this = this
                _this.loading = true;
                this.$http.request({
                    url: _this.$url + 'users/login/' + this.formInline.user + '/' + this.formInline.password + '/',
                    method: 'get',
                }).then(function (response) {
                    if (response.data == 'Success') {
                        _this.$Message.success('登录成功！');
                        _this.show_login = false;
                    } else {
                        _this.$Message.error('用户名或密码错误！');
                    }
                }).catch(function(response) {
                    console.log(response)
                })
                _this.loading = false;
            }
        }
    }
</script>
