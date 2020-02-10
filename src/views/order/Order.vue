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

    <van-cell-group style="margin-top:0.6rem;">
      <van-cell title="送达时间" value="请选择送达时间" is-link />
      <van-cell value="内容" is-link :center="true">
        <template slot="title">
          <img src="./images/detail1.jpg" alt="" style="width:3rem;" />
          <img src="./images/detail1.jpg" alt="" style="width:3rem;" />
          <img src="./images/detail1.jpg" alt="" style="width:3rem;" />
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group style="margin-top:0.6rem;">
      <van-cell title="支付方式" value="微信" is-link />
    </van-cell-group>

    <van-cell-group style="margin-top:0.6rem;">
      <van-cell title="备注">
        <input type="text" placeholder="选填，备注你的需求!" />
      </van-cell>
    </van-cell-group>

    <van-cell-group style="margin-top:0.6rem;">
      <van-cell title="商品金额" value="¥50.30" is-link />
      <van-cell title="配送费" value="¥5.00" is-link />
    </van-cell-group>

    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" label="实付：" />

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
    },
    onSubmit(){
      alert(2);
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
