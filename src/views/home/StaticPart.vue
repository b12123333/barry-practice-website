
<template>
    <div class="position">
      <i class="icofont-location-pin"></i>
      北京理工大學國防科技園2號樓10層
      <i class="icofont-bell-alt"></i>
    </div>
    <div>
      <i class="icofont-search"></i>
      <input id="search" type="text" placeholder="山姆會員商店優惠商品">
    </div>
    <div class="banner">
      <img class="banner__image" src="http://www.dell-lee.com/imgs/vue3/banner.jpg">
    </div>
    <div class="icons">
      <div
        class="icons__item"
        v-for="item in iconList"
        :key="item.index">
        <img class="icons__item__img" :src="item.imgUrl">
        <p class="icons__item__desc">{{item.desc}}</p>
      </div>
    </div>
    <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  data () {
    const iconList = [{
      id: 1,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
      desc: '超市便利'
    },
    {
      id: 2,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
      desc: '菜市場'
    },
    {
      id: 3,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
      desc: '水果店'
    },
    {
      id: 4,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
      desc: '鮮花綠植'
    },
    {
      id: 5,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
      desc: '醫藥健康'
    },
    {
      id: 6,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/家居.png',
      desc: '家居時尚'
    },
    {
      id: 7,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
      desc: '烘焙蛋糕'
    },
    {
      id: 8,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/签到.png',
      desc: '簽到'
    },
    {
      id: 9,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
      desc: '免運'
    },
    {
      id: 10,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/红包.png',
      desc: '紅包套餐'
    }
    ]
    return { iconList }
  }
}
</script>

<style lang="scss" scpoed>
.position{
  color: #333;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  position:relative;
  padding: .16rem .24rem .16rem;
  line-height: .22rem;
  font-size: .16rem;
  .icofont-location-pin{
    position: relative;
    top:.01rem;
    margin-right:.08rem;
    font-size:.2rem;
  }
  .icofont-bell-alt{
    position: absolute;
    top: .17rem;
    right: 0;
    font-size:.2rem;
  }
}
.icofont-search{
  position:relative;
  left:.65rem;
  font-size: .15rem;
}
#search{
  line-height:.32rem;
  background:#F5F5F5;
  color:#B7B7B7;
  border-radius:.16rem;
  font-size:.14rem;
  padding-left:.3rem;
  margin-left:.4rem;
  width:2rem;
}
.banner{
  height:0;
  overflow:hidden;
  padding-bottom:31.2%;
  &__image{
    width:100%;
    padding-top:.16rem;
  }
}
.icons{
  display:flex;
  flex-wrap:wrap;
  margin-top:.16rem;
  &__item{
    width:20%;
    &__img{
      display:block;
      width:.4rem;
      height:.4rem;
      margin:0 auto;
    }
    &__desc{
      margin:.06rem 0 .16rem 0;
      text-align: center;
      color:#333;
    }
  }
}
.gap{
  height:.1rem;
  background:#F1F1F1 ;
  margin:0 -.18rem;
}
</style>
