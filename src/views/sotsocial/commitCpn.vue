<template>
    <div class="commit">
        <div class="makecase">
            <span>创建提案</span>
        </div>
        <div class="collect">
            <p><label for="">分类</label></p>
            <input type="text" name="" placeholder="请选择分类">
        </div>
        <div class="collect">
            <p><label for="">标题</label></p>
            <input type="text" name="" id="" placeholder="请填写提案标题">
        </div>
        <div class="collect">
            <p><label for="">详情</label></p>

            <textarea name="" placeholder="请填写提案详细内容"></textarea>
        </div>
        <div class="btn">
            <button>
                提交
            </button>
        </div>
    </div>
</template>

<script>
  export default {
    name: "commitCpn"
  }
</script>

<style scoped lang="less">
    .commit {
        font-size: 14px;
        margin-right:40px;
        width: 300px;
        height: 437px;
        opacity: 1;
        background: #ffffff;
        border-radius: 10px;
        padding: 20px;
        box-sizing: border-box;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.06);
        .makecase {
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
                height: 40px;
                opacity: 1;
                text-indent: 15px;
                background: #ffffff;
                border: 1px solid #d9d9d9;
                border-radius: 11px;
                ::-webkit-input-placeholder{
                    color: #BFBFBF;
                    font-size: 12px;
                }

            }
            textarea {
                width: 100%;
                height: 110px;
                opacity: 1;
                background: #ffffff;
                border: 1px solid #d9d9d9;
                border-radius: 11px;
                resize: none;
                outline: none;
                box-sizing: border-box;
                padding: 10px;
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
        }
    }
</style>