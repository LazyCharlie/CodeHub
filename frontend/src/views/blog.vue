<style scoped>
.blog-title-block{
    background: #ffffff;
    padding-top: 20px;
}
.blog-title-style{
    width:660px;
    position: relative;
    text-align: left;
    margin: auto;
    left: -150px;
}
.title-head-style{
    font-size:19px;
    font-weight:800;
    color: #000;
}
.title-body-style{
    font-size:14px;
    font-weight: 400;
    color: #000;
    margin-top: 8px;
}
.list-menu-style{
    width: 660px;
    height: 65px;
    margin: auto;
    padding-top: 14px;
}
.blog-create-answer-btn{
    font-size: 15px;
    position: relative;
    width: 95px;
    height: 36px;
    left: -150px;
}
.commit-style{
    color: #858fa6;
    font-size: 15px;
    width: 95px;
    height: 36px;
    margin-left: -130px;
}
.body-commit-style{
    color: #858fa6;
    font-size: 15px;
    position: relative;
    height: 36px;
    margin-top: -8px;
}
.commit-style:hover{
    color: #76839b;
}
.blog-body-block{
    background: #ffffff;
    width: 694px;
    padding: 20px;
    margin: auto;
    position: relative;
    left: -150px;
}
.user-name-style{
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    position: relative;
    margin-left: 40px;
    margin-top: -26px;
    color: #000000;
}
.blog-body-style {
    margin:auto;

}
.submit-button{
    position: relative;
    right: -602px;
    margin-top: 10px;
    top: 7px;
}
.answer-count-style{
    font-size: 16px;
    font-weight: 700;
    text-align: left;
    color: #000000;
}
.divider-style {
    width: 660px;
    position: relative;
    margin-top: -20px;
    left: -3px;
    float: left;
}
.body-font-style{
    font-size:14px;
    font-weight: 400;
    color: #000;
    margin-top: 16px;
}
.vote-style{
    width: 105px;
    height: 34px;
    margin-top:10px;
    background: #e8f3ff;
    padding: 7px;
    border-radius: 4px;
    z-index: 500;
    user-select:none;
}
.vote-style:hover{
    background: #dfedff;
    cursor:pointer;
    z-index: 500;
}
.vote-style:visited{
    background: #0083ff;
    z-index:500;
}
.reply-style{
    font-size:14px;
    font-weight: 400;
    color: #000;
    margin-top: 10px;
}
.vote-font-style{
    font-size: 14px;
}
.foot-font-style{
    color: #8590a6;
    font-size: 14px;
    margin-top: 5px;
}
.body-commit-block{
    margin-top: -28px;
    position: relative;
    margin-left: 120px;
    user-select:none;
}
.vote-link-style{
    z-index: 400;
    margin-left: 5px;
}
.reply-user-name-style{
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    position: relative;
    margin-top: -22px;
    margin-left: 5px;
}
.reply-body-font-style{
    font-size:14px;
    font-weight: 400;
    color: #000;
    margin-top: 6px;
    margin-left: 28px;
}
.reply-body-time-style{
    color: #8590a6;
    font-size:14px;
    font-weight: 600;
    text-align: right;
}
.reply-head-style{
    padding-top:15px;
}
.commit-card-style
{
    margin-top: 15px;
}
.reply-vote-style{
    color: #858fa6;
    width:100%;
}
.reply-vote-style:hover{
    color: #175199;
    cursor: pointer;
}
.reply-menu-style{
    height: 20px;
    margin-left: 30px;
    margin-top:7px;
    user-select:none;
}
.reply-reply-style{
    margin-left: 18px;
    margin-top: -24px;
}
.reply-menu-style .reply-reply-style{
    color: #ffffff;
}
.reply-menu-style:hover .reply-reply-style{
    color: #858fa6;
}
.reply-menu-style:hover .reply-reply-style:hover{
    color: #175199;
}
.reply-after-click{
    color: #858fa6;
    margin-left: 18px;
    margin-top: -21px;
}
.reply-in-reply{
    width: 595px;
    margin-left: 28px;
    padding: 0;
}
.reply-after-click:hover{
    color: #175199;
}
.noans-background-card{
    background: url("../assets/back_noans.png");
    width: 694px;
    height: 240px;
    margin: auto;
    left: -150px;
    text-align: center;
    line-height: 340px;
}
.card-font-style{
    color: #8790a4;
}
.card-link-style:hover{
    color: #2d79de;
}
.card-link-style{
    color: #265294;
}
.input-commit-style{
}
</style>

<template>
    <div class="blog-body-style">
        <div class="blog-title-block">
            <div class="blog-title-style">
                <p class="title-head-style">{{ data.title.head }}</p>
                <p class="title-body-style">{{ data.title.body }}</p>
            </div>
            <div class="list-menu-style">
                <Button type="primary"  class="blog-create-answer-btn" @click="show_editor" ghost>
                    <Icon type="ios-create" size="20" style="margin-left: -6px; margin-top:-4px;"/>
                    写回答
                </Button>
                <a class="commit-style" @click="show_main_commit()">
                    <Icon type="ios-chatbubbles" size="20" />
                    {{ data.title.records }} 条评论
                </a>
            </div>
        </div>
        <div style="height:9px;"></div>
        <div class="blog-body-block" v-if="load_edit">
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            <p class="user-name-style">charlie</p>
            <Input v-model="text_content_main"
                   type="textarea"
                   class="input-commit-style"
                   :autosize="{minRows: 5,maxRows: 1000}"
                   style="margin-top:25px;"
                   placeholder="写回答..." >
            </Input>
            <Button type="primary" class="submit-button" @click="handle_submit(text_content_main, -1, -1)">提交</Button>
        </div>
        <div style="height:9px" v-if="load_edit"></div>
        <div class="blog-body-block" v-if="data.records">
            <p class="answer-count-style">{{ data.records }} 个回答</p>
        </div>
        <Card v-if="!data.records" class="noans-background-card" shadow>
            <Row>
                <span class="card-font-style">暂时还没有回答，开始</span>
                <a class="card-link-style" @click="show_editor">写第一个回答</a>
            </Row>
        </Card>
        <div class="blog-body-block" v-for="(answer, index) in data.answers">
            <Divider class="divider-style"/>
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" style="margin-top:-5px;"/>
            <p class="user-name-style">
                {{ answer.author }}
            </p>
            <p class="body-font-style">
                {{ answer.body }}
            </p>
            <p class="foot-font-style">
                发布于 {{ answer.time }}
            </p>

            <div style="display: inline">
                <div class="vote-style" @click="answer.voted=!answer.voted; answer.vote+=answer.voted*2-1;" :style="{ background: answer.voted? '#0084ff': '', color:answer.voted? '#ffffff': ''}">
                    <a class="vote-link-style" :style="{ color:answer.voted? '#ffffff': '#0084ff'}">
                        <Icon type="md-thumbs-up" size="16" style="margin-top:-5px" />
                        <span class="vote-font-style" v-show="!answer.voted" >赞同 {{ answer.vote }}</span>
                        <span class="vote-font-style" v-show="answer.voted">已赞同 {{ answer.vote }}</span>
                    </a>
                </div>
                <div class="body-commit-block">
                    <a class="body-commit-style" @click="handle_commit(index)">
                        <Icon type="ios-chatbubbles" size="20" />
                        <span v-if="!answer.show_commit&&!answer.records">添加评论</span>
                        <span v-if="!answer.show_commit&&answer.records">{{ answer.records }} 条评论</span>
                        <span v-if="answer.show_commit">收起评论</span>
                    </a>
                </div>
                <card v-if="answer.show_commit" class="commit-card-style">
                    <span class="answer-count-style" v-if="answer.records">{{ answer.records }} 条评论</span>
                    <span class="answer-count-style" v-if="!answer.records">还没有评论</span>
                    <div style="height:12px;"></div>
                    <div style="height:9px;background:#f6f6f6; width: 652px; margin-left: -16px;"></div>



                    <div v-for="reply in answer.reply" >
                        <Row class="reply-head-style">
                            <i-col span="12">
                                <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"size="small"/>
                                <p class="reply-user-name-style" style="display:inline-block">{{ reply.author }}</p>
                            </i-col>
                            <i-col span="12" style="text-align:right">
                                <p class="reply-body-time-style" style="display:inline-block">{{ reply.time }}</p>
                            </i-col>
                        </Row>
                        <p class="reply-body-font-style">{{ reply.body }}</p>
                        <Row class="reply-menu-style">
                            <span class="reply-vote-style" @click="reply.voted=!reply.voted; reply.vote+=reply.voted*2-1;" :style="{ color: reply.voted? '#0084ff': ''}">
                                <Icon type="md-thumbs-up" size="18"  style="margin-top:-5px;"/>
                                {{ reply.vote }}
                            </span>
                            <span class="reply-reply-style" @click="reply.is_reply=true" v-if="!reply.is_reply">
                                <Icon type="ios-undo" size="18"/>
                                回复
                            </span>
                            <span class="reply-after-click" @click="reply.is_reply=false" v-if="reply.is_reply">
                                <Icon type="ios-undo" size="18"/>
                                取消回复
                            </span>
                        </Row>
                        <Row>
                            <Input :placeholder="'回复' + reply.author" v-if="reply.is_reply" v-model='reply.reply_content' style="margin-left:28px;width: 520px; margin-top:10px"></Input>
                            <Button type="primary" v-if="reply.is_reply" style="margin-left: 10px;" @click="handle_submit(reply.reply_content, answer.floor, reply.commit_id, reply.author)">发布</Button>
                        </Row>

                        <div v-for="commit in reply.reply" class="reply-in-reply">
                            <Row class="reply-head-style">
                                <i-col span="12">
                                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"size="small"/>
                                    <p class="reply-user-name-style" style="display:inline-block">{{ commit.author }} </p>
                                    <p style="display: inline-block; color: #8590a6;"> 回复 </p>
                                    <p class="reply-user-name-style" style="display: inline-block;">{{ commit.reply_to }}</p>
                                </i-col>
                                <i-col span="12" style="text-align:right">
                                    <p class="reply-body-time-style" style="display:inline-block">{{ commit.time }}</p>
                                </i-col>
                            </Row>
                            <p class="reply-body-font-style">{{ commit.body }}</p>
                            <Row class="reply-menu-style">
                                <span class="reply-vote-style" @click="commit.voted=!commit.voted; commit.vote+=commit.voted*2-1;" :style="{ color: commit.voted? '#0084ff': ''}">
                                    <Icon type="md-thumbs-up" size="18"  style="margin-top:-5px;"/>
                                    {{ commit.vote }}
                                </span>
                                    <span class="reply-reply-style" @click="commit.is_reply=true" v-if="!commit.is_reply">
                                    <Icon type="ios-undo" size="18"/>
                                    回复
                                </span>
                                <span class="reply-after-click" @click="commit.is_reply=false" v-if="commit.is_reply">
                                    <Icon type="ios-undo" size="18"/>
                                    取消回复
                                </span>
                            </Row>
                            <Row v-if="commit.is_reply" style="margin-top: 5px;">
                                <Input :placeholder="'回复' + commit.author"  v-model="commit.reply_content" style="margin-left:28px; width:491px;"></Input>
                                <Button type="primary" style="margin-left: 10px;" @click="handle_submit(commit.reply_content,answer.floor, reply.commit_id, commit.author) ">发布</Button>
                            </Row>
                        </div>
                    </div>



                    <Row>
                        <Input placeholder="写下你的评论..." style="margin-top: 13px; width:550px;" v-model="text_content"></Input>
                        <Button type="primary" style="margin-left: 10px; margin-top: 12px;" @click="handle_submit(text_content, answer.floor, -1)">发布</Button>
                    </Row>
                </card>
            </div>
        </div>
    </div>
</template>

<script>
    import {getTime} from './time.js'
    export default {
        name: "blog",
        data() {
            return {
                load_edit: false,
                text_content_main: '',
                text_content:'',     //记录评论模块中写入的文本
                data: {
                    "commit": '',
                    "records": 1324,
                    "title": {
                        /*"head": "你有哪些秘密一直深埋心底?",
                        "body": "你要对未来满怀期待，对生活心存善意，但是你也要时刻做好最坏的准备。吃得苦中苦，方为人上人，我不想什么人上人，可这时间疾苦，照样谁都没放过。活下去，笑出来。",
                        "records": 15,
                        "reply": [
                            {
                                "author": "立柯然",
                                "is_reply": false,
                                "reply_to": "",
                                "body": "编故事者无论多烂都有人信",
                                "time": "6个月前",
                                "vote": 28,
                            },
                            {
                                "author": "立柯然",
                                "is_reply": true,
                                "reply_to": "立柯然",
                                "body": "或许是很多人没法分清现实与幻觉了吧？毕竟现实也是通过感觉来获知的",
                                "time": "6个月前",
                                "vote": 17,
                            },
                        ]
                        */
                    },
                    answers: []
                    /*
                        {
                            "records": 43,
                            "body": "大约在我五岁的时候，我妈妈试图喝农药自杀。家里老人重男轻女，奶奶强势，记忆中，小时候大半日子都是在奶奶与妈妈的争吵中度过的，我的妈妈非常伤心难过，爸爸长年不在家，她孤立无援。那天她突然把正在院子里玩耍的我叫到房间里，记得她躺在床上，一直流着眼泪，兴许是不想让我看到她在哭，大热天的她一直盖着被子。她一边哽咽着，一边叮嘱我以后要好好吃饭，好好读书，要自己洗衣服，因为以后她不能帮我洗了，我那个时候年纪小，懵懵懂懂的，但是也多少察觉到不对劲，我问她，那你要去哪里啊？什么时候回来啊",
                            "author": "Charlie",
                            "time": "2018-10-27",
                            "vote": 13,
                            "voted": false,
                            "show_commit": false,
                            "reply": [
                                {
                                    "author": "立柯然",
                                    "body": "编故事者无论多烂都有人信",
                                    "time": "6个月前",
                                    "vote": 238,
                                    "voted": false,
                                    "is_reply": false,
                                    "reply": [
                                        {
                                            "author": "Codeforces",
                                            "reply_to": "AtCoders",
                                            "time": "3天前",
                                            "body": "A true master, is an eternal student",
                                            "vote": 128,
                                            "voted": false,
                                            "is_reply": false,
                                        },
                                        {
                                            "author": "AtCoder",
                                            "reply_to": "Codeforces",
                                            "time": "3天前",
                                            "body": "Many feos, one Strike",
                                            "vote": 212,
                                            "voted": false,
                                            "is_reply": false,
                                        },
                                    ]
                                },
                                {
                                    "author": "立柯然",
                                    "body": "或许是很多人没法分清现实与幻觉了吧？毕竟现实也是通过感觉来获知的",
                                    "time": "6个月前",
                                    "vote": 17,
                                    "voted": false,
                                    "is_reply": false,
                                },
                            ]
                        },
                        {
                            "records": 43,
                            "body": "大约在我五岁的时候，我妈妈试图喝农药自杀。家里老人重男轻女，奶奶强势，记忆中，小时候大半日子都是在奶奶与妈妈的争吵中度过的，我的妈妈非常伤心难过，爸爸长年不在家，她孤立无援。那天她突然把正在院子里玩耍的我叫到房间里，记得她躺在床上，一直流着眼泪，兴许是不想让我看到她在哭，大热天的她一直盖着被子。她一边哽咽着，一边叮嘱我以后要好好吃饭，好好读书，要自己洗衣服，因为以后她不能帮我洗了，我那个时候年纪小，懵懵懂懂的，但是也多少察觉到不对劲，我问她，那你要去哪里啊？什么时候回来啊",
                            "author": "Charlie",
                            "time": "2018-10-27",
                            "vote": 26,
                            "voted": false,
                            "show_commit": false,
                            "reply": [
                                {
                                    "author": "立柯然",
                                    "is_reply": false,
                                    "reply_to": "",
                                    "body": "编故事者无论多烂都有人信",
                                    "time": "6个月前",
                                    "vote": 28,
                                    "voted": false,
                                },
                                {
                                    "author": "立柯然",
                                    "is_reply": true,
                                    "reply_to": "立柯然",
                                    "body": "或许是很多人没法分清现实与幻觉了吧？毕竟现实也是通过感觉来获知的",
                                    "time": "6个月前",
                                    "vote": 17,
                                    "voted": false,
                                },
                            ]
                        }
                    ]
                    */
                }
            }
        },
        methods: {
            show_editor() {
                this.load_edit = true;
            },
            handle_submit(str, floor, commit, to='') {
                var sendData = {'floor': floor, 'commit': commit,'id': this.$route.params.id, 'body': str, 'author': this.$parent.userName, 'to': to};
                var sendJson = JSON.stringify(sendData);
                let _this = this;
                this.$http.request({
                    method: 'post',
                    url: _this.$url + 'questions/' + 'commit/',
                    data: sendJson,
                }).then(response => {
                    _this.$router.go(0)
                }).catch(function(response) {
                    console.log(response)
                })
            },
            show_main_commit() {   //显示主题评论

            },
            handle_commit(index) {
                this.data.answers[index].show_commit ^= 1;
            },
            page_init()
            {
                let _this = this;
                this.$http.request({
                    method: 'get',
                    url: _this.$url + 'questions/' + this.$route.params.id + '/',
                }).then(response=> {
                    var data = JSON.parse(JSON.stringify(response.data, null, 4));
                    if (data.state==404) {
                        this.$router.push({path: '/questions'})
                    }
                    this.data.title = data.title;
                    this.data.answers = data.answers;
                    this.data.records = data.records;
                    console.log(this.data.answers.length)
                    for (var i = 0; i < this.data.answers.length; ++i) {
                        console.log(this.data.answers[i].reply.length);
                        for (var j = 0; j < this.data.answers[i].reply.length; ++j) {
                            console.log(this.data.answers[i].reply[j].reply.length);
                            for (var k = 0; k < this.data.answers[i].reply[j].reply.length; ++k) {
                                console.log(getTime(this.data.answers[i].reply[j].reply[k].time*1000));
                                this.data.answers[i].reply[j].reply[k].time = getTime(this.data.answers[i].reply[j].reply[k].time*1000);
                            }
                            this.data.answers[i].reply[j].time = getTime(this.data.answers[i].reply[j].time*1000);
                        }
                    }
                }).catch(function(response) {
                    console.log(response)
                })
            },
            getTime(time) {
                return getFormatTime(time)
            }
        },
        mounted() {
            this.page_init();
        },
        beforeRouteEnter(to, from, next) {
            window.document.body.style.backgroundColor = '#f6f6f6';
            next();
        },
        beforeRouteLeave(to, from, next) {
            window.document.body.style.backgroundColor = '';
            next();
        },
    }
</script>
