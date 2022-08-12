
<template>
    <div class="near">
      <div class="near__title"><h3>附近店鋪</h3></div>
      <router-link :to="`/shop/${item._id}`" v-for="item in nearList" :key="item._id">
        <shopinfo :item="item"/>
      </router-link>
    </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import shopinfo from '../../components/shopinfo'
const useNearListEffect = () => {
  const nearList = ref([])
  const getNearList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result.errno === 0 && result.data.length) {
      nearList.value = result.data
    }
  }
  return { nearList, getNearList }
}
export default {
  name: 'AppNear',
  components: { shopinfo },
  setup () {
    const { nearList, getNearList } = useNearListEffect()
    getNearList()
    return { nearList }
  }
}
</script>

<style lang="scss" scpoed>
.near{
  &__title{
    margin:.16rem 0 .04rem 0;
    font-size:.18rem;
    color:#333;
    font-weight:normal;
  }
  &__item{
    display:flex;
    padding-top:.12rem;
    &__img{
      width:.56rem;
      height:.56rem;
      margin-right:.16rem;
    }
  }
  &__content{
    flex:1;
    padding-bottom:.12rem;
    border-bottom:.01rem solid #F1F1F1;
    &title{
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
