<template>
    <div class="sotscsan">
        <sto-header>
            <li slot="slot1"><a href="#">首页</a></li>
            <li slot="slot2"><a href="#">交易对</a></li>
            <li slot="slot3"><a href="#">代币</a></li>
            <li slot="slot4"><a href="#">Layer <i class="iconfont iconFrame_3"></i></a></li>
            <li slot="slot6" class="search"><a href="#"><input type="text" placeholder="搜索/区块/交易代币/账户"></a></li>
            <li slot="slot7" class="mainnet"><button>主网</button></li>
            <li slot="slot8" style="position: relative"><button class="changeBtn">简体中文<i class="iconfont iconFrame_3"></i></button>
                <div class="dragdownList">
                    <input type="button" value="简体中文">
                    <input type="button" value="English" class="change">
                </div>

            </li>


        </sto-header>
        <div class="topscan">
            <div class="toptitle">
                <span><i>图</i>全网概览</span>
            </div>
<!--            这里用v-for-->
           <div class="itembox">
               <div class="scanitem">
                    <span>40,132</span>
                   <p>L2区块高度</p>
               </div>
               <div class="scanitem active">
                   <span>40,132</span>
                   <p>L2区块高度</p>
               </div>
               <div class="scanitem">
                   <span>40,132</span>
                   <p>L2区块高度</p>
               </div>
               <div class="scanitem">
               <span>40,132</span>
               <p>L2区块高度</p>
           </div>
               <div class="scanitem">
               <span>40,132</span>
               <p>L2区块高度</p>
           </div>
               <div class="scanitem">
                   <span>40,132</span>
                   <p>L2区块高度</p>
               </div>
               <div class="scanitem">
                   <span>40,132</span>
                   <p>L2区块高度</p>
               </div>
               <div class="scanitem">
                   <span>40,132</span>
                   <p>L2区块高度</p>
               </div>
               <div class="scanitem">
                   <span>40,132</span>
                   <p>L2区块高度</p>
               </div>
               <div class="scanitem">
                   <span>40,132</span>
                   <p>L2区块高度</p>
               </div>

           </div>
            <div class="arrow">
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
    import stoHeader from "components/common/stoHeader";
  export default {
    name: "sotScan",
    components: {
      stoHeader
    }
  }
</script>

<style scoped lang="less">
    .active {
        background: linear-gradient(135deg,#191d6b, #11549b);
        color: #fff;

    }
    .change {

        background-color: #191d6b!important;
        color: #fff;

    }

    /*语言选择*/
    .dragdownList {
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        top: 90px;
        width: 100px;
        height: 80px;
        background-color: #fff;
        box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.10), 0px 0px 4px 0px rgba(0,0,0,0.10);
        &::after {
            position: absolute;
            top: -6px;
            left: 50%;
            transform: translateX(-50%) rotate(60deg) skewX(30deg);
            content: '';
            width: 16px;
            height: 16px;
            background-color: #fff;

        }
        input {
            background-color: transparent;
            font-size: 14px;
            border: none;
            width: 100%;
        }
    }

    .mainnet button{
        display: inline-block;
        padding: 8px 15px;
        border: none;
        background-color: #5D63CF;
        box-sizing: border-box;
        color: #fff;
        outline: none;
        font-size: 16px;
    }
    .search input {
        text-indent: 10px;
        font-size: 14px;
        color: #efefef;
        height: 36px;
        width: 250px;
        border: none;
        background-color: #343994;
        &::placeholder {
            text-indent: 10px;
            font-size: 14px;
            color: #efefef;
        }
    }

    .sotscsan {
        background-color: #FEFEFE;

    }
    .topscan {
        font-size: 18px;
        font-family: PingFang SC, PingFang SC-Medium;
        /*position: absolute;*/
        /*left: 60px;*/
        /*right: 60px;*/
        margin-left: 50px;
        margin-right: 60px;
        margin-top: 36px;
        box-sizing: border-box;
        .itembox {
            width: 100%;
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .scanitem{


                /*float: left;*/
                width: 340px;
                height: 100px;
                border-radius: 10px;
                background-color: #fff;
                /*margin-right: 22px;*/
                margin-bottom: 25px;
                text-align: center;
                /*opacity: .9;*/
                box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.06);
                /*&:nth-child(5n) {*/
                /*     margin-right: 0;*/
                /* }*/
                span {
                    font-size: 18px;
                    font-weight: bold;
                    line-height: 59px;
                }
                p {
                    font-size: 14px;
                    color: #999999
                }



            }
        }

        .arrow {
            text-align: center;
            margin-top: -24px;
            span {
                display: inline-block;
                width: 28px;
                height: 24px;
                opacity: 1;
                line-height: -10px;
                transform: rotateZ(-30deg) skewX(30deg);
                border: 1px solid #c4c4c4;
                border-top: none;
                border-right: none;


            }
        }


    }
</style>