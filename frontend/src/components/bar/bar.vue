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
            <Menu mode="horizontal" theme="light" active-name="1" onselectstart="return false">
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
                        <login v-if="fresh" @bar_com="bar_com" style="display:inline" ref="login_ref"></login>
                        &nbsp;
                        <register v-if="fresh" @bar_com="bar_com" style="display:inline" ref="register_ref"></register>
                    </div>
                </i-col>
            </Menu>
            <Content :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="min-height: 200px;">
                        Content
                    </div>
                </Card>
            </Content>
            <Footer class="layout-footer-center">2019-2019 &copy; Charlie</Footer>
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
                fresh: true
            }
        },
        methods: {
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
