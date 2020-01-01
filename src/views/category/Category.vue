<template>
  <div id="category">
    <Header />
    <div class="listWrapper" v-if="!showLoading">
      <!--左边-->
      <div class="leftWrapper">
        <ul class="wrapper">
          <li
            class="categoryItem"
            v-for="(item, index) in categories"
            :key="item.id"
            :class="{ selected: currentItem === index }"
            @click="clickItem(index)"
            ref="menuList"
          >
            <span class="textWrapper">{{ item.name }}</span>
          </li>
        </ul>
      </div>

      <ContentView :categoriesDetailData="categoriesDetail" />
    </div>
    <van-loading
      size="24px"
      vertical
      v-else
      color="#75a342"
      style="position: relative; top: 50%; transform:translateY(-50%)"
      >加载中...</van-loading
    >
  </div>
</template>

<script>
import BScroll from "better-scroll"
import { getCategories, getCategoriesDetail } from "../../service/api/index"
import Header from "./components/Header"
import ContentView from "./components/ContentView"

import PubSub from "pubsub-js"
import { mapMutations, mapState } from "vuex"
import { Toast } from "vant"
export default {
  name: "Category",
  components: {
    Header,
    ContentView
  },
  props: {},
  data() {
    return {
      showLoading: true,
      categories: [],
      categoriesDetail: [],
      currentItem: 0
    }
  },
  created() {
    this.initData()
  },
  mounted() {
    // 订阅消息（添加到购物车的消息）
    PubSub.subscribe("categoryAddToCart", (msg, goods) => {
      if (msg === "categoryAddToCart") {
        this.ADD_GOODS({
          goodsId: goods.id,
          goodsName: goods.name,
          smallImage: goods.small_image,
          goodsPrice: goods.price
        })
        Toast({
          message: "添加到购物车成功！",
          duration: 800
        })
      }
    })
  },
  methods: {
    ...mapMutations(["ADD_GOODS"]),
    async initData() {
      let leftData = await getCategories()
      console.log(leftData)
      if (leftData.success) {
        this.categories = leftData.data.cate
      }
      let rightData = await getCategoriesDetail("/lk001")
      if (rightData.success) {
        this.categoriesDetail = rightData.data.cate
      }
      this.showLoading = false
      this.$nextTick(() => {
        this.leftSroll = new BScroll(".leftWrapper", { probeType: 3 })
      })
    },
    async clickItem(index) {
      this.currentItem = index
      let el = this.$refs.menuList[index]
      this.leftSroll.scrollToElement(el, 300)
      let rightData = await getCategoriesDetail(`/lk00${index + 1}`)
      if (rightData.success) {
        this.categoriesDetail = rightData.data.cate
      }
    }
  }
}
</script>
<style lang="css" scoped>
#category {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
}

.listWrapper {
  display: flex;
  position: absolute;
  top: 2.75rem;
  bottom: 3rem;
  width: 100%;
  overflow: hidden;
}

.leftWrapper {
  background-color: #f4f4f4;
  width: 5.3125rem;
  flex: 0 0 5.3125rem;
}

.categoryItem {
  padding: 0.75rem 0;
  border-bottom: solid 1px #e8e9e8;
  position: relative;
}

.categoryItem .textWrapper {
  line-height: 1.25rem;
  border-left: solid 0.1875rem transparent;
  padding: 0.3125rem 0.6875rem;
  font-size: 0.8125rem;
  color: #666666;
}

.categoryItem.selected {
  background: #fff;
}

.categoryItem.selected .textWrapper {
  border-left-color: #3cb963;
  font-weight: bold;
  font-size: 0.875rem;
  color: #333333;
}

@media (min-width: 960px) {
  .wrapper {
    border-right: 1px solid #e8e9e8;
  }

  .wrapper .categoryItem {
    background: #fff;
  }
}
</style>
