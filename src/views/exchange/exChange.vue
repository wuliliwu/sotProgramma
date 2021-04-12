<template>
    <div class="exchange">
        <el-table

                :data="tableData"
                :border="false"
                :stripe="false"
                :fit="true"
                width="400px"
                :row-class-name="tableRowClassName"
                :header-cell-style="headRowClass"
                :row-style="{height:'60px'}"
                class="customer-table"
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="名称"
                    >
                <template scope="scope">
                    <i class="beicon"></i>
                    <i class="beicon"></i>
                    {{scope.row.id}}
                </template>
            </el-table-column>
            <el-table-column
                    prop="name"
                    :render-header="renderHeader"
                    label="资产流动性">


            </el-table-column>
            <el-table-column
                    prop="amount1"
                    label="24小时成交额">
            </el-table-column>
            <el-table-column
                    prop="amount2"

                    label="24小时交易量">
            </el-table-column>
            <el-table-column
                    prop="amount3"
                    label="24小时手续费">
            </el-table-column>
            <el-table-column
                    prop="amount3"
                    label="做市年化">
            </el-table-column>
            <div slot="append" style="text-align: center" class="tableBottom">
                <!--在此处添加你想要插入在表格最后一行的内容-->
                <slot name="other">
                    <button class="moreBtn">查看更多</button>
                </slot>

            </div>
        </el-table>
    </div>
</template>

<script>
    import exTitle from "./exTitle";
  export default {
    name: "exChange",
    data() {
      return {
        // 表格的数据
        tableData: [{
          id: 'ETH/USDT',
          name: '$23.2345',
          amount1: '$4.1125',
          amount2: 15,
          amount3: '$123,123.1234'
        },{
          id: 'ETH/USDT',
          name: '$23.2345',
          amount1: '$4.1125',
          amount2: 15,
          amount3: '$123,123.1234'
        },{
          id: 'ETH/USDT',
          name: '$23.2345',
          amount1: '$4.1125',
          amount2: 15,
          amount3: '$123,123.1234'
        },{
          id: 'ETH/USDT',
          name: '$23.2345',
          amount1: '$4.1125',
          amount2: 15,
          amount3: '$123,123.1234'
        },{
          id: 'ETH/USDT',
          name: '$23.2345',
          amount1: '$4.1125',
          amount2: 15,
          amount3: '$123,123.1234'
        },{
          id: 'ETH/USDT',
          name: '$23.2345',
          amount1: '$4.1125',
          amount2: 15,
          amount3: '$123,123.1234'
        },],
        flowsrc:'url'//显示图标的地址
      };
    },
    components: {
      exTitle
    },
    methods :{
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1)  //=>这里可以改成 rowIndex%2=== 1，后面直接else即可达到隔行变色效果。
        {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '~assets/exchangeImg/flowup.png';
      },
      headRowClass({row, column, rowIndex, columnIndex}){
        //表头的背景颜色
        if(rowIndex==0){
          return 'background:#eeeeee'
        }
      },
      renderHeader(createElement, { column }) {
        return createElement("div", [
          createElement("span", column.label),
          createElement("span", {
            domProps: {
              innerHTML: `<img src="${this.flowsrc}" style="width: 14px">`
            },
            style: {
              // color: "red",
              fontSize: "16px",
              marginLeft: "5px"
            }
          })
        ]);
      },
    }
  }
</script>

<style lang="less">
   .exchange {
       font-size: .16rem;
       margin: .24rem .3rem .6rem .36rem;
       img {
           vertical-align: middle;
           margin-bottom: 4px;
           margin-right: 6px;
       }

       .el-table {
           border-radius: 10px;
           box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.06);
       }
       .customer-table th{
           border:none;
       }
       .customer-table td,.customer-table th.is-leaf {
           border:none;
       }
       /*表格最外层边框-底部边框*/
       el-table__row>td {
           border: none;

       }
       .el-table::before {
           height: 0px;
       }
       .tableBottom {
           margin-top: .2rem!important;
           margin-bottom: .2rem!important;
           .moreBtn {
               width: 1rem;
               height: .3rem;
               opacity: 1;
               cursor: pointer;
               color: #999999;
               outline: none;
               background: #ffffff;
               border: 1px solid #c4c4c4;
               border-radius: 6px;

           }
       }
       .el-table .warning-row {
           background: #f6f6f6;//这里可以修改颜色
       }
       .el-table .success-row {
           background: #f6f6f6;//这里可以修改颜色
       }
       /*开头的 图标*/
       .beicon {
           display: inline-block;
           width: 28px;
           height: 28px;
           position: relative;
           border-radius: 50%;
           background-color: #000;
           vertical-align: middle;
           img{
               width: 100%;
               height: 100%;
           }
           &:first-child {
               z-index: 1;
           }
           &:last-child {

               margin-left: -15px;
               background-color: green;
           }
       }
   }

</style>