<template>
  <div id="mine" v-if="userInfo.token">
    <van-nav-bar title="我的" :fixed="true" :border="false" />
    <van-cell-group style="margin-top:2.3rem;">
      <van-cell style="background-color:#3bba63; color:#FFF;">
        <template slot="title">
          <div class="personMsg">
            <img class="iconImage" src="./images/yjh.png" alt="" />
            <div class="personInfo">
              <span>小朵</span>
              <span>手机号：15917338992</span>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="label" title="我的订单" value="查看所有订单" is-link />
    </van-cell-group>

    <van-grid :column-num="4">
      <van-grid-item
        v-for="(item, index) in orderData"
        :key="index"
        :icon="item.icon"
        :text="item.title"
      />
    </van-grid>

    <!--我的优惠券-->
    <van-cell-group style="margin-top: 0.4rem">
      <van-cell
        title="我的优惠券"
        icon="gold-coin"
        value="1张"
        is-link
      ></van-cell>
      <van-cell title="我的收货地址" icon="todo-list" is-link></van-cell>
    </van-cell-group>
    <!--联系客服-->
    <van-cell-group style="margin-top: 0.4rem">
      <van-cell
        title="联系客服"
        icon="phone"
        value="客服时间 07:00-22:00"
        is-link
      ></van-cell>
      <van-cell title="意见反馈" icon="smile-comment" is-link></van-cell>
    </van-cell-group>
    <!--小撩买菜-->
    <van-cell-group style="margin-top: 0.4rem">
      <van-cell
        title="小撩买菜"
        icon="gift-card"
        value="下载APP体验更佳"
        is-link
      ></van-cell>
    </van-cell-group>
  </div>
   <SelectLogin v-else />
</template>

<script>
import { mapState } from "vuex"
import SelectLogin from './../../views/login/SelectLogin'
export default {
  name: "Mine",
  components: {
    SelectLogin
  },
  props: {},
  data() {
    return {
      orderData: [
        { icon: "cart-circle-o", title: "待支付" },
        { icon: "gift-o", title: "待收货" },
        { icon: "smile-comment-o", title: "待评价" },
        { icon: "cash-back-record", title: "售后/退款" }
      ]
    }
  },
  computed: {
    ...mapState(["userInfo"])
  }
}
</script>
<style lang="less" scoped>
#mine {
  width: 100%;
  height: 100%;
}
.van-nav-bar {
  background-color: #3bba63;
}
.van-nav-bar__title {
  color: white;
  font-size: 1rem;
}
.personMsg {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.personMsg > img {
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  border: 0.12rem solid #fff;
}

.personInfo {
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;
}
.van-cell__left-icon {
  color: rgba(255, 157, 0, 0.801);
  font-size: 1.1rem;
}
</style>
