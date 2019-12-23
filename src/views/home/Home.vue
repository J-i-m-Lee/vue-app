<template>
  <div id="home">
    <div v-if="!showLoading">
      <Header />
      <Carousel :banner_list="bannerList" />
      <NavItem :nav_list="navList" />
      <Activity :activ_list="activList" />
      <Like :like_list="likeList" />
      <TopIcon v-if="showTop" @scrollTop="scrollToTop" />
    </div>
    <van-loading
      size="24px"
      vertical
      v-else
      color="#75a342"
      style="position: relative; top: 50%; transform:translateY(-50%)"
      >加载中...</van-loading>
  </div>
</template>

<script>
import Header from "./components/header/Header"
import Carousel from "./components/carousel/Carousel"
import NavItem from "./components/navItem/NavItem"
import Activity from "./components/activity/Activity"
import Like from "./components/like/Like"
import TopIcon from "./components/topIcon/TopIcon"
import { getHomeData } from "../../service/api/index"
import { showBack, animate } from "@/config/global.js"

export default {
  name: "Home",
  components: {
    Header,
    Carousel,
    NavItem,
    Activity,
    Like,
    TopIcon
  },
  props: {},
  data() {
    return {
      bannerList: [],
      navList: [],
      activList: [],
      likeList: [],
      showLoading: true,
      showTop: false
    }
  },
  async created() {
    const res = await getHomeData()
    console.log(res)
    if (res.success === true) {
      this.bannerList = res.data.list[0].icon_list
      this.navList = res.data.list[2].icon_list
      this.activList = res.data.list[3].product_list
      this.likeList = res.data.list[12].product_list
      this.showLoading = false
      showBack(status => {
        this.showTop = status
      })
    }
  },
  methods: {
    scrollToTop() {
      // 做缓动动画返回顶部
      animate(document.documentElement || document.body, { scrollTop: "0" }, 400, "ease-out")
    }
  }
}
</script>
<style lang="less" scoped>
#home {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  margin-bottom: 4rem;
}
</style>
