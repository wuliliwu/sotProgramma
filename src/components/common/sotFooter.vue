<template>
    <footer class="footer">
        <div class="sot-left">
            <div class="slogo">
                <img src="~assets/homeImages/slogo.png" alt="">
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
</template>

<script>
  export default {
    name: "sotFooter"
  }
</script>

<style scoped lang="less">
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
            margin-left: 402px;
            span {
                letter-spacing: 1px;
            }
            img {
                margin-top: -8px;
            }
        }
        .sot-right {
            margin-right: 415px;
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
</style>