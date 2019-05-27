<style scoped>
    .layout{
        border-top: 2px solid #439766;
        background: #ffffff;
        position: relative;
        border-radius: 4px;
        border-bottom: 1px solid #d8d8d8;
        overflow: hidden;
        box-shadow:0 0 10px #d8d8d8;
    }
    .layout-logo{
        width: 200px;
        height: 40px;
        border-radius: 2px;
        float: left;
        position: relative;
        font-size: 0px;
        font-family: "Arial Rounded MT Bold";
    }
    .layout-nav{
        width: 200px;
        text-align: center;
        position: relative;
        margin:0 auto;
        margin-right: 260px;
    }
    .bar{
        width:820px;
        position: relative;
        text-align: center;
        margin:0 auto;

    }
    .layout-footer-center{
        text-align: center;
    }
    @font-face {
        font-family: "Arial Rounded MT Bold";
        src: url("../../fontface/ArialRoundedBold.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
    }
    .logo-code{
        color: #ff6103;
        font-size:30px;
    }
    .logo-hub {
        color: #009b62;
        font-size: 30px;
    }
    .layout-menu{

    }
    .menu-style{
        background: #fafafa;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Menu mode="horizontal" theme="light" :active-name="act_name" ref="menu" onselectstart="return false" @on-select="handle_select" class="menu-style">
                <i-col span="24">
                    <div class="bar">
                        <div class="layout-logo">
                            <span class="logo-code">code</span>
                            <span class="logo-hub">hub</span>
                        </div>
                        <div class="layout-menu">
                            <MenuItem name="1">
                                <Icon type="ios-paper" />
                                首页
                            </MenuItem>
                            <MenuItem name="2">
                                <Icon type="ios-people" />
                                问答
                            </MenuItem>
                            <MenuItem name="3">
                                <Icon type="ios-people" />
                                专栏
                            </MenuItem>
                            <MenuItem name="4">
                                <Icon type="ios-people" />
                                讲堂
                            </MenuItem>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <login @userSignIn="userSignIn" v-if="fresh&&show_button" @bar_com="bar_com" style="display:inline" ref="login_ref"></login>
                        &nbsp;
                        <register v-if="fresh&&show_button" @bar_com="bar_com" style="display:inline" ref="register_ref"></register>
                        <Avatar v-if="!show_button" shape="square" icon="ios-person" style="margin-left:-30px;background-color: #87d068" size="large"/>
                        <span v-if="!show_button" style="margin-left: 12px">欢迎，</span>
                        <span v-if="!show_button" style="font-weight: bold">{{ userName }}</span>
                        <a v-if="!show_button" style="margin-left:20px" @click="exit_login">退出登录</a>
                    </div>
                </i-col>
            </Menu>
        </Layout>
    </div>
</template>

<script>
    import login from './login.vue'
    import register from './register.vue'
    export default {
        components: { login, register },
        data(){
            return {
                fresh: true,
                act_name: "1",
                userName: '',
                show_button: true,
                is_admin: false
            }
        },
        mounted()
        {
            if (this.$parent.userName) {
                this.userName = this.$parent.userName;
                this.is_admin = this.$parent.is_admin;
                this.show_button  = false;
            }
        },
        methods: {
            change_active_key(str) {
                this.act_name = str;
                this.$nextTick(function (){
                    this.Menu.updateActiveName();
                })
            },
            exit_login()
            {
                this.userName = '';
                this.is_admin = '';
                this.$emit('userSignIn', '', false);
            },
            handle_select(name) {
                if (name == "2") this.$router.push({path: '/questions'})
                else if (name == "1") this.$router.push({path:'/'})
            },
            userSignIn(username, is_admin)
            {
                this.$emit('userSignIn', username, is_admin);
                this.userName = username;
                this.is_admin = is_admin;
            },
            bar_com(k) {
                this.fresh = false;
                let _this = this;
                this.$nextTick(() => {
                    _this.fresh = true;
                    this.$nextTick(() => {
                        if (k == 1) {
                            _this.$refs.login_ref.ShowLogin();
                        }
                        else _this.$refs.register_ref.ShowRegister();
                    })
                })
            },
        },
        watch:{
            userName() {
                if (this.userName) {
                    this.show_button  = false;
                }
                else this.show_button = true;
            }
        }
    }
</script>

<style scoped>

</style>
