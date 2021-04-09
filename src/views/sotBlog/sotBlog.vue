<template>
    <div class="blog">
        <sto-header></sto-header>
        <div class="blog-cnt content">
            <div class="title">
                <span>
                    博客/Blog
                </span>
            </div>
            <div class="blog-card">
                <div class="blog-item">
                    <div class="itemImg">
                        <img src="~assets/blogImages/topimg.png" alt="">
                    </div>
                    <div class="item-tit">
                        <span>
                            标题标题标题标题标题标题标题标题标题标题标题标题
                        </span>
                    </div>
                    <div class="item-cnt">
                        <span>
                            内容内容内容内容内容内容内容内容内容内容内容内容
                        </span>
                    </div>

                    <p class="item-time">2021-03-11 12:12</p>
                </div>
                <div class="blog-item">
                    <div class="itemImg">
                        <img src="~assets/blogImages/topimg.png" alt="">
                    </div>
                    <div class="item-tit">
                        <span>
                            标题标题标题标题标题标题标题标题标题标题标题标题
                        </span>
                    </div>
                    <div class="item-cnt">
                        <span>
                            内容内容内容内容内容内容内容内容内容内容内容内容
                        </span>
                    </div>

                    <p class="item-time">2021-03-11 12:12</p>
                </div>
                <div class="blog-item">
                    <div class="itemImg">
                        <img src="~assets/blogImages/topimg.png" alt="">
                    </div>
                    <div class="item-tit">
                        <span>
                            标题标题标题标题标题标题标题标题标题标题标题标题
                        </span>
                    </div>
                    <div class="item-cnt">
                        <span>
                            内容内容内容内容内容内容内容内容内容内容内容内容
                        </span>
                    </div>

                    <p class="item-time">2021-03-11 12:12</p>
                </div>
                <div class="blog-item">
                    <div class="itemImg">
                        <img src="~assets/blogImages/topimg.png" alt="">
                    </div>
                    <div class="item-tit">
                        <span>
                            标题标题标题标题标题标题标题标题标题标题标题标题
                        </span>
                    </div>
                    <div class="item-cnt">
                        <span>
                            内容内容内容内容内容内容内容内容内容内容内容内容
                        </span>
                    </div>

                    <p class="item-time">2021-03-11 12:12</p>
                </div>
                <div class="blog-item">
                    <div class="itemImg">
                        <img src="~assets/blogImages/topimg.png" alt="">
                    </div>
                    <div class="item-tit">
                        <span>
                            标题标题标题标题标题标题标题标题标题标题标题标题
                        </span>
                    </div>
                    <div class="item-cnt">
                        <span>
                            内容内容内容内容内容内容内容内容内容内容内容内容
                        </span>
                    </div>

                    <p class="item-time">2021-03-11 12:12</p>
                </div>
                <div class="blog-item">
                    <div class="itemImg">
                        <img src="~assets/blogImages/topimg.png" alt="">
                    </div>
                    <div class="item-tit">
                        <span>
                            标题标题标题标题标题标题标题标题标题标题标题标题
                        </span>
                    </div>
                    <div class="item-cnt">
                        <span>
                            内容内容内容内容内容内容内容内容内容内容内容内容
                        </span>
                    </div>

                    <p class="item-time">2021-03-11 12:12</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import stoHeader from "components/common/stoHeader";
  export default {
    name: "sotBlog",
    components: {
      stoHeader
    }
  }
</script>

<style scoped lang="less">
    .blog-cnt {
        width: 900px;
        margin-top: 50px;
        font-size: 18px;

        .title {
            font-size: 28px;
        }
        .blog-card {
            justify-content: flex-start;
            flex-wrap: wrap;
            display: flex;
            margin-top: 24px;
            .blog-item{
                margin-right: 30px;
                margin-bottom: 20px;
                &:nth-child(3n){
                    margin-right: 0;
                }
            }
            .itemImg {
                width: 240px;
                height: 130px;
                opacity: 1;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .item-tit {
                margin: 12px 0;

            }
            .item-cnt {
                margin: 12px 0; color: #666666;
            }
            .item-time {
                margin-top: 60px;
                font-size: 12px;
                color: #999;
            }
        }
        .blog-item {
            width: 280px;
            height: 390px;
            opacity: 1;
            padding: 20px;
            box-sizing: border-box;
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.06);
        }
    }
</style>