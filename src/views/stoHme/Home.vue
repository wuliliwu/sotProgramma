<template>
    <div class="sto-home">
        <sto-header></sto-header>
        <sto-banner></sto-banner>
        <sot-content></sot-content>
    </div>
</template>

<script>
  import stoHeader from "components/common/stoHeader";
  import stoBanner from "./childcomponents/stoBanner";
  import sotContent from "./childcomponents/sotContent";
  export default {
    name: "index",
    components:{
      stoHeader,
      stoBanner,
      sotContent
    }

  }
</script>

<style scoped>
    .sto-home {
        width: 100%;
        min-width: 1200px;
        height: 100px;
    }

</style>