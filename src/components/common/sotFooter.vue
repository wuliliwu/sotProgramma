<template>
    <div style="background-color:#191d6b;">
        <footer class="footer content">
            <div class="sot-left">
                <div class="slogo">
                    <img src="~assets/homeImages/blogo.png" alt="">
                    <span>STO&3Dimensional</span>
                </div>
            </div>

            <div class="sot-right">
                <ul>
                    <li><a href="#"><i class="iconfont iconzu17740"></i></a></li>
                    <li><a href="#"><i class="iconfont iconzu17742"></i></a></li>
                    <li><a href="#"><i class="iconfont iconzu17741"></i></a></li>
                    <li><a href="#"><i class="iconfont iconzu17743"></i></a></li>
                    <li><a href="#"><i class="iconfont iconzu17744"></i></a></li>
                    <li><a href="#"><i class="iconfont iconzu17745"></i></a></li>
                </ul>
            </div>
        </footer>
    </div>

</template>

<script>
  export default {
    name: "sotFooter"
  }
</script>

<style scoped lang="less">
    @media (min-width: 1021px) {
        .footer {
            font-size: 24px;
            color: #fff;
            font-family: PingFang SC, PingFang SC-Bold;
            height: 180px;
            opacity: 1;
            background: #191d6b;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .sot-left {
                margin-left: 48px;
                span {
                    letter-spacing: 2px;
                }
                img {
                    vertical-align: middle;
                }
            }
            .sot-right {
                margin-right: 30px;
                ul li {
                    float: left;
                    margin: 0 8px;
                    a i{
                        display: inline-block;
                        font-size: 20px;
                        color: #fff;
                    }
                }

            }
        }
    }
    @media (max-width: 1020px) {
        .footer {
            font-size: 24px;
            color: #fff;
            font-family: PingFang SC, PingFang SC-Bold;
            height: 220px;
            opacity: 1;
            background: #191d6b;
            display: flex;
            justify-content: left;
            flex-wrap: wrap;

            .sot-left {
                margin-top: .4rem;
                width: 100%;
                margin-left: 48px;
                span {
                    letter-spacing: 2px;
                }
                img {
                    vertical-align: middle;
                }
            }
            .sot-right {
                margin-left: 48px;
                ul li {
                    float: left;
                    margin: 0 8px;
                    a i{
                        display: inline-block;
                        font-size: 20px;
                        color: #fff;
                    }
                }

            }
        }
    }

</style>