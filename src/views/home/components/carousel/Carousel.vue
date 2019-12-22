<template>
  <swiper
    id="carousel"
    :options="swiperOption"
    ref="mySwiper"
  >
    <!-- slides -->
    <swiper-slide v-for="(banner) in banner_list" :key=banner.meteria_id>
        <img :src="banner.icon_url" :alt="banner.public_name">
    </swiper-slide>

    <!-- Optional controls -->
    <div
      class="swiper-pagination"
      slot="pagination"
    ></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Carousel",
  props: {
    banner_list: Array
  },
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        loop: true,
        speed: 300,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
  //  computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.swiper
  //   }
  // },
  // mounted() {
  //   // current swiper instance
  //   // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
  //   console.log('this is current swiper instance object', this.swiper)
  //   this.swiper.slideTo(3, 1000, false)
  // }
};
</script>
<style lang="css" scoped>
#carousel {
  width: 100%;
  height: 15rem;
  background-color: #ff8000;
}
#carousel img {
    width: 100%;
    height: 15rem;
}
</style>