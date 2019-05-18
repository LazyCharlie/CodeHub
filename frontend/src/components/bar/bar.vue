<style scoped>
    .layout{
        border-top: 2px solid #439766;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
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
</style>
<template>
    <div class="layout">
        <Layout>
            <Menu mode="horizontal" theme="light" active-name="1" onselectstart="return false" @on-select="test">
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
                            <MenuItem name="2" href="127.0.0.1:8080/questions">
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
                        <login v-if="fresh" @bar_com="bar_com" style="display:inline" ref="login_ref"></login>
                        &nbsp;
                        <register v-if="fresh" @bar_com="bar_com" style="display:inline" ref="register_ref"></register>
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
                cnt: 1,
            }
        },
        methods: {
            test(name) {
                this.cnt++;
                console.log(this.cnt);
                if (parseInt(name) == 2) this.$router.push({path: '/questions/1234'})
                else if (parseInt(name) == 1) this.$router.push({path:'/'})
            },
            bar_com(k) {
                this.fresh = false;
                let _this = this;
                this.$nextTick(() => {
                    _this.fresh = true;
                    console.log(k);
                    this.$nextTick(() => {
                        if (k == 1) {
                            _this.$refs.login_ref.ShowLogin();
                        }
                        else _this.$refs.register_ref.ShowRegister();
                    })
                })
            },
        }
    }
</script>

<style scoped>

</style>
