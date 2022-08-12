<template>
    <div class="top">
        <div class="top__header">
            <span class="top__hearder__icon icofont-rounded-left" @click="handleBackClick"></span>
            <span class="top__hearder__back">確認訂單</span>
        </div>
        <div class="top__receiver">
            <div class="top__receiver__title">收貨地址</div>
            <div class="top__receiver__address">北京理工大學國防科學園2號樓10層</div>
            <div class="top__receiver__info">
                <span class="top__receiver__info__name">蘇先生</span>
                <span class="top__receiver__info__name">0920936276</span>
            </div>
            <div class="top__receiver__icon icofont-rounded-left"></div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'TopArea',
  setup () {
    const router = useRouter()
    const handleBackClick = () => { router.back() }
    return { handleBackClick }
  }
}

</script>

<style lang="scss" scope>
.top {
    position: relative;
    height: 1.96rem;
    background-size: 100% 1.59rem;
    background-image: linear-gradient(0deg, rgba(0, 145, 255, 0.00) 4%, #0091FF 50%);
    background-repeat: no-repeat;

    &__header {
        padding-top: .26rem;
        line-height: .24rem;
        color: #FFF;
        text-align: center;
        font-size: .16rem;

        &__back {
            position: absolute;
            left: .18rem;
        }
    }

    &__receiver {
        position: absolute;
        left: .18rem;
        right: .18rem;
        bottom: 0;
        height: 1.11rem;
        background: #fff;
        border-radius: .04rem;

        &__title {
            padding: .16rem 0 .14rem .16rem;
            font-size: .16rem;
            line-height: .22rem;
            color: #333;
        }

        &__address {
            padding: 0 .4rem 0 .16rem;
            font-size: .14rem;
            color: #333;
            line-height: .2rem;
        }

        &__info {
            padding: .06rem 0 0 .16rem;

            &__name {
                font-size: .12rem;
                color: #666;
                line-height: .18rem;
                margin-right: .06rem;
            }
        }
    }
}

.top__hearder__icon {
    position: absolute;
    left: .1rem;
    font-size: .3rem;
}

.top__receiver__icon {
    position: absolute;
    right: .16rem;
    top: .5rem;
    color: #666;
    font-size: .2rem;
    transform: rotate(180deg);
}
</style>
