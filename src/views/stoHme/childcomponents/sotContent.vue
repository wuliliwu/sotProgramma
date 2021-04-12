<template>
    <div class="my-cnt">
        <div class="content sot-content">
<!--            左边-->
            <div class="circle1">
            </div>
<!--            右边-->
            <div class="circle2">
            </div>
            <div class="topcnt">
                <div class="Loriginitem">
                    <span class="ori">SOT起源</span>
                    <div class="sot-origin">
                        <div class="descbox">
                    <span>
                        <p>地球区块链十二年，仍然局限于中心化实质的区块链技术应用时代，</p>
                        <p>并没有形成真正意义的区块链世界。SOT旨在提供一种解决POW消耗能源和计算力，</p>
                        <p>和POW、POS、DPOS等各种垄断问题，以及VRF可验证随机函数伪随机问题的去矿机化节能高效、</p>
                        <p> 去垄断化公平透明、理论上可无限扩展的分布式解决方案</p>

                    </span>

                        </div>
                        <div class="c1side">
                            <img src="~assets/homeImages/c1side.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="Roriginitem" style="margin-top: 200px">
                    <span class="ori">3Dimensional体验版</span>
                    <div class="sot-origin">
                        <div class="c1side">
                        <img src="~assets/homeImages/comp1.png" alt="">
                    </div>
                        <div class="descbox">

                    <span>
                        <p>3Dimensional 是基于 SOT 算法自定义的区块链世界，有助于用户在体验中养成零知识共识，</p>
                        <p> 并获得SOT公链主网上线前的布道奖励，公链主网上线后， Ds将1:1映射主网。</p>

                    </span>

                        </div>

                    </div>
                </div>
                <div class="Loriginitem" style="margin-top: 200px">
                    <span class="ori">3Dimensional时空裂变</span>
                    <div class="sot-origin">
                        <div class="descbox">
                    <span>
                        <p>3Dimensional赋予了用户自主治理和动态参与影响世界发展的能力，</p>
                        <p> 这是一个不可思议的用户影响世界，世界感知用户的多维度时空裂变的世界。</p>

                    </span>

                        </div>
                        <div class="c1side">
                            <img src="~assets/homeImages/lie.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="Roriginitem" style="margin-top: 200px">
                    <span class="ori">未来展望</span>
                    <div class="sot-origin">

                            <div class="c1side">
                                <img src="~assets/homeImages/zw.png" alt="">
                            </div>

                            <div class="descbox">
                            <span>
                                <p> SOT的未来是可自定义模块化的一键创世，并实现链上世界与现实世界有效有价值交互。</p>
                      <p>    链即现实，现实即链，相辅相成，互为转化。</p>

                    </span>

                        </div>

                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
  export default {
    name: "sotContent"
  }
</script>

<style scoped lang="less">
    .my-cnt {

        overflow: hidden;
        position: relative;
        font-size: 18px;
        height: 2274px;
        .circle1 {
            position: absolute;
            z-index: -9;
            top: 53px;
            left: 0;
            width: 1452px;
            height: 1861px;
            opacity: 1;
            background: url("~assets/homeImages/circle1.png") no-repeat;
            background-size: contain;
        }
        .circle2 {
            position: absolute;
            z-index: -9;
            top: 207px;
            right: 0;
            width: 1178px;
            height: 2088px;
            background: url("~assets/homeImages/circle3.png") no-repeat;
            background-size: cover;
        }


        .Loriginitem {
            float: left;
            .descbox::after{
                position: absolute;
                top: 30px;
                left: 22px;
                content:'';
                width: 12px;
                height: 12px;
                background: #0099ff;
                border-radius: 50%;
            }
            .ori {
                text-align: left;
            }
        }
        .Roriginitem {
            float: right;
            .descbox{
                text-align: right;
            }
            .descbox::after{
                position: absolute;
                top: 30px;
                right: 22px;
                content:'';

                width: 12px;
                height: 12px;
                background: red;
                border-radius: 50%;

            }
            .ori {
                text-align: right;

            }
        }
        .topcnt {
            background-color: pink;

        }

        .ori {
            display: block;
            text-align: right;
            font-size: 28px;
            margin-top: 154px;
            margin-left: 7px;

          }
        .sot-origin {
            display: flex;
            .descbox {
                position: relative;
                margin-top: 10px;
                padding: 20px 53px 48px 54px;
                width: 920px;
                opacity: 1;
                box-sizing: border-box;
                background: rgba(221,231,255,0.20);
                border: 1px solid #0099ff;
                border-radius: 11px;
                &::after {

                }

                span {
                    font-size: 18px;

                    line-height: 36px;
                }

            }
            .circle2 {
                position: absolute;
                  width: 175px;
                  height: 175px;
                border: 1px solid #000;
                background: url("~assets/homeImages/circle1.png") no-repeat;

              }
        }
    }
</style>