<template>
  <div class="content">
    <div class="category">
      <div
       :class="{'category__item': true, 'category__item--active': currentTab=== item.tab}"
       v-for="item in categories"
       :key="item.name"
       @click= "() => handleTabClick(item.tab)">
       {{item.name}}
       </div>
    </div>
    <div class="product">
      <div
       class="product__item"
       v-for="item in list"
       :key="item._id">
        <img class="product__item__img" :src="item.imgUrl">
        <div class="product__item__detail">
            <h4 class="product__item__title">{{item.name}}</h4>
            <p class="product__item__sales">月售{{item.sales}}份</p>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{item.price}}
              <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
            </p>
        </div>
        <div class="product__number">
          <span
           class="product__number__minus"
           @click="() => { changeCartItem(shopId, item._id, item, -1, shopName) }">
           -</span>
          <span class="product__number__count">{{getProductCartCount(shopId, item._id)}}</span>
          <span
           class="product__number__plus"
           @click="() => { changeCartItem(shopId, item._id, item, 1, shopName) }">
           +</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { get } from '../../utils/request'
import { useStore } from 'vuex'
import { useCommonCartEffect } from '../../effect/cartEffects'

const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '秒殺', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit' }
]

// Tab 切換項目
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleTabClick = (tab) => {
    currentTab.value = tab
  }
  return { currentTab, handleTabClick }
}

// 商品內容取得
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({ list: [] })
  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value
    })
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data
    } // ?.當數據不存在會返回undefine而不報錯
  }
  // 監聽currentTab的變化，點擊時發生改變進而再次請求api
  watchEffect(() => { getContentData() })
  // 進行解構，使用toRefs使響應姓資料保有響應功能
  const { list } = toRefs(content)
  return { list }
}

// 購物車
const useCartEffect = () => {
  const store = useStore()
  const { cartList, changeCartItemInfo } = useCommonCartEffect()
  const changeShopName = (shopId, shopName) => {
    store.commit('changeShopName', { shopId, shopName })
  }
  const changeCartItem = (shopId, productId, item, num, shopName) => {
    changeCartItemInfo(shopId, productId, item, num)
    changeShopName(shopId, shopName)
  }
  const getProductCartCount = (shopId, productId) => {
    return cartList[shopId]?.productList?.[productId]?.count || 0
  }
  return { cartList, changeCartItem, getProductCartCount }
}

export default {
  name: 'Content',
  props: ['shopName'],
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { currentTab, handleTabClick } = useTabEffect()
    const { list } = useCurrentListEffect(currentTab, shopId)
    const { changeCartItem, cartList, getProductCartCount } = useCartEffect()
    return {
      categories, currentTab, handleTabClick, list, shopId, changeCartItem, cartList, getProductCartCount
    }
  }
}

</script>

<style lang="scss" scoped>
.content{
    display:flex;
    position:absolute;
    left:0;
    right:0;
    top:1.5rem;
    bottom:.5rem;
}
.category{
    width:.76rem;
    height: 100%;
    background: #F5F5F5;
    overflow-y: scroll;
    &__item{
      line-height:.4rem;
      text-align:center;
      font-size:.14rem;
      color:#333;
      &--active{
        background:#FFF;
      }
    }
}
.product{
    flex:1;
    overflow-y:scroll;
    &__item{
      position: relative;
      display:flex;
      padding: .12rem 0;
      margin: 0 .16rem;
      border-bottom: .01rem solid #F1F1F1;
      overflow:hidden;
      &__img{
        width:.68rem;
        height:.68rem;
        margin-right:.16rem;
      }
      &__title{
        line-height:.2rem;
        font-size:.14rem;
        color:#333;
        margin: 0;
        }
      &__sales{
        margin: .06rem 0;
        font-size:.12rem;
        color:#333;
        line-height:.16rem;
        }
      &__price{
        margin: 0;
        font-size:.14rem;
        color:#E93B3B;
        line-height:.2rem;
        }
      &__yen{
        font-size: .12rem;
      }
      &__origin{
        margin-left: .06rem;
        line-height: .2rem;
        font-size: .12rem;
        color: #999;
        text-decoration: line-through;
      }
    }
    &__number{
        position:absolute;
        right:0rem;
        bottom:.12rem;
        &__count{
          font-size: .15rem;
        }
        &__minus,
        &__plus{
            width:.2rem;
            height:.2rem;
            display:inline-block;
            border-radius: 50%;
            border: .01rem solid #666;
            font-size: .2rem;
            text-align: center;
            line-height:.16rem;
        }
        &__minus{
            border: .01rem solid #666;
            color: #666;
            margin-right: .1rem;
        }
        &__plus{
            background:#0091FF;
            color:#FFF;
            margin-left: .1rem;
        }
    }
}
</style>
