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
        width:819px;
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
        margin-left: -14px;
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
        border-radius:3px;
        border:1px solid #cde2dd;
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
        margin-left: 175px;
        margin-top: -43px;
        text-align: left;
        height:12px;
        font-size:14px;
        color: #a4a4a4;
    }
    .demo-card-title{
        margin-left: 175px;
        margin-top: 8px;
        text-align: left;
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
    .href-style {
        font-size: 16px;
        font-weight: 600;
        color:#333333;
        width: 600px;
    }
    .super-admin{
        margin-top: -50px;
    }
    .href-style:hover{
        color: #027f66;
        text-decoration:underline;
    }
    .create-question-style{
        margin: auto auto;
        position: relative;
        left: -5px;
        top: 0px;
    }
</style>
<template>
    <div>
        <Row class="div-center-style">
            <i-col span="24" class="demo-tabs-style1" style="padding:16px;">
                <Tabs type="card" class="pane-center-style" :animated="false" v-model="active_pane">
                    <i-button class="create-question-style" type="success" slot="extra" @click="handle_ask()">+ 提问题</i-button>
                    <Modal v-model="show_ask">
                        <Input type="text" placeholder="写问题..." v-model="text_title"></Input>
                        <Button type="primary" @click="handle_submit">提交</Button>
                        <Input v-model="text_content"
                               type="textarea"
                               class="input-commit-style"
                               :autosize="{minRows: 5,maxRows: 1000}"
                               style="margin-top:25px;"
                               placeholder="写回答..." >
                        </Input>
                    </Modal>
                    <Tab-pane label="最新问答 " name="1">
                        <div v-for="question in questions" class="question-card-block">
                            <Card :bordered="false" class="question-card-style">
                                <div class="demo-card-votes">
                                    <p>{{ question.vote }}</p>
                                    <p>得票</p>
                                </div>
                                <div v-if="question.ans === 0" class="demo-card-ans-zero">
                                    <p>{{ question.ans }}</p>
                                    <p style="margin-top:-4px">回答</p>
                                </div>
                                <div v-if="question.ans >= 1" class="demo-card-ans-have">
                                    <p>{{ question.ans }}</p>
                                    <p style="margin-top:-4px">回答</p>
                                </div>
                                <div class="demo-card-scan">
                                    <p>{{ question.scan }}</p>
                                    <p style="margin-top:-4px">浏览</p>
                                </div>
                                <div class="demo-card-name">
                                    <span>{{ question.author }}</span>
                                    <a v-if="$parent.is_admin === true">删除</a>
                                </div>
                                <div class="demo-card-title">
                                    <a @click="nextPage(question.id)" class="href-style">{{ question.title }}</a>
                                </div>
                            </Card>
                            <Divider  style="margin-top:1px; width:817px; left: -13px;"/>
                        </div>
                    </Tab-pane>

                    <Tab-pane label="等待回答 " name="2">
                        <div v-for="question in questions" class="question-card-block">
                            <Card :bordered="false" class="question-card-style">
                                <div class="demo-card-votes">
                                    <p>{{ question.vote }}</p>
                                    <p>得票</p>
                                </div>
                                <div v-if="question.ans === 0" class="demo-card-ans-zero">
                                    <p>{{ question.ans }}</p>
                                    <p style="margin-top:-4px">回答</p>
                                </div>
                                <div v-if="question.ans >= 1" class="demo-card-ans-have">
                                    <p>{{ question.ans }}</p>
                                    <p style="margin-top:-4px">回答</p>
                                </div>
                                <div class="demo-card-scan">
                                    <p>{{ question.scan }}</p>
                                    <p style="margin-top:-4px">浏览</p>
                                </div>
                                <div class="demo-card-name">
                                    <span>{{ question.author }}</span>
                                    <a v-if="$parent.is_admin === true">删除</a>
                                </div>
                                <div class="demo-card-title">
                                    <a @click="nextPage(question.id)" class="href-style">{{ question.title }}</a>
                                </div>
                            </Card>
                            <Divider  style="margin-top:1px; width:817px; left: -13px;"/>
                        </div>
                    </Tab-pane>

                    <Tab-pane label="热门问答 " name="3">
                        <div v-for="question in questions" class="question-card-block">
                            <Card :bordered="false" class="question-card-style">
                                <div class="demo-card-votes">
                                    <p>{{ question.vote }}</p>
                                    <p>得票</p>
                                </div>
                                <div v-if="question.ans === 0" class="demo-card-ans-zero">
                                    <p>{{ question.ans }}</p>
                                    <p style="margin-top:-4px">回答</p>
                                </div>
                                <div v-if="question.ans >= 1" class="demo-card-ans-have">
                                    <p>{{ question.ans }}</p>
                                    <p style="margin-top:-4px">回答</p>
                                </div>
                                <div class="demo-card-scan">
                                    <p>{{ question.scan }}</p>
                                    <p style="margin-top:-4px">浏览</p>
                                </div>
                                <div class="demo-card-name">
                                    <span>{{ question.author }}</span>
                                    <a v-if="$parent.is_admin === true">删除</a>
                                </div>
                                <div class="demo-card-title">
                                    <a @click="nextPage(question.id)" class="href-style">{{ question.title }}</a>
                                </div>
                            </Card>
                            <Divider  style="margin-top:1px; width:817px; left: -13px;"/>
                        </div>
                    </Tab-pane>
                </Tabs>
            </i-col>
        </Row>
        <Row>
            <i-col span="24" style="margin:auto">
                <div class="page-switcher">
                    <Page :total="total_record"
                          :page-size="unit"
                          @on-change="pIndexChange"
                          :current="current_page"
                          show-elevator />
                </div>
            </i-col>
        </Row>
        <div style="height:20px"></div>
    </div>
</template>
<script>
    import getLastDate from './time.js'
    export default {
        name: "questions",
        data() {
            return {
                current_page: 1,
                total_record: 0,
                questions: '',
                unit: 12,
                show_ask: false,
                text_content: '',
                text_title: '',
                active_pane: '1',
            }
        },
        methods: {
            nextPage(id)
            {
                this.$router.push({path: '/questions/' + id })
            },
            handle_submit() {
                var sendData = {'body': this.text_content, 'head': this.text_title,  'author': 'Charlie'};
                var sendJson = JSON.stringify(sendData);
                let _this = this;
                this.$http.request({
                    method: 'post',
                    url: _this.$url + 'questions/' + 'create/',
                    data: sendJson,
                }).then(response=> {
                    var data = JSON.parse(JSON.stringify(response.data, null, 4));
                    this.$router.push({path: '/questions/' + data.id })
                }).catch(function(response) {
                    console.log(response)
                })
            },
            pIndexChange(i) {
                this.current_page = i;
                this.request_data(this.unit, 1, i);
            },
            handle_ask() {
                this.show_ask = true;
            },
            request_data(unit, mode, page)
            {
                var sendData = {'unit': unit, 'mode': mode, 'page': page};
                var sendJson = JSON.stringify(sendData);
                let _this = this;
                this.$http.request({
                    method: 'post',
                    url: _this.$url + 'questions/' + 'index/',
                    data: sendJson,
                }).then(response=> {
                    var data = JSON.parse(JSON.stringify(response.data, null, 4));
                    this.questions = data.list;
                    this.current_page = page;
                    this.total_record = data.records;
                }).catch(function(response) {
                    console.log(response)
                })
            },
            time_from_now(timestamp) {
                return getFormatTime(timestamp);
            }
        },
        mounted() {
            this.request_data(this.unit, 1, 1);
        },
        watch: {
            active_pane() {
                this.request_data(this.unit, eval(this.active_pane), 1);
            }
        }
    }
</script>

