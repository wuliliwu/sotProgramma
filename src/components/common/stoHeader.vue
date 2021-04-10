<template>
    <div class="sto-header">

<!--        屏幕缩小时的宽度-->

<!--        <div class="sotnone" style="display: none">-->
<!--            <ul>-->
<!--                <li class="active"><a href="#">STO</a></li>-->
<!--                <li><a href="#">浏览器</a></li>-->
<!--                <li><a href="#">社区</a></li>-->
<!--                <li><a href="#">博客</a></li>-->
<!--                <li><a href="#">APP</a></li>-->
<!--                <li><button class="changeBtn">简体中文</button></li>-->
<!--            </ul>-->
<!--        </div>-->

        <div class="sto-left">
            <div class="slogo">
                <img src="~assets/homeImages/slogo.png" alt="">
                <span>STO&3Dimensional</span>
            </div>
        </div>

        <div class="sto-right">
            <ul>
                <slot name="slot1"><li class="active"><a href="#">STO</a></li></slot>
                <slot name="slot2"><li><a href="#">浏览器</a></li></slot>
                <slot name="slot3"><li><a href="#">社区</a></li></slot>
                <slot name="slot4"> <li><a href="#">博客</a></li></slot>
                <slot name="slot5"></slot>
                <slot name="slot6"></slot>
                <slot name="slot7"><li><a href="#">APP</a></li></slot>
                <slot name="slot8">
                    <li>
                        <button class="changeBtn">简体中文 <i class="iconfont iconPolygon1"></i></button>

                    </li>

                </slot>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="less">
        .sto-header {
            font-size: 18px;
            color: #fff;
            width: 100%;
            height: 100px;
            opacity: 1;
            background-color: #191d6b;

            .sto-left {
                float: left;
                letter-spacing: 1px;
                .slogo {
                    margin-top: 32px;
                    margin-left: 29px;
                }
            }
            .sto-left .slogo img {
                width: 38px;
                height: 41px;
                margin-top: -6px;
                vertical-align: middle;
            }
            .sto-right {
                height: 100px;
                float: right;
                ul {
                    text-align: right;
                    display: flex;
                    margin-right: 80px;

                }
                li {
                    line-height: 100px;
                    height: 100px;
                    padding: 0 25px;
                    box-sizing: border-box;
                    &:last-child{
                        margin-top:-5px;
                    }
                }
                ul li a {
                    color: #fff;
                    text-decoration: none;
                }

            }
            .changeBtn {
                width: 100px;
                height: 36px;
                border: 1px solid #fff;
                color: #fff;
                outline: none;
                cursor: pointer;
                margin-bottom: 10px;
                background-color: transparent;
                i {
                    font-size: 12px;
                    margin-left: 5px;
                }
            }
        }

    /*.sotnone {*/
    /*    display: none;*/
    /*    width: 100%;*/
    /*    height: 1000px;*/
    /*    background-color: pink;*/
    /*}*/
    /*@media (max-width: 1199px) {*/
    /*  .sto-header {*/
    /*      font-size: 18px;*/
    /*      height: 100px;*/
    /*      opacity: 1;*/
    /*      color: #fff;*/
    /*      background-color: #191d6b;*/
    /*      .sto-left {*/
    /*          float: left;*/
    /*          .slogo {*/
    /*              margin-top: 41px;*/
    /*              margin-left: 29px;*/
    /*          }*/
    /*      }*/
    /*      .sto-left .slogo img {*/
    /*          width: 38px;*/
    /*          height: 41px;*/
    /*          vertical-align: middle;*/
    /*      }*/
    /*  }*/
    /*    .sotnone {*/

    /*        display: block;*/

    /*    }*/
    /*}*/



</style>