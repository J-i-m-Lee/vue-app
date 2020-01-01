<template>
  <div id="dashBoard">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />

    <van-tabbar v-model="active" active-color="#75a342">
      <van-tabbar-item replace to="/dashboard/home">
        <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? home_icon.active : home_icon.inactive"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/category">
        <span>分类</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? category_icon.active : category_icon.inactive"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/cart" :info="dataNum>0?dataNum:''">
        <span>购物车</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? cart_icon.active : cart_icon.inactive"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/mine">
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? mine_icon.active : mine_icon.inactive"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
export default {
  name: "DashBoard",
  components: {},
  props: {},
  data() {
    return {
      active: Number(sessionStorage.getItem("activeIndex")) || 0,
      home_icon: {
        inactive: require("@/images/tabbar/home_default.png"),
        active: require("@/images/tabbar/home_selected.png")
      },
      category_icon: {
        inactive: require("@/images/tabbar/category_default.png"),
        active: require("@/images/tabbar/category_selected.png")
      },
      cart_icon: {
        inactive: require("@/images/tabbar/shoppingcart_default.png"),
        active: require("@/images/tabbar/shoppingcart_selected.png")
      },
      mine_icon: {
        inactive: require("@/images/tabbar/mine_default.png"),
        active: require("@/images/tabbar/mine_selected.png")
      }
    }
  },
  mounted() {
    this.INIT_SHOP_CART()
  },
  computed: {
    ...mapState(["shopCart"]),
    dataNum() {
      if (this.shopCart) {
        let num = 0
        Object.values(this.shopCart).forEach(item => {
          num += item.num
        })
        return num
      } else {
        return 0
      }
    }
  },
  methods: {
    ...mapMutations(["INIT_SHOP_CART"])
  },
  watch: {
    active(value) {
      sessionStorage.setItem("activeIndex", value)
    }
  }
}
</script>
<style lang="less" scoped>
#dashBoard {
  width: 100%;
  height: 100%;
  background-color: #ffff00;
}
</style>
