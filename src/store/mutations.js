import { ADD_GOODS, INIT_SHOP_CART,REDUCE_CART } from './mutations-type'
import {setStore,getStore} from '../config/global';

export default {
    [ADD_GOODS](state, {goodsId, goodsName, smallImage, goodsPrice}) {
        let shopCart = state.shopCart;
          // 1.1 判断商品是否存在
          if(shopCart[goodsId]){ // 存在
              shopCart[goodsId]['num']++;
          }else { // 不存在
              shopCart[goodsId] = {
                  "num": 1,
                  "id": goodsId,
                  "name": goodsName,
                  "small_image": smallImage,
                  "price": goodsPrice,
                  "checked": true
              }
          }
          // 1.2  产生新对象
        state.shopCart = { ...shopCart };
        setStore('shopCart', state.shopCart);
    },

    [INIT_SHOP_CART](state) {
        let initData = getStore('shopCart');
        if (initData) {
            state.shopCart  = JSON.parse(initData);
        }
    },

    [REDUCE_CART](state, {goodsId}) {
        let shopCart = state.shopCart;
        let goods = shopCart[goodsId];
        if (goods) {
            if (goods.num>0) {
                goods.num--;
                if(goods['num'] === 0){
                    delete shopCart[goodsId];
                }
            }
        }else {
            goods = null;
        }
        // 3.2 同时数据
        state.shopCart = {...shopCart};
        setStore('shopCart', state.shopCart);
    }

}