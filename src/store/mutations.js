import { ADD_GOODS, INIT_SHOP_CART, REDUCE_CART, SELECTED_SINGER_GOODS, SELECTED_All_GOODS,CLEAR_CART } from './mutations-type'
import { setStore, getStore } from '../config/global';
import Vue from 'vue'
export default {
    [ADD_GOODS](state, { goodsId, goodsName, smallImage, goodsPrice }) {
        let shopCart = state.shopCart;
        // 1.1 判断商品是否存在
        if (shopCart[goodsId]) { // 存在
            shopCart[goodsId]['num']++;
        } else { // 不存在
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
            state.shopCart = JSON.parse(initData);
        }
    },
    //减选
    [REDUCE_CART](state, { goodsId }) {
        let shopCart = state.shopCart;
        let goods = shopCart[goodsId];
        if (goods) {
            if (goods.num > 0) {
                goods.num--;
                if (goods['num'] === 0) {
                    delete shopCart[goodsId];
                }
            }
        } else {
            goods = null;
        }
        // 3.2 同步数据
        state.shopCart = { ...shopCart };
        setStore('shopCart', state.shopCart);
    },

    [SELECTED_SINGER_GOODS](state, { goodsId }) {
        let shopCart = state.shopCart;
        let goods = shopCart[goodsId];
        if (goods) {
            if (goods.checked) { // 存在该属性
                goods.checked = !goods.checked;
            } else {
                Vue.set(goods, 'checked', true);
                // goods.checked = true;
            }
            // 4.1 同时数据
            state.shopCart = { ...shopCart };
            setStore('shopCart', state.shopCart);
        }
    },
    //全选
    [SELECTED_All_GOODS](state, { isSelectedAll }) {
        let shopCart = state.shopCart;

        Object.values(shopCart).forEach(goods => {
            if (goods.checked) { // 存在该属性
                goods.checked = !isSelectedAll;
            } else {
                Vue.set(goods, 'checked', !isSelectedAll);
            }
        });
        state.shopCart = {...shopCart};
    },

    [CLEAR_CART](state) {
        state.shopCart = null;
        state.shopCart = { ...state.shopCart };
        setStore('shopCart', state.shopCart);
    }




}