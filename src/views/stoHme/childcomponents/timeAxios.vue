<template>
    <div class="timeaxios">
        <div class="axiosTitle">
            <span># 时间轴 #</span>
        </div>
        <div class="timeCnt">
            <div class="specialtime" v-for="item in timedata">
                <div class="captital">
                    <span>{{item.year}}</span>
                </div >
                <span class="qukuai" v-for="(item1,index1) in item.desc">
                    <p>{{item1}}</p>
                </span>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: "timeAxios",
    data() {
      return {
        timedata:[
          {
          year:'# 2008-2020',
            desc:['区块链迷失十二年，局限于中心化实质的区块链技术应用，' ,'而并没有建立任何去中心化的区块链世界']

          },
          {
            year:'2020.06 #',
            desc:['SOT算法穿越时空而来, 区块链世界革命拉开序幕']

          },
          {
            year:'2020.07-08 #',
            desc:['SOT算法论证以及测试网络搭建和体验版规划']

          },
          {
            year:'2020.09.30 #',
            desc:['基于SOT算法理论的体验版：','3Dimensional共识世界创世']

          },
          {
            year:'2020.10.17 #',
            desc:['3Dimensional共识世界时空裂变']

          },
          {
            year:'# 202*.**',
            desc:['一键创世雏形,','U链世界待激活，能量聚集中']

          },
          {
            year:'# 202*.**',
            desc:['伟大的共识不是一天建成的。 SOT算法主网上线，','将实现人类历史上第一个真正意义的去中心化世界，',' 而在此之前，一切都是伪神！']

          }
        ]

      }
    }
  }
</script>

<style scoped lang="less">
    .timeaxios {
        overflow: hidden;
        font-family: PingFang SC, PingFang SC-Bold;
        color: #fff;
        width:100%;
        height: 1600px;
        opacity: 1;
        background: linear-gradient(135deg,#07093c, #191d6b);
        .axiosTitle {
            text-align: center;
            margin-top: 53px;
            font-size: 36px;
            line-height: 72px;
        }
        .timeCnt {
            position: relative;
            margin: 18px auto 0 auto;
            width: 1130px;
            height: 1257px;
            background: url("~assets/homeImages/timecir.png") no-repeat;
            /*background-position: 0 50px;*/
            background-size: contain;

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
                letter-spacing: 1px;
                font-size: 18px;
            }
            font-size: 14px;
            font-family: PingFang SC, PingFang SC-Medium;
            font-weight: 500;
            text-align: LEFT;
            color: #848afc;
            line-height: 24px;
            &:nth-child(1){
                top: 210px;
                left: 212px;
            }
            &:nth-child(2) {
                top: 454px;
                left: 108px;
                .captital {
                    text-align: right;
                }
            }
            &:nth-child(3) {
                top: 520px;
                left: 540px;

                .captital {
                    text-align: right;
                }
            }
            &:nth-child(4) {
                top: 630px;
                left: 770px;
                p{
                    text-align: right;
                }
                .captital {
                    text-align: right;
                }
            }
            &:nth-child(5) {
                top: 720px;
                left: 230px;
                .captital {
                    text-align: right;
                }
            }
            &:nth-child(6) {
                top: 930px;
                left: 230px;
                .captital {
                    text-align: left;
                }
            }
            &:nth-child(7) {
                top: 1200px;
                left: 400px;
                .captital {
                    text-align: left;
                }
            }
        }
    }


</style>