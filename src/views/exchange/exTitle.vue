<template>
    <div class="extitle">
        <el-row class="Etitle">
            <el-col :span="24"><div class="grid-content bg-purple-dark">
                <div class="lis"><slot name="slot1" ></slot></div>
                <div class="lis"><slot name="slot2" ></slot></div>
                <div class="lis"><slot name="slot3" ></slot></div>
                <div class="lis"><slot name="slot4" ></slot></div>
            </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
    name: "exTitle"
  }
</script>

<style scoped lang="less">
    .extitle {
        margin-top: .2rem;
    }
    .Etitle {
        display: flex;
        margin-left: .3rem;
        margin-right: .3rem;
        margin-bottom: .13rem;
        .lis {
            float: left;
            padding-right: 70px;

        }
    }
</style>