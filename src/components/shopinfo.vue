<template>
  <div class="shop">
    <img class="shop__img" :src="item.imgUrl">
    <div
      :class="{'shop__content':true, 'shop__content--bordered': hideBorder ? false:true}">
        <div class="shop__content__title">{{item.name}}</div>
            <div class="shop__content__tags">
                <span class="shop__content__tag">
                  月售: {{item.sales}}
                </span>
                <span class="shop__content__tag">
                  起送: {{item.expressLimit}}
                </span>
                <span class="shop__content__tag">
                  基礎運費: {{item.expressPrice}}
                </span>
            </div>
            <div class="shop__content__hightlight">{{item.slogan}}</div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.shop{
  display:flex;
  padding-top:.12rem;
  &__img{
      width:.56rem;
      height:.56rem;
      margin-right:.16rem;
    }
  &__content{
    flex:1;
    padding-bottom:.12rem;
    &--bordered{
      border-bottom:.01rem solid #F1F1F1;
    }
    &__title{
      line-height:.22rem;
      font-size:.16rem;
      color:#333;
    }
    &__tags{
      line-height:.18rem;
      font-size:.13rem;
      color:#333;
      margin-top:.08rem;
    }
    &__tag{
      margin-right:.16rem;
    }
    &__hightlight{
      color:#E93B3B;
      margin:.08rem 0 0 0;
      line-height:.18rem;
      font-size:.13rem;
    }
  }
}
</style>

<script>
export default {
  name: 'shopinfo',
  props: ['item', 'hideBorder']
}
</script>
