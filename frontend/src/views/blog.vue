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
    margin-left: 120px;
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
}
.vote-style{
    width: 105px;
    height: 34px;
    margin-top:10px;
    background: #e8f3ff;
    color: #0084ff;
    padding: 7px;
    border-radius: 4px;
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
.divider-style{
    width: 660px;
    position: relative;
    margin: auto;
    top: 18px;
}
.body-font-style{
    font-size:14px;
    font-weight: 400;
    color: #000;
    margin-top: 16px;
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
}
.input-commit-style{
    position: relative;
    margin-top: 23px;
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
            <Input v-model="text_content"
                   type="textarea"
                   class="input-commit-style"
                   :autosize="{minRows: 5,maxRows: 1000}"
                   placeholder="写回答..." >
            </Input>
            <Button type="primary" class="submit-button">提交</Button>
        </div>
        <div style="height:9px" v-if="load_edit"></div>
        <div class="blog-body-block">
            <p class="answer-count-style">{{ data.total_commit }} 个回答</p>
            <Divider class="divider-style"/>
        </div>
        <div class="blog-body-block" v-for="answer in data.answers">
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
            <div class="vote-style">
                <a class="vote-style">
                    <Icon type="md-thumbs-up" size="16" style="margin-top:-5px" />
                    <span class="vote-font-style">赞同 {{ answer.vote }}</span>
                </a>
            </div>
            <div class="body-commit-block">
                <a class="body-commit-style" @click="show_main_commit()">
                    <Icon type="ios-chatbubbles" size="20" />
                    {{ answer.records }} 条评论
                </a>
            </div>
            <Divider class="divider-style"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blog",
        data() {
            return {
                load_edit: false,
                text_content:'',
                data: {
                    "total_commit": 1324,
                    "title": {
                        "head": "你有哪些秘密一直深埋心底?",
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
                    },
                    answers: [
                        {
                            "records": 43,
                            "body": "大约在我五岁的时候，我妈妈试图喝农药自杀。家里老人重男轻女，奶奶强势，记忆中，小时候大半日子都是在奶奶与妈妈的争吵中度过的，我的妈妈非常伤心难过，爸爸长年不在家，她孤立无援。那天她突然把正在院子里玩耍的我叫到房间里，记得她躺在床上，一直流着眼泪，兴许是不想让我看到她在哭，大热天的她一直盖着被子。她一边哽咽着，一边叮嘱我以后要好好吃饭，好好读书，要自己洗衣服，因为以后她不能帮我洗了，我那个时候年纪小，懵懵懂懂的，但是也多少察觉到不对劲，我问她，那你要去哪里啊？什么时候回来啊",
                            "author": "Charlie",
                            "time": "2018-10-27",
                            "vote": 13,
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
                        },
                        {
                            "records": 43,
                            "body": "大约在我五岁的时候，我妈妈试图喝农药自杀。家里老人重男轻女，奶奶强势，记忆中，小时候大半日子都是在奶奶与妈妈的争吵中度过的，我的妈妈非常伤心难过，爸爸长年不在家，她孤立无援。那天她突然把正在院子里玩耍的我叫到房间里，记得她躺在床上，一直流着眼泪，兴许是不想让我看到她在哭，大热天的她一直盖着被子。她一边哽咽着，一边叮嘱我以后要好好吃饭，好好读书，要自己洗衣服，因为以后她不能帮我洗了，我那个时候年纪小，懵懵懂懂的，但是也多少察觉到不对劲，我问她，那你要去哪里啊？什么时候回来啊",
                            "author": "Charlie",
                            "time": "2018-10-27",
                            "vote": 26,
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
                        }
                    ]
                }
            }
        },
        methods: {
            show_editor() {
                this.load_edit = true;
            },
            show_main_commit() {   //显示主题评论

            }
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
