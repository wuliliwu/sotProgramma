<template>
<div>
    <div class="commit">
        <div class="makecase"><span>创建提案</span></div>
        <div class="collect">
         <p><label for="">分类</label></p>
            <el-form ref="form" label-width="" >
                <el-form-item>
                    <el-select placeholder="请选择活动区域" style="width: 260px;" class="selectSty" v-model="form.region">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item >
                    <p><label for="">标题</label></p>
                    <el-input placeholder="请填写提案标题" v-model="form.title"></el-input>
                </el-form-item>

                <el-form-item>
                    <p><label for="">详情</label></p>
                    <el-input type="textarea" v-model="form.desc" placeholder="请填写提案详细内容"></el-input>
                </el-form-item>
             </el-form>

        </div>
        <div class="btn">
            <button>
                提交
            </button>
        </div>
    </div>
</div>

</template>

<script>
  export default {
    name: "commitCpn",
    data() {
      return {
        form:{
          region:'',
          title:'',
          desc:''
        }
      }
    }
  }
</script>

<style lang="less">


    .commit {
        font-family: PingFang SC, PingFang SC-Medium;
        font-size: 14px;
        margin-right:40px;
        width: 300px;
        opacity: 1;
        background: #ffffff;
        border-radius: 10px;
        padding: 20px;
        box-sizing: border-box;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.06);
        .makecase {
            font-size: 14px;
            margin-bottom: 14px;
        }
        .collect{
            margin-bottom: 16px;
            p{
                font-size: 13px;
                line-height: 26px;
                color: #616B84;

            }
            input{
                width: 100%;
                opacity: 1;
                background: #ffffff;
                color: #616B84;
                font-size: 13px;
                border: 1px solid #d9d9d9;
                border-radius: 11px;
                &::placeholder{
                    font-family: PingFang SC, PingFang SC-Medium;
                    color: #BFBFBF;
                    font-size: 12px;
                }

            }
            textarea {
                font-family: PingFang SC, PingFang SC-Bold;
                width: 100%;
                height: 110px;
                color: #616B84;
                opacity: 1;
                background: #ffffff;
                border: 1px solid #d9d9d9;
                border-radius: 11px;
                resize: none;
                outline: none;
                font-size: 13px;
                box-sizing: border-box;
                padding: 10px;
                &::-webkit-scrollbar {
                    display: none;
                }
                &::placeholder {
                    font-family: PingFang SC, PingFang SC-Bold;
                    color: #BFBFBF;
                    font-size: 12px;
                }
            }

        }
        .btn button {
            text-align: center;
            line-height: 38px;
            width: 160px;
            height: 38px;
            opacity: 1;
            border: none;
            color: #fff;
            font-size: 16px;
            outline: none;
            background: #191d6b;
            border-radius: 10px;
            cursor: pointer;
        }
    }
</style>