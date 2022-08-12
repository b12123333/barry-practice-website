<template>
    <div class="order">
        <div class="order__price">實付金額 <b>&yen; {{ calculations.price }}</b></div>
        <div class="order__btn" @click="handleSummitOrder(true)">提交訂單</div>
    </div>
    <div class="mask" v-show="showConfirm" @click="handleSummitOrder(false)">
        <div class="mask__content" @click.stop>
            <h3 class="mask__content__title">確認要離開收銀</h3>
            <p class="mask__content__desc">完成支付，否則將取消訂單</p>
            <div class="mask__content__btns">
                <div
                 class="mask__content__btn mask__content__btn--first"
                 @click='() => handleConfirmOrder(true)'>取消訂單
                </div>
                <div
                 class="mask__content__btn mask__content__btn--last"
                 @click='() => handleConfirmOrder(false)'>確認支付
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useCommonCartEffect } from '../../effect/cartEffects'
import { post } from '../../utils/request'

const useMakeOrderEffect = (shopId, shopName, productList) => {
  const router = useRouter()
  const store = useStore()

  const handleConfirmOrder = async (isCanceled) => {
    const products = []
    for (const i in productList.value) {
      const product = productList.value[i]
      products.push({ id: parseInt(product._id, 10), num: parseInt(product.count, 10) })
    }
    try {
      const result = await post('/api/order', {
        addressId: 1,
        shopId: shopId,
        shopName: shopName.value,
        isCanceled: isCanceled,
        products: products
      })
      if (result.errno === 0) {
        store.commit('ClearCartData', shopId)
        router.push({ name: 'orderList' })
      }
    } catch (e) {
      alert('下單失敗')
    }
  }
  return { handleConfirmOrder }
}
const useShowMaskEffect = () => {
  const showConfirm = ref(false)
  const handleSummitOrder = (status) => {
    showConfirm.value = status
  }
  return { handleSummitOrder, showConfirm }
}

export default {
  name: 'Order',
  setup () {
    const route = useRoute()
    const shopId = parseInt(route.params.id, 10)
    const { calculations, shopName, productList } = useCommonCartEffect(shopId)
    const { handleConfirmOrder } = useMakeOrderEffect(shopId, shopName, productList)
    const { handleSummitOrder, showConfirm } = useShowMaskEffect()
    return { calculations, handleConfirmOrder, handleSummitOrder, showConfirm }
  }
}
</script>

<style lang="scss" scoped>

.products {
    margin: .16rem .18rem .55rem .18rem;
    background: #FFF;
    &__title {
      padding: .16rem;
      font-size: .16rem;
      color: #333;
    }
    &__wrapper {
        overflow-y:scroll;
        margin: 0 .36rem;
        position: absolute;
        left: 0;
        right: 0;
        bottom: .6rem;
        top: 2.6rem;
    }
    &__list {
        background:#FFF;
    }
}

.product {
    &__item {
        position: relative;
        display: flex;
        padding: 0 .16rem .16rem .16rem;
        &__detail {
            flex: 1;
        }

        &__img {
            width: .46rem;
            height: .46rem;
            margin-right: .16rem;
        }

        &__title {
            line-height: .2rem;
            font-size: .14rem;
            color: #333;
            margin: 0;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        &__price {
            display: flex;
            margin: .06rem 0 0 0;
            font-size: .14rem;
            color: #000;
            line-height: .2rem;
        }

        &__total {
            flex: 1;
            text-align: right;
            color: #E93B3B;
        }

        &__yen {
            font-size: .12rem;
        }
    }
}
.order{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    height: .49rem;
    line-height: .49rem;
    background: #fff;
    &__price{
        flex: 1;
        text-indent: .24rem;
        font-size: .14rem;
        color: #333;
    }
    &__btn{
        width: .98rem;
        background: #4FB0F9;
        color: #fff;
        text-align: center;
        font-size: .14rem;
    }
}
.mask {
    z-index: 1;
    position:absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0,0,0,0.5);
    &__content {
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        width: 3rem;
        height: 1.56rem;
        background: #FFF;
        text-align: center;
        border-radius: .04rem;
        &__title{
            font-size: .18rem;
            color:#333;
            margin: .24rem 0 0 0;
            line-height: .26rem;
        }
        &__desc {
            margin: .08rem 0 0 0;
            font-size: .14rem;
            color: #666666;
        }
        &__btns{
            display:flex;
            margin: .24rem .58rem;
        }
        &__btn {
            flex: 1;
            width: .8rem;
            line-height: .32rem;
            border: .01rem solid #4fb0f9;
            border-radius: .16rem;
            font-size: .14rem;
            &--first{
                margin-right: .12rem;
                border: .01rem solid #4fb0f9;
                color: #4fb0f9;
            }
            &--last{
                margin-left: .12rem;
                background: #4fb0f9;
                color: #fff;
            }
        }
    }
}

</style>
