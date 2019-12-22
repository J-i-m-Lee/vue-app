<template>
  <div id="home">Home</div>
</template>

<script>
import {getHomeData} from '../../service/api/index';
  export default {
  name:"Home",
    components:{},
    props:{},
    data(){
      return {

      }
    },
   async created() {
      // const data = await getHomeData();
      // console.log(data);
    },
  }
</script>
<style lang="less" scoped>
    #home{
        width: 100%;
        height: 100%;
        background-color: #0080c0;
    }
</style>