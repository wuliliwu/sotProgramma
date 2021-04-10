<template>
    <div class="blogcontent">
        <sto-header></sto-header>
        <div class="blogcnt">
            <div class="link">
                <ul>
                    <li><a href="#">SOT & 3Dimensional » </a></li>
                    <li><a href="#"> 博客</a></li>

                </ul>
            </div>
            <div class="capitial">
                <span>
                    标题标题标题标题标题标题标题标题标题标题标题标题标题标题标标题标题标题标题标
                </span>
            </div>
            <div class="sendtime">
                <p>2021-03-25 14:15</p>
            </div>
            <div class="sendcnt">
                <span>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</span>
            </div>
            <div class="prev-next">
                <dl>
                    <dd><a href="#">下一篇：完成第一期流性挖用空投，3月29日开启第二期PoL</a></dd>
                    <dd><a href="#">上一篇：完成第一期流性挖用空投，3月29日开启第二期PoL</a></dd>

                </dl>
            </div>
        </div>
    </div>
</template>

<script>
    import stoHeader from "components/common/stoHeader";
  export default {
    name: "blogContent",
    components: {
      stoHeader
    }
  }
</script>

<style scoped lang="less">
    .blogcontent {
        font-family: PingFang SC, PingFang SC-Bold;
        font-size: 18px;
    }
    .blogcnt {
        overflow: hidden;
        margin: 0 auto;
        width: 750px;
        /*background-color: pink;*/
        .link {
            width: 750px;
            margin-top: 12px;
            ul {
                display: flex;
            }
            ul li {
                a {
                    font-size: 14px;
                    color: #666666;
                }

            }
        }
        .capitial {
            width: 750px;
            height: 70px;
            font-size: 32px;
            margin-top: 36px;
            font-weight: 700;
            overflow:hidden;
            text-overflow:ellipsis;
            display:-webkit-box;
            -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        }
        .sendtime {
            font-size: 14px;
            margin-top: 24px;
            color: #999999;
        }
        .sendcnt {
            margin-top: 43px;
            margin-bottom: 40px;
            width: 750px;
            height: 135px;
            opacity: 1;
            font-size: 16px;
            font-family: Roboto, Roboto-Regular;
            font-weight: 400;
            color: #666666;
            line-height: 32px;

        }
        .prev-next {
            padding-top: 20px;
            border-top: 1px solid #efefef;
            a {
                font-size: 14px;
                line-height: 32px;

                }
            dd:first-child a {
                color: #191D6B;
            }
            dd:last-child a {
                color: #999999;
            }
        }
    }
</style>