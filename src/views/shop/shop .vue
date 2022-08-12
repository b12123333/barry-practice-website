<template>
  <div class="wrapper">
    <div class= 'search'>
        <div
          class="search__back icofont-rounded-left"
          @click="handleBackClick"></div>
        <div class="search__content">
          <span class="icofont-search"></span>
          <input class="search__content__input" placeholder="請輸入商品名稱">
        </div>
    </div>
    <shopinfo :item="item" :hideBorder= "true" v-show="item.imgUrl"/>
    <shopcontent :shopName="item.name"/>
    <cart />
  </div>
</template>
<script>
import shopinfo from '../../components/shopinfo'
import shopcontent from './content'
import cart from './Cart'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import { reactive, toRefs } from 'vue'

// 當前商家頁面
const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result.errno === 0 && result.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

// 回上一頁按鈕邏輯
const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return handleBackClick
}

export default {
  name: 'shop',
  components: { shopinfo, shopcontent, cart },
  setup () {
    const { item, getItemData } = useShopInfoEffect()
    const handleBackClick = useBackRouterEffect()
    getItemData()
    return { item, handleBackClick }
  }
}
</script>

<style lang='scss' scoped>
.wrapper {
    padding: 0 .18rem;
}
.search {
    height: .32rem;
    margin: .14rem 0 .04rem 0;
    display: flex;
    &__back {
        width:.3rem;
        font-size: .24rem;
        color: #B6B6B6;
    }
    &__content{
        display: flex;
        flex:1;
        background: #F5F5F5;
        border-radius: .16rem;
        &__input{
          display:block;
          width:100%;
          position:relative;
          top:.02rem;
          left:.15rem;
          border: none;
          outline: none;
          background: none;
          height: .32rem;
          color: #333;
          font-size: .14rem;
          &::placeholder{
            color: #333;
          }
        }
    }
}
.icofont-rounded-left{
    font-size:.3rem;
    color: #B6B6B6;
}
.icofont-search {
    font-size:.2rem;
    position: relative;
    top:.08rem;
    left:.1rem;
    color: #B7B7B7;
}
</style>
