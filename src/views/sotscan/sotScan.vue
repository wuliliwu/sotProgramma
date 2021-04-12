<template>

    <div style="font-size: 14px">
        <sto-header class="hea">
            <li slot="slot1" class="lis"><a href="#">首页</a></li>
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
        <el-row class="scancnt">
            <el-col :span="24"><div class="grid-content bg-purple-dark">
                <div class="more800">
                    <el-row>
                        <el-col :span="24"><i class="net"><img src="~assets/exchangeImg/net.png" alt=""></i>全网概览</el-col>
                    </el-row>
                    <el-row :gutter="25" style="display: flex; flex-wrap: nowrap">
                        <el-col :span="5"><div class="grid-content bg-purple">
                            <div class="item">
                                <h2 style="">
                                    40,31242349328432
                                </h2>
                                <span>L2区块高度</span>
                            </div>
                        </div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">
                            <div class="item">
                                <h2 style="">
                                    40,312
                                </h2>
                                <span>L2区块高度</span>
                            </div>
                        </div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">
                            <div class="item">
                                <h2 style="">
                                    40,312
                                </h2>
                                <span>L2区块高度</span>
                            </div>
                        </div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">
                            <div class="item">
                                <h2 style="">
                                    40,312
                                </h2>
                                <span>L2区块高度</span>
                            </div>
                        </div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">
                            <div class="item">
                                <h2 style="">
                                    40,312
                                </h2>
                                <span>L2区块高度</span>
                            </div>
                        </div></el-col>
                    </el-row>
                    <el-row :gutter="25" style="display: flex;">
                        <el-col :span="5"><div class="grid-content bg-purple">
                            <div class="item">
                                <h2 style="">
                                    40,312
                                </h2>
                                <span>L2区块高度</span>
                            </div>
                        </div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">
                            <div class="item">
                                <h2 style="">
                                    40,312
                                </h2>
                                <span>L2区块高度</span>
                            </div>
                        </div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">
                            <div class="item">
                                <h2 style="">
                                    40,312
                                </h2>
                                <span>L2区块高度</span>
                            </div>
                        </div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">
                            <div class="item">
                                <h2 style="">
                                    40,312
                                </h2>
                                <span>L2区块高度</span>
                            </div>
                        </div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">
                            <div class="item">
                                <h2 style="">
                                    40,312
                                </h2>
                                <span>L2区块高度</span>
                            </div>
                        </div></el-col>
                    </el-row>
                </div>
                <div class="less800">
                    <el-row>
                        <el-col :span="24"><i class="net"><img src="~assets/exchangeImg/net.png" alt=""></i>全网概览</el-col>
                    </el-row>
                    <el-row :gutter="25" style="display: flex; flex-wrap: nowrap" v-for="item in 4">
                        <el-col :span="12"><div class="grid-content bg-purple">
                            <div class="item">
                                <h2 style="">
                                    40,31242349328432
                                </h2>
                                <span>L2区块高度</span>
                            </div>
                        </div></el-col>
                        <el-col :span="12"><div class="grid-content bg-purple">
                            <div class="item">
                                <h2 style="">
                                    40,312
                                </h2>
                                <span>L2区块高度</span>
                            </div>
                        </div></el-col>
                    </el-row>

                </div>
            </div></el-col>
        </el-row>
        <ex-title>
           <li slot="slot1" class="dataimg"><img src="~assets/exchangeImg/Frame_2.png" alt=""><span>交易对</span></li>
        </ex-title>
        <ex-change></ex-change>
        <ex-title>
            <li slot="slot1" class="dataimg"><img src="~assets/exchangeImg/Frame_2.png" alt=""><span>交易对</span></li>
        </ex-title>
        <ex-change></ex-change>
        <ex-title>
            <li slot="slot1" class="dataimg"><img src="~assets/exchangeImg/Frame_2.png" alt=""><span>交易对</span></li>
        </ex-title>
        <ex-change></ex-change>
        <sot-footer></sot-footer>
    </div>



</template>

<script>
    import stoHeader from "components/common/stoHeader";
    import dTable from "../deal/dTable";
    import sotFooter from "components/common/sotFooter";
    import exTitle from "../exchange/exTitle";
    import exChange from "../exchange/exChange";
  export default {
    name: "sotScan",
    components: {
      stoHeader,dTable,sotFooter,exTitle,exChange
    }
  }
</script>

<style scoped lang="less">

    .bg-purple {
        border-radius: 10px;
        background-color: #fff;
        height: 100%;
        transition: all 1s;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.06);
    }
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
        z-index: 10;
        position: absolute;
        top: .9rem;
        width: 1rem;
        height: .8rem;
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
    .dataimg {
        img {
            vertical-align: middle;
            margin-right: 6px;
        }
    }

    /*--------------------*/


    /*当屏幕大于800时*/
    @media (min-width: 1000px){
        .more800 {
            display: block;
        }
        .less800 {
            display: none;
        }
        .scancnt {
            margin-top: .36rem;
            margin-left: .3rem;
            margin-right: .3rem;
            background-color: #fefefe;
            font-family: PingFang SC, PingFang SC-Bold;
            font-size: .16rem;
            .net {
                img {
                    vertical-align: middle;
                    margin-top: -3px;
                    margin-right: 6px;
                }
            }
            .el-row {
                margin-bottom: .25rem;
                &:first-child {
                    margin-bottom: .13rem;
                }

                .el-col {

                }
            }
            .item {
                word-break: break-all;
                text-align: center;
                line-height: .28rem;
                padding: .22rem .22rem .22rem .22rem;
                h2 {
                    font-size: .18rem;
                    font-weight: 400;
                    color:#333333
                }
            }

        }

    }
        /*当屏幕宽度小于800px时候*/
    @media (max-width: 999px){
        .more800 {
            display: none;
        }
        .less800 {
            display: block;
        }
        .hea {
            font-size: .12rem;
        }



        .scancnt {
            margin-top: .36rem;
            margin-left: .3rem;
            margin-right: .3rem;
            background-color: #fefefe;
            font-family: PingFang SC, PingFang SC-Bold;
            font-size: .16rem;
            .net {
                img {
                    vertical-align: middle;
                    margin-top: -3px;
                    margin-right: 6px;
                }
            }
            .el-row {
                margin-bottom: .25rem;
                &:first-child {
                    margin-bottom: .13rem;
                }

                .el-col {

                }
            }
            .item {
                word-break: break-all;
                text-align: center;
                line-height: .28rem;
                padding: .22rem .22rem .22rem .22rem;
                h2 {
                    font-size: .18rem;
                    font-weight: 400;
                    color:#333333
                }
            }

        }
    }




</style>