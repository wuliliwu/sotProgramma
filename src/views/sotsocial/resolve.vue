<template>
    <div class="resolve">
        <div class="top">
            <span>已解决</span>
            <span>处理时间：27 小时</span>
        </div>
        <div class="answer">
            <span>请下载最新版的APP。</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "resolve"
  }
</script>

<style scoped lang="less">
.resolve {
    width: 100%;
    /*height: 70px;*/
    background: rgba(249,249,249,1);
    border: 1px solid #c4c4c4;
    border-radius: 11px;
    padding: 13px 18px;
    opacity: .7;
    box-sizing: border-box;
}
    .top {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        span:first-child {
            font-size: 13px;
            color: #0fdc6e;
        }
        span:last-child {
            font-size: 12px;
            color: #8B93A7;
        }
    }
    .answer{
        span{
            color: #616B84;
            font-size: 12px;
        }
    }
</style>