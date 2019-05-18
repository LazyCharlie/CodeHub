<div class="layout">
    <Layout>
        <Menu mode="horizontal" theme="light" active-name="1" onselectstart="return false">
            <i-col span="24">
                <div class="bar">
                    <div class="layout-logo">
                        <span class="logo-code">code</span>
                        <span class="logo-hub">hub</span>
                    </div>
                    <div class="layout-menu" href="index">
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
                </div>
            </Card>
        </Content>
        <Footer class="layout-footer-center">2019-2019 &copy; Charlie</Footer>
    </Layout>
</div>
