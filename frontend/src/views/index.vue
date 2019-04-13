<style>
</style>
<template>
    <div>
        <Button @click="modal2 = true">登录</Button>
        <Modal
                v-model="modal2"
                footer-hide>
            <p slot="header"
               style="text-align:left;font-size:17px">
                <span>登录</span>
            </p>
            <div style="text-align:center;margin-left:auto;margin-right:auto;">
                <Form ref="formInline" :model="formInline" :rules="ruleInline" style="margin-top:20px">
                    <p style="margin-left:-227px;font-weight:bold;font-size:14px">用户名 或 邮箱</p>
                    <FormItem prop="user" style="margin-left:auto;margin-right:auto;width:320px">
                        <Input type="text" v-model="formInline.user" placeholder="Username" style="font-size:24px;margin-left:auto;margin-right:auto;width:320px;margin-top:5px" size="large">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password" style="margin-left:auto;margin-right:auto;width:320px">
                        <p style="margin-left:-292px;margin-top:-7px;font-weight:bold;font-size:14px">密码</p>
                        <Input type="password" v-model="formInline.password" placeholder="Password" style="margin-top:-2px" size="large">
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem style="margin-top:-25px">
                        <a href="forget" target="_blank">忘记密码?</a>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;
                        尚未拥有账户？
                        <a href="register" target="_blank">注册</a>
                    </FormItem>
                    <FormItem>
                        <Button style="width:320px" type="primary" @click="handleSubmit('formInline')">登录</Button>
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
                modal2: false,
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { trigger: 'blur' }
                    ],
                    password: [
                        { trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>
