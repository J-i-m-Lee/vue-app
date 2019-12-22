<template>
  <div id="home">
    <Header/>
    <Carousel :banner_list=bannerList />
  </div>
</template>

<script>
import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel';
import {getHomeData} from '../../service/api/index';
  export default {
  name:"Home",
    components:{
      Header,
      Carousel
    },
    props:{},
    data(){
      return {
        bannerList:[]
      }
    },
   async created() {
      const res = await getHomeData();
      console.log(res);
      if(res.success===true){
        this.bannerList = res.data.list[0].icon_list;
      }
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