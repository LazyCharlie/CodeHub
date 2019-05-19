<style>
    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content {
        margin-top: -16px;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
        background: #fff;
        padding: 16px;
    }

    .demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
        border-top: 1px solid #3399ff;
        border-left: 1px solid #3399ff;
        border-right: 1px solid #3399ff;
    }

    .pane-center-style{
        width:820px;
        position: relative;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        margin-top:20px;
    }
    .question-card-block{
        height:72px;
    }
    .question-card-style{
        height: 70px;
        width: 815px;
        margin-left: -13px;
        padding: 0px;
    }
    .demo-card-votes{
        margin-left: 0px;
        vertical-align: middle;
        width: 44px;
        height: 41px;
        margin-top: -2px;
        color: #757575;
    }
    .demo-card-ans-have{
        vertical-align: middle;
        margin-left: 58px;
        margin-top: -40px;
        width: 44px;
        height: 41px;
        color: #017e65;
        background-color: #eef5f3;
        border-radius:5px;
    }
    .demo-card-ans-zero{
        vertical-align: middle;
        margin-left: 58px;
        margin-top: -40px;
        width: 44px;
        height: 41px;
        color: #ad3b38;
    }
    .demo-card-scan{
        margin-left: 116px;
        width: 44px;
        height: 41px;
        vertical-align: middle;
        margin-top: -40px;
        color: #999999;
    }
    .demo-card-name{
        margin-left: 168px;
        margin-top: -43px;
        text-align: left;
        height:16px;
        font-size:14px;
        color: #a4a4a4;
    }
    .demo-card-title{
        margin-left: 168px;
        margin-top: 5px;
        text-align: left;
        font-size: 16px;
        font-weight: 600;
        color:#333333;
        width: 600px;
        height: 20px;
    }
    .page-switcher{
        position: relative;
        left:45px;
        width:650px;
        text-align: left;
        margin: auto;
    }
</style>
<template>
    <div>
        <Row class="div-center-style">
            <i-col span="24" class="demo-tabs-style1" style="padding:16px;">
                <Tabs type="card" class="pane-center-style">
                    <Tab-pane label="最新问答 ">
                        <div v-for="(question,index) in questions" class="question-card-block" v-if="index<=current_page*10&&index>=current_page*10-10">
                            <Card :bordered="false" class="question-card-style">
                                <div class="demo-card-votes">
                                    <p>{{ question.vote }}</p>
                                    <p>得票</p>
                                </div>
                                <div v-if="question.ans === 0" class="demo-card-ans-zero">
                                    <p>{{ question.ans }}</p>
                                    <p>回答</p>
                                </div>
                                <div v-if="question.ans >= 1" class="demo-card-ans-have">
                                    <p>{{ question.ans }}</p>
                                    <p>回答</p>
                                </div>
                                <div class="demo-card-scan">
                                    <p>{{ question.scan }}</p>
                                    <p>浏览</p>
                                </div>
                                <div class="demo-card-name">
                                    <p>{{ question.author }}</p>
                                </div>
                                <div class="demo-card-title">
                                    <p>{{ question.title }}</p>
                                </div>
                            </Card>
                            <Divider  style="margin-top:1px"/>
                        </div>
                    </Tab-pane>
                    <Tab-pane label="等待回答 ">标签二的内容</Tab-pane>
                    <Tab-pane label="热门问答 ">标签三的内容</Tab-pane>
                </Tabs>
            </i-col>
        </Row>
        <Row>
            <i-col span="24" style="margin:auto">
                <div class="page-switcher">
                    <Page :total="100"
                          @on-change="pIndexChange"
                          :current="current_page"
                          show-elevator />
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default {
        name: "questions",
        data() {
            return {
                current_page: 1,
                questions: [
                    {
                        title: "uni-app的一个小问题",
                        vote: 0,
                        ans: 0,
                        scan: 9,
                        time: 0,
                        author: "charlie",
                        tags: [
                            "数论",
                        ]
                    },
                    {
                        title: "Netty中，如何在每一个UDP连接的pipline中保存SocketAddress对象？",
                        vote: 1,
                        ans: 1,
                        scan: 4,
                        time: 0,
                        author: "chanmmufeng",
                        tags: [
                            "字符串",
                            "图论",
                        ]
                    },
                    {
                        title: "css 如何给每个文字加背景图片呢？",
                        vote: 2,
                        ans: 3,
                        scan: 2,
                        time: 0,
                        author: "最好的陪521yyf",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    },
                    {
                        title: "webpack里style的lang属性怎么用数组",
                        vote: 10,
                        ans: 0,
                        scan: 1,
                        time: 0,
                        author: "Liuyl",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    },
                    {
                        title: "webpack里style的lang属性怎么用数组",
                        vote: 10,
                        ans: 0,
                        scan: 1,
                        time: 0,
                        author: "Liuyl",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    },
                    {
                        title: "webpack里style的lang属性怎么用数组",
                        vote: 10,
                        ans: 0,
                        scan: 1,
                        time: 0,
                        author: "Liuyl",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    },
                    {
                        title: "webpack里style的lang属性怎么用数组",
                        vote: 10,
                        ans: 0,
                        scan: 1,
                        time: 0,
                        author: "Liuyl",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    },
                    {
                        title: "webpack里style的lang属性怎么用数组",
                        vote: 10,
                        ans: 0,
                        scan: 1,
                        time: 0,
                        author: "Liuyl",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    },
                    {
                        title: "webpack里style的lang属性怎么用数组",
                        vote: 10,
                        ans: 0,
                        scan: 1,
                        time: 0,
                        author: "Liuyl",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    },
                    {
                        title: "webpack里style的lang属性怎么用数组",
                        vote: 10,
                        ans: 0,
                        scan: 1,
                        time: 0,
                        author: "Liuyl",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    },
                    {
                        title: "webpack里style的lang属性怎么用数组",
                        vote: 10,
                        ans: 0,
                        scan: 1,
                        time: 0,
                        author: "Liuyl",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    },
                    {
                        title: "webpack里style的lang属性怎么用数组",
                        vote: 10,
                        ans: 0,
                        scan: 1,
                        time: 0,
                        author: "Liuyl",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    },
                    {
                        title: "webpack里style的lang属性怎么用数组",
                        vote: 10,
                        ans: 0,
                        scan: 1,
                        time: 0,
                        author: "Liuyl",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    },
                    {
                        title: "webpack里style的lang属性怎么用数组",
                        vote: 10,
                        ans: 0,
                        scan: 1,
                        time: 0,
                        author: "Liuyl",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    },
                    {
                        title: "webpack里style的lang属性怎么用数组",
                        vote: 10,
                        ans: 0,
                        scan: 1,
                        time: 0,
                        author: "Liuyl",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    },
                    {
                        title: "webpack里style的lang属性怎么用数组",
                        vote: 10,
                        ans: 0,
                        scan: 1,
                        time: 0,
                        author: "Liuyl",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    },
                    {
                        title: "webpack里style的lang属性怎么用数组",
                        vote: 10,
                        ans: 0,
                        scan: 1,
                        time: 0,
                        author: "Liuyl",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    },
                    {
                        title: "webpack里style的lang属性怎么用数组",
                        vote: 10,
                        ans: 0,
                        scan: 1,
                        time: 0,
                        author: "Liuyl",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    },
                    {
                        title: "webpack里style的lang属性怎么用数组",
                        vote: 10,
                        ans: 0,
                        scan: 1,
                        time: 0,
                        author: "Liuyl",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    },
                    {
                        title: "webpack里style的lang属性怎么用数组",
                        vote: 10,
                        ans: 0,
                        scan: 1,
                        time: 0,
                        author: "Liuyl",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    },
                    {
                        title: "webpack里style的lang属性怎么用数组",
                        vote: 10,
                        ans: 0,
                        scan: 1,
                        time: 0,
                        author: "Liuyl",
                        tags: [
                            "数据结构",
                            "图论",
                        ]
                    }
                ]
            }
        },
        methods: {
            pIndexChange(i) {
                this.current_page=i;
            }
        },
        beforeRouteEnter(to, from, next) {
            next();
        },
        beforeRouteLeave(to, from, next) {
            next();
        }
    }
</script>

