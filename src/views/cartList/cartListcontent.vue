<template>
    <div class="products" v-if="titleShow">
        <div class="products__title">
            {{ shopName }}
        </div>
        <div class="products__wrapper">
            <div class="products__list">
                <template v-for="item in productList" :key="item._id">
                    <div class="product__item">
                        <img class="product__item__img" :src="item.imgUrl">
                        <div class="product__item__detail">
                            <h4 class="product__item__title">{{ item.name }}</h4>
                            <p class="product__item__price">
                                <span class="product__item__yen">&yen;{{ item.price }} x {{ item.count }}</span>
                                <span class="product__item__total">
                                    <span class="product__item__yen">&yen;</span>
                                    {{ (item.price * item.count).toFixed(2) }}
                                </span>
                            </p>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { useCommonCartEffect } from '../../effect/cartEffects'
import { ref } from 'vue'

export default {
  name: 'cartListcontent',
  props: ['shopId'],
  setup (props) {
    const { shopName, productList } = useCommonCartEffect(props.shopId)
    console.log(JSON.stringify(productList.value) === '{}')
    const titleShow = ref(false)
    if (JSON.stringify(productList.value) === '{}') {
      titleShow.value = false
    } else {
      titleShow.value = true
    }
    return { shopName, productList, titleShow }
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
        margin: 0 .05rem;
        position: relative;
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
</style>
