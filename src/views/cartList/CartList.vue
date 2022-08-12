<template>
  <div class="cart">我的全部購物車</div>
  <div class="wrapper">
    <Content :shopId="1"/>
    <Content :shopId="2"/>
  </div>
  <Docker :currentIndex="1" />
</template>

<script>
import Docker from '../home/Docker '
import Content from './cartListcontent'

export default {
  name: 'CartList',
  components: { Docker, Content }
}
</script>

<style lang="scss" scoped>
.cart {
  margin-top: .1rem;
  text-align: center;
  font-size: .2rem;
  background: #fff;
}
.wrapper{
  overflow-y:auto;
  position:absolute;
  left:0;
  top:.5rem;
  bottom:.5rem ;
  right:0;
  padding:0 .18rem;
  background: rgb(248, 248,248);
  z-index: -1;
}

</style>
