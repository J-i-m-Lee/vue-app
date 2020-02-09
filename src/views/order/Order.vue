<template>
  <div id="order">
    <van-nav-bar
      title="填写订单"
      left-arrow
      :fixed="true"
      :border="true"
      @click-left="$router.back()"
    />
    <van-contact-card
      type="add"
      add-text="选择收货地址"
      @click="chooseAddress"
      style="margin-top: 3rem"
    ></van-contact-card>

    <transition name="router-slider" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Order",
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {
    chooseAddress() {
      this.$router.push("/confirmOrder/myAddress")
    }
  }
}
</script>
<style lang="css" scoped>
#order {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
/*转场动画*/
.router-slider-enter-active,
.router-slider-leave-active {
  transition: all 0.3s;
}

.router-slider-enter,
.router-slider-leave-to {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
</style>
