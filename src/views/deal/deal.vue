<template>

<!--    建议代码一键格式化-->
   <div class="deal">
   <sto-header class="hea">
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
    <div class="dealtitle">
        <ex-title>
            <li slot="slot1"><img src="~assets/exchangeImg/Frame_2.png" alt=""><span>交易对</span></li>
            <li slot="slot2"><img src="~assets/exchangeImg/Frame_3.png" alt=""><span>账户列表</span></li>
            <li slot="slot3"><img src="~assets/exchangeImg/Frame_2.png" alt=""><span>区块列表</span></li>
            <li slot="slot4"><img src="~assets/exchangeImg/Frame.png" alt=""><span>交易列表</span></li>
        </ex-title>
    </div>
   <ex-change>
        <div class="block" slot="other">
            <el-pagination
                    :page-size="10"
                    layout="prev, pager, next, jumper"
                    :total="50">
            </el-pagination>
        </div>

   </ex-change>
   <sot-footer class="foo"></sot-footer>
   </div>
</template>

<script>
import stoHeader from "@/components/common/stoHeader";
import exChange from "../exchange/exChange";
import sotFooter from "components/common/sotFooter";
import exTitle from "../exchange/exTitle";
export default {
  name: "deal",
  components:{
    stoHeader,exChange,sotFooter,exTitle
  }
}
</script>

<style scoped lang="less">
    /*语言选择*/
    .deal{
        font-size: 14px;
        font-family: PingFang SC, PingFang SC-Medium;
        .dealtitle {
            li {
                display: flex;
                justify-content: left;
                margin-right: .30rem;
                img {
                    vertical-align: middle;
                    margin-right: 6px;
                }
            }

        }
    }
    .dragdownList {
        display: flex;
      visibility: hidden;

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
    .hea, .foo {
        background-color: #191d6b;
        min-width: 1400px;
    }
    .tSlot {
        text-align: center;
        margin-top: 32px;
        .el-pagination {
            min-width: 300px;
            /*background-color: #f6f6f6;*/
        }

    }

</style>
