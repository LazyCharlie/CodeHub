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
        border-radius: 10px;
        float: left;
        position: relative;
        top: 12px;
        left: 300px;
    }
    .layout-nav{
        width: 200px;
        text-align: center;
        position: relative;
        margin:0 auto;
        margin-right: 260px;
    }
    .layout-footer-center{
        text-align: center;
    }
    img{
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }
</style>
<template>
    <div class="layout">
        <Layout>
                <Menu mode="horizontal" theme="light" active-name="1">
                    <div class="layout-logo">
                        <img src="../images/1.png">
                    </div>
                    <div class="layout-nav">
                        <login style="display:inline"></login>
                        &nbsp;
                        <register style="display:inline"></register>
                    </div>
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
    import login from '../components/login.vue'
    import register from '../components/register.vue'
    export default {
        components: { login, register }
    }
</script>