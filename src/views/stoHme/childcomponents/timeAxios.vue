<template>
    <div class="timeaxios">
        <div class="timeCnt">
            <div class="axiosTitle">
                <span># 时间轴 #</span>
            </div>
            <div class="specialtime">
                <div class="captital">
                    <span># 2008-第一个</span>
                </div >
                <span class="qukuai">  <p>区块链迷失十二年，局限于中心化实质的区块链技术应用，</p>
                    <p>而并没有建立任何去中心化的区块链世界</p></span>
            </div>
            <div class="specialtime">
                <div class="captital">
                    <span># 2008-第二个</span>
                </div >
                <span class="qukuai">
                <p>区块链迷失十二年，局限于中心化实质的区块链技术应用， </p>
                    <p>而并没有建立任何去中心化的区块链世界</p>
                </span>
            </div>
            <div class="specialtime">
                <div class="captital">
                    <span># 2008-第三个</span>
                </div >
                <span class="qukuai"> 区块链迷失十二年，局限于中心化实质的区块链技术应用</span>
            </div>
            <div class="specialtime">
                <div class="captital">
                    <span># 2008-第四个</span>
                </div >
                <span class="qukuai">
                <p>基于SOT算法理论的体验版：</p><p> 3Dimensional共识世界创世</p>
                </span>
            </div>
            <div class="specialtime">
                <div class="captital">
                    <span># 2008-第五个</span>
                </div >
                <span class="qukuai"> 区块链迷失十二年，局限于中心化实质的区块链技术应用</span>
            </div>
            <div class="specialtime">
                <div class="captital">
                    <span># 2008-第六个</span>
                </div >
                <span class="qukuai">
                    <p>一键创世雏形</p>
                    <p>， U链世界待激活，能量聚集中</p>
                </span>
            </div>
            <div class="specialtime">
                <div class="captital">
                    <span># 2008#第七个</span>
                </div >
                <span class="qukuai">
                <p>伟大的共识不是一天建成的。 SOT算法主网上线</p>
                    <p>， 将实现人类历史上第一个真正意义的去中心化世界，</p>
                    <p>而在此之前，一切都是伪神！</p>
                </span>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: "timeAxios"
  }
</script>

<style scoped lang="less">
    .timeaxios {
        overflow: hidden;
        font-family: PingFang SC, PingFang SC-Bold;
        color: #fff;
        width:100%;
        height: 1500px;
        opacity: 1;
        background: linear-gradient(135deg,#07093c, #191d6b);
        .timeCnt {
            position: relative;
            /*overflow: hidden;*/
            margin: 18px auto 0 auto;
            width: 1130px;
            height: 1257px;
            background: url("~assets/homeImages/timecir.png") no-repeat;
            background-position: 0 50px;
            background-size: contain;
            .axiosTitle {

                text-align: center;
                margin-top: 53px;
                font-size: 36px;
                line-height: 72px;
            }
        }
        .specialtime {
            position: absolute;
            /*width: 364px;*/
            height: 42px;

            .captital {
                font-size: 24px;
                color: #fff;
                margin-left: -10px;
                line-height: 32px;
                margin-bottom: 4px;
            }
            .qukuai {
                font-size: 18px;
            }
            font-size: 14px;
            font-family: PingFang SC, PingFang SC-Medium;
            font-weight: 500;
            text-align: LEFT;
            color: #848afc;
            line-height: 24px;
            &:nth-child(2){
                top: 260px;
                left: 212px;
            }
            &:nth-child(3) {
                top: 504px;
                left: 108px;
                .captital {
                    text-align: right;
                }
            }
            &:nth-child(4) {
                top: 570px;
                left: 540px;

                .captital {
                    text-align: right;
                }
            }
            &:nth-child(5) {
                top: 680px;
                left: 770px;
                p{
                    text-align: right;
                }
                .captital {
                    text-align: right;
                }
            }
            &:nth-child(6) {
                top: 750px;
                left: 230px;
                .captital {
                    text-align: right;
                }
            }
            &:nth-child(7) {
                top: 980px;
                left: 230px;
                .captital {
                    text-align: left;
                }
            }
            &:nth-child(8) {
                top: 1250px;
                left: 330px;
                .captital {
                    text-align: left;
                }
            }
        }
    }


</style>