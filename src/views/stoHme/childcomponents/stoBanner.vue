<template>
    <div class="sotbanner">
        <div class="lbg">

        </div>
        <div class="rbg">

        </div>
        <div class="content banner-content">
            <div class="bLogo">
                <img src="~assets/homeImages/blogo.png" alt="">
            </div>
            <p class="sTitle">SOT & 3Dimensional</p>

            <div class="Bdesctition">
                <p> SOT共识算法旨在提供一种解决POW消耗能源和计算力，和POW、POS、DPOS等各种垄断问题，</p>
                <p>以及VRF可验证随机函数伪随机问题的去矿机化节能高效、去垄断化公平透明、理论上可无限扩展的方案。</p>
            </div>
            <div class="online">
                <span>主网正式上线</span>
            </div>
            <div class="bottonClass">
                <button><a href="#">白皮书</a></button>
                <button><a href="#">APP下载</a></button>
            </div>

        </div>
    </div>
</template>

<script>
  export default {
    name: "sotBanner"
  }
</script>

<style scoped lang="less">

    a{
        text-decoration: none;
    }
.sotbanner {
    font-size: 18px;
    position: relative;
    text-align: center;
    color:#fff;
    width: 100%;
    height: 1080px;
    z-index: -99;
    background-color: #191d6b;
    }
    .banner-content {
        margin: 0 auto;
        overflow: hidden;
        /*display: flex;*/
        /*justify-content: center;*/
        /*flex-direction: column;*/
        /*align-items: center;*/
        height: 100%;
        .bLogo {
            margin: 73px auto 40px  auto;
            width: 148px;
            height: 159px;
            opacity: 1;
            img {
                width: 80%;

            }
        }
        .sTitle {
            opacity: 1;
            font-size: 32px;
            /*font-family: PingFang SC, PingFang SC-Bold;*/
            font-weight: 700;
            color: #ffffff;
        }
        .Bdesctition {
            margin-top: 23px;
        }
        .Bdesctition p {
            line-height: 45px;
            /*font-weight: 700;*/
        }
        .online  {
            position: relative;
            margin-top: 33px;
            display: inline-block;
            width: 580px;
            height: 100px;
            &::after{
                content: '';
                display: inline-block;
                width: 100%;
                height: 100%;
                opacity: .8;
                z-index: -9;
                background: linear-gradient(90deg,rgba(255,255,255,0.00), rgba(255,255,255,0.32) 31%, rgba(255,255,255,0.33) 53%, rgba(255,255,255,0.25) 71%, rgba(255,255,255,0.00));
            }


            span{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                color: #fff;

            }

        }
        .bottonClass{
            margin-top: 63px;
            button {
                text-align: center;
                width: 100px;
                height: 36px;
                margin: 0 25px;
                border: 1px solid #fff;
                outline: none;
                background-color: transparent;
                a {
                    display: inline-block;
                    font-size: 14px;
                    color: #fff;
                    width: 100%;

                }
            }

        }

    }
    .lbg {
        /*require('assets/homeImages/lbg.png')*/
        background: url("~assets/homeImages/lbg.png") no-repeat;
        background-size: 80%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 609px;
        height: 669px;
        opacity: 1;
    }
    .rbg {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -9;
        background: url("~assets/homeImages/rbg.png") no-repeat;
        width: 713px;
        height: 682px;
        opacity: 1;
    }

</style>