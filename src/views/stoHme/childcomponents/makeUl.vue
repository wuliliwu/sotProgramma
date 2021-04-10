<template>
    <div class="makeul content">
        <div class="makeTitle">
            <span># 一键创世U链世界 #</span>
        </div>
        <div class="makeCnt">
            <div class="itemMsg">
                    <span class="stitle">SOT一键创世</span>
                <div class="description">
                    <span>
                        SOT可自定义模块化的一键创世，并能实现SOT链世界、外部链世界和现实世界的有效有价值的交互。
                    </span>
                </div>
            </div>
            <div class="itemMsg">
                <span class="stitle">SOT一键创世</span>
                <div class="description">
                    <span>
                        SOT可自定义模块化的一键创世，并能实现SOT链世界、外部链世界和现实世界的有效有价值的交互。
                    </span>
                </div>
            </div>
            <div class="itemMsg">
                <span class="stitle">SOT一键创世</span>
                <div class="description">
                    <span>
                        U链世界是一个赋予所有用户探索和体验的去中心化世界，也是Ds的第一个应用场景和一键创世功能的初级测试，在U链世界里，达到一定条件的用户可以实现自由的初级模块化模型创建和规则制定，有助于用户对未来公链主网上线的某些功能有进一步的了解和体验。
                    </span>
                </div>
            </div>
            <div class="itemMsg">
            <span class="stitle">SOT一键创世</span>
            <div class="description">
                    <span>
                        SOT可自定义模块化的一键创世，并能实现SOT链世界、外部链世界和现实世界的有效有价值的交互。
                    </span>
            </div>
        </div>


        </div>
    </div>
</template>

<script>
  export default {
    name: "makeUl"
  }
</script>

<style scoped lang="less">
    .makeul {

        font-family: PingFang SC, PingFang SC-Bold;
        font-size: 18px;
        text-align: center;
        height: 760px;
        border: 1px solid transparent;
        /*&::after {*/
        /*    display:block;*/
        /*    clear:both;*/
        /*    height:0;*/
        /*    content: "";*/
        /*    visibility: hidden;*/
        /*    overflow:hidden;*/
        /*}*/
        .makeTitle {
            margin: 66px 0 23px 0;
            font-size: 36px;
            line-height: 72px;
        }
        .makeCnt {
            text-align: left;
            display: flex;
            justify-content: space-between;
            height: 599px;
            width: 100%;
            background: url("~assets/homeImages/Subtract.png") no-repeat;
            background-size: contain;
            .itemMsg {
                padding-top: 80px;
                .stitle {
                    line-height: 48px;
                    font-size: 24px;
                }

                .description {
                    position: relative;
                    width: 280px;
                    height: 300px;
                    padding: 20px;
                    margin-top: 8px;
                    box-sizing: border-box;
                    /*border: 1px solid #0099ff;*/
                    /*box-shadow: 0px 0px 10px 0px #0099ff;*/
                    border-radius: 11px;
                    &::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        border: 1px solid #0099ff;
                        width: 280px;
                        height: 300px;
                        border-radius: 11px;
                        filter: blur(1px);
                    }
                    span {
                        font-size: 16px;
                        line-height: 24px;
                        font-family: PingFang SC, PingFang SC-Medium;
                        font-weight: 500;
                        color: #666666;
                    }
                }
            }
        }
    }
</style>