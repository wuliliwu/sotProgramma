<template>
    <div class="sto-home">
        <sto-header></sto-header>
        <sto-banner></sto-banner>
        <sot-content></sot-content>
        <time-axios></time-axios>
        <make-ul></make-ul>
        <sot-footer></sot-footer>
    </div>
</template>

<script>
  import stoHeader from "components/common/stoHeader";
  import stoBanner from "./childcomponents/stoBanner";
  import sotContent from "./childcomponents/sotContent";
  import sotFooter from "components/common/sotFooter";
  import makeUl from "./childcomponents/makeUl";
  import timeAxios from "./childcomponents/timeAxios";
  export default {
    name: "index",
    data() {
      return{
        dialogVisible:false
      }
    },
    components:{
      stoHeader,
      stoBanner,
      sotContent,
      sotFooter,
      makeUl,
      timeAxios,


    }

  }
</script>

<style scoped lang="less">
    .sto-home {
        width: 100%;
        min-width: 1200px;
        height: 100px;

    }

</style>