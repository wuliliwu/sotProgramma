<template>
<div class="d-content">
 <div class="c-title">
     <div class="cslot">
         <span><slot name="slot1"></slot></span>
         <span><slot name="slot2"></slot></span>
         <span><slot name="slot3"></slot></span>
         <span><slot name="slot4"></slot></span>
         <span><slot name="slot5"></slot></span>
     </div>
 </div>
  <div class="tableContent">
  <d-table></d-table>
  <div class="">
      <slot name="tSlot"></slot>
  </div>
  </div>
</div>
</template>

<script>
import dTable from "views/deal/dTable";
export default {
  name: "dealConent",
  components:{
    dTable,
  },
  data() {
    return {
      cities: [{
        value: '1',
        label: '添加流动性'
      },
        {
          value: '3',
          label: '兑换'
        },
        {
          value: '2',
          label: '全部类型'
        },
      ],
      value:"",
    }
  }

  }
</script>

<style scoped lang="less">
.d-content{
   width: 100%;
  min-width: 1200px;
  box-sizing: border-box;
  padding: 20px 60px;
   font-size: 18px;
   font-family: PingFang SC, PingFang SC-Medium;
    .cslot {
        padding: 14px 0 13px 0;
        span {
            margin-right: 40px;
            &:first-child {
                margin-right: 67px;
            }
        }
    }
}
.tableContent{
  //margin: 0 auto;
  //width: 1800px;
    overflow: hidden;
  min-width: 800px;
  height: 496px;
  opacity: 1;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.06);
}
.select{
  position: absolute;
  top:0;
  right: 0;
  width: 124px;
  height: 36px;
  opacity: 1;
  border-radius: 4px;
}
</style>
