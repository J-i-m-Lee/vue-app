<template>
  <div id="MyAddress">
    <van-nav-bar
      title="我的地址"
      left-arrow
      :fixed="true"
      :border="true"
      @click-left="$router.back()"
    />
    <van-address-list
      style="margin-top: 3rem"
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />

    <transition name="router-slider" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { Toast } from "vant"
export default {
  name: "MyAddress",
  components: {},
  props: {},
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ]
    }
  },

  methods: {
    onAdd() {
      this.$router.push({
        path: "/confirmOrder/myAddress/addAddress"
      })
    },

    onEdit(item, index) {
      this.$router.push({
        path: "/confirmOrder/myAddress/editAddress"
      })
    }
  }
}
</script>
<style lang="css" scoped>
#MyAddress {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
