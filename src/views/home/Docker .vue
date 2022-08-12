
<template>
  <div class="docker">
    <span
    v-for="( item, index ) in dockerList"
    :key="item.icon"
    :class="{'docker__item':true, 'docker__item--active':index===currentIndex}"
    >
      <router-link :to="item.to">
        <div :class="item.icon"></div>
        <div class="docker__title">{{item.text}}</div>
      </router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: 'AppDocker',
  props: ['currentIndex'],
  data () {
    const dockerList = [
      { icon: 'icofont-home', text: '首頁', to: { name: 'home' } },
      { icon: 'icofont-shopping-cart', text: '購物車', to: { name: 'CartList' } },
      { icon: 'icofont-file-text', text: '訂單', to: { name: 'orderList' } },
      { icon: 'icofont-user', text: '我的帳戶', to: { name: 'home' } }
    ]
    return { dockerList }
  }
}
</script>
<style lang="scss" scpoed>
@mixin icon{
  font-size:.2rem;
  margin:0.07rem 0 0.02rem 0;
}
.docker{
  color: #333;
  display:flex;
  position:absolute;
  box-sizing:border-box;
  padding: 0 .18rem;
  left:0;
  bottom:0;
  width: 100%;
  height: 0.49rem;
  border-top: .01rem solid #F1F1F1;
  &__title{
      font-size:.2rem;
      transform:scale(.5);
      transform-origin:center top;
  }
  &__item{
    flex:1;
    text-align: center;
    a {
      color:#333;
      text-decoration: none;
    }
    .icofont-home {
      @include icon;
    }
    .icofont-shopping-cart{
      @include icon;
    }
    .icofont-file-text{
      @include icon;
    }
    .icofont-user{
      @include icon;
    }
  }
  &__item--active{
    a {
      color:#1FA4FC;
    }
  }
}
</style>
