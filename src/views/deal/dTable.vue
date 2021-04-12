<template>

<div >
<table style="border-collapse:collapse;">
  <thead>
    <tr class="c-title">
        <th class="c-name">名称</th>
        <th class="c-content">资产流动性</th>
        <th class="c-content">24小时成交额</th>
        <th class="c-content">24小时交易量</th>
        <th class="c-content">24小时手续费</th>
        <th class="c-last">24小时手续费</th>
    </tr>
    <tr  class="c-cl" v-for="item in 6">
       <td> <span class="c-cicle1"></span> <span class="c-cicle2"></span><span class="c-text">ETH/USDT</span></td>
       <td>$23.2345</td>
       <td>$4.1125</td>
       <td>15</td>
       <td>$4.1125</td>
       <td>$123,123.1234</td>
     </tr>
<!--    <tr  class="c-cl">-->
<!--      <td> <span class="c-cicle1"></span> <span class="c-cicle2"></span><span class="c-text">ETH/USDT</span></td>-->
<!--      <td>$23.2345</td>-->
<!--      <td>$4.1125</td>-->
<!--      <td>15</td>-->
<!--      <td>$4.1125</td>-->
<!--      <td>$123,123.1234</td>-->

<!--    </tr>-->
<!--    <tr  class="c-cl">-->
<!--      <td> <span class="c-cicle1"></span> <span class="c-cicle2"></span><span class="c-text">ETH/USDT</span></td>-->
<!--      <td>$23.2345</td>-->
<!--      <td>$4.1125</td>-->
<!--      <td>15</td>-->
<!--      <td>$4.1125</td>-->
<!--      <td>$123,123.1234</td>-->

<!--    </tr>-->
<!--    <tr  class="c-cl">-->
<!--      <td> <span class="c-cicle1"></span> <span class="c-cicle2"></span><span class="c-text">ETH/USDT</span></td>-->
<!--      <td>$23.2345</td>-->
<!--      <td>$4.1125</td>-->
<!--      <td>15</td>-->
<!--      <td>$4.1125</td>-->
<!--      <td>$123,123.1234</td>-->
<!--    </tr>-->
<!--    <tr  class="c-cl">-->
<!--      <td> <span class="c-cicle1"></span> <span class="c-cicle2"></span><span class="c-text">ETH/USDT</span></td>-->
<!--      <td>$23.2345</td>-->
<!--      <td>$4.1125</td>-->
<!--      <td>15</td>-->
<!--      <td>$4.1125</td>-->
<!--      <td>$123,123.1234</td>-->
<!--    </tr>-->
<!--    <tr  class="c-cl">-->
<!--      <td> <span class="c-cicle1"></span> <span class="c-cicle2"></span><span class="c-text">ETH/USDT</span></td>-->
<!--      <td>$23.2345</td>-->
<!--      <td>$4.1125</td>-->
<!--      <td>15</td>-->
<!--      <td>$4.1125</td>-->
<!--      <td>$123,123.1234</td>-->
<!--    </tr>-->
  </thead>
</table>

</div>
</template>
<script>

export default {
  name: "dTable"
}
</script>

<style scoped lang="less">
table{
  margin: 0 auto;
  font-size: 14px;
  font-family: PingFang SC, PingFang SC-Medium;
  text-align: left;
  width: 100%;
  border-radius: 11px;

.c-title{
  min-width: 1200px;
  height: 40px;
  opacity: 1;
  background: #eeeeee;
  .c-name{
    box-sizing: border-box;
    /*width: 5.09rem;*/
    width: 509px;
    padding-left: 20px;
    background: #eeeeee;
  }
  .c-content{
    box-sizing: border-box;
    width: 258px;
    background: #eeeeee;
    padding-left: 20px;
  }
  .c-last{
    box-sizing: border-box;
    width: 258px;
    text-align: right;
    padding-right: 20px;
    background: #eeeeee;
  }
}
.c-cl{
  box-sizing: border-box;
  text-align: left;
  height: 60px;
  width: 1800px;
  opacity: 1;
  td{
   padding-left: 20px;
  }
   td:first-child{
    position: relative;
    .c-cicle1{
      display: inline-block;
      position: absolute;
      left: 20px;
      top: 15px;
      width: 28px;
      height: 28px;
      opacity: 1;
      background: #666666;
      border-radius: 50%;
      z-index: 1;
    }
     .c-cicle2{
       display: inline-block;
       position: absolute;
       left: 34px;
       top: 15px;
       width: 28px;
       height: 28px;
       opacity: 1;
       background: #999999;
       border-radius: 50%;
     }
     .c-text{
       margin-left: 78px;
     }
  }
  td:last-child{
    text-align: right;
    padding-right: 20px;
  }

}
  tr:nth-of-type(2n+1){
    background: #f6f6f6;
  }
}
</style>
