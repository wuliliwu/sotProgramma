<template>
    <div>
        <div class="sto-header">
            <div class="sto-left">
                <div class="slogo">
                    <img src="~assets/homeImages/slogo.png" alt="">
                    <span>STO&3Dimensional</span>
                </div>
            </div>
            <div class="sto-right">
                <ul>
                    <slot name="slot1">
                        <li class="active" @click="showandstopMove"><a href="#">SOT</a></li>
                    </slot>
                    <slot name="slot2"><router-link to="/scan"><li><a href="#">浏览器</a></li></router-link></slot>
                    <slot name="slot3">
                        <router-link to="/scoial"><li><a href="#">社区</a></li></router-link>
                    </slot>
                    <slot name="slot4"><router-link to="/blog"> <li><a href="#">博客</a></li></router-link></slot>
                    <slot name="slot5"></slot>
                    <slot name="slot6"></slot>
                    <slot name="slot7"><router-link to="/deal"><li><a href="#">APP</a></li></router-link></slot>
                    <slot name="slot8">
<!--                        <li>-->
<!--                            <el-form :inline="true" class="demo-form-inline">-->
<!--                                <el-form-item label-width="auto" style="width: 100px;background-color:transparent;margin-top: 30px">-->
<!--                                    <el-select placeholder="简体中文">-->
<!--                                        <el-option label="区域一" value="shanghai"></el-option>-->
<!--                                        <el-option label="区域二" value="beijing"></el-option>-->
<!--                                    </el-select>-->
<!--                                </el-form-item>-->
<!--                            </el-form>-->
<!--                        </li>-->

                        <li><button class="changeBtn">简体中文 <i class="iconfont iconFrame_3"></i></button></li>
                    </slot>
                </ul>
            </div>
        </div>
        <!--    对话框-->

<!--        遮罩层-->
        <div class="mask" v-show="centerDialogVisible" >
            <div class="layout" v-show="centerDialogVisible">
                <div class="closeAndtitle">
                    <span>SOT</span>
                    <span @click="hideandMove">×</span>
                </div>
                <div class="l-header">
                    <img src="~assets/homeImages/blogo.png" alt="">
                    <p>SOT 合约地址</p>
                    <p>0xe4815ae53b124e7263f08dcdbbb757d41ed658c6</p>
                </div>
                <div class="l-footer">
                    <div class="line">
                        <span>SOT 价格：</span>
                        <span>$23.12</span>
                    </div>
                    <div class="line">
                        <span>SOT 流通量：</span>
                        <span>311,124,124,00</span>
                    </div>
                    <div class="line">
                        <span>SOT 总供应量：</span>
                        <span>1,000,000,000,000</span>
                    </div>
                    <div class="line">
                        <span>SOT 流通市值：</span>
                        <span>$676,213,071</span>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        centerDialogVisible: false
      };
    },
    methods: {
        //停止页面滚动
      showandstopMove(){
        this.centerDialogVisible=true
        let m = function(e){e.preventDefault();};
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",m,{ passive:false });//禁止页面滑动
      },
        //开启页面滚动
      hideandMove(){
        this.centerDialogVisible=false
        let m =function(e){e.preventDefault();};
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",m,{ passive:true });
      }
    }

  }
</script>

<style lang="less">
        .sto-header {
            /*width: 100%;*/
            min-width: 900px;
            font-size: .16rem;
            color: #fff;
            height: 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #191d6b;

            .sto-left {
                letter-spacing: 2px;
                margin-left: 36px;
            }
            .sto-left .slogo img {
                width: 38px;
                height: 41px;
                margin-top: -6px;
                vertical-align: middle;
            }
            .sto-right {
                margin-right: 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                ul {
                    height: 100px;
                    line-height: 100px;
                }
                li {
                    padding: 0 .2rem;
                    float: left;


                }
                ul li a {
                    color: #fff;
                    text-decoration: none;
                }

            }
            .changeBtn {
                width: 100px;
                height: 36px;
                border: 1px solid #fff;
                color: #fff;
                outline: none;
                cursor: pointer;
                margin-bottom: 10px;
                background-color: transparent;
                i {
                    font-size: 5px!important;
                    margin-left: 5px;
                }
            }
        }
        #el-title>div.el-dialog {
            color:red
        }
    /*弹出层的框*/

    .layout  {
        font-size: 18px;
        color: #fff;
        position: absolute;
        left: 50%;
        top:50%;
        padding: 40px 50px;
        box-sizing: border-box;
        transform: translate(-50%,-50%);
        width: 750px;
        height: 520px;
        opacity: 1;
        transition: all 1s;
        background: linear-gradient(-90deg,#eb7070 25%, #a3536e 50%, #76426d 75%, #191d6b 100%);
        border-radius: 10px;
        .closeAndtitle {
            display: flex;
            font-size: 20px;
            justify-content: space-between;
            span:last-child {
                display: inline-block;
                width: 30px;
                height: 30px;
                text-align: center;
                line-height: 30px;
                font-size: 24px;
                cursor: pointer;
            }
        }
        .l-header {
            margin-top: 42px;
            display: flex;
            line-height: 42px;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: column;

        }
        .l-footer {
            width: 650px;
            height: 164px;
            padding: 24px 20px;
            opacity: 1;
            box-sizing: border-box;
            background: rgba(255,255,255,0.10);
            border-radius: 10px;
            line-height: 30px;
            .line {
                display: flex;
                justify-content: space-between;
            }
        }

    }
    .mask {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.4);

    }


</style>