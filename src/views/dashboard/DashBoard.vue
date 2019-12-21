<template>
  <div id="dashBoard">
    <router-view></router-view>

    <van-tabbar v-model="active" active-color="#75a342" >
      <van-tabbar-item replace to="/dashboard/home">
        <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? home_icon.active : home_icon.inactive"
        >
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/category">
        <span>分类</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? category_icon.active : category_icon.inactive"
        >
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/cart">
        <span>购物车</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ?  cart_icon.active :  cart_icon.inactive"
        >
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/mine">
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? mine_icon.active : mine_icon.inactive"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "DashBoard",
  components: {},
  props: {},
  data() {
    return {
      active: 0,
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
    };
  }
};
</script>
<style lang="less" scoped>
#dashBoard {
  width: 100%;
  height: 100%;
  background-color: #ffff00;
}
</style>