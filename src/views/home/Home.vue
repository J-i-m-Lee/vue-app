<template>
  <div id="home">
    <Header/>
  </div>
</template>

<script>
import Header from './components/header/Header'
import {getHomeData} from '../../service/api/index';
  export default {
  name:"Home",
    components:{
      Header
    },
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