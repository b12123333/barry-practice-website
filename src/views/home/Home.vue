
<template>
  <div class='wrapper'>
    <StaticPart />
    <Near />
  </div>
  <Docker :currentIndex="0"/>
</template>

<script>
import StaticPart from './StaticPart'
import Near from './Near '
import Docker from './Docker '
export default {
  name: 'App-home',
  components: { StaticPart, Near, Docker }
}
</script>
<style lang="scss" scpoed>
.wrapper{
  overflow-y:auto;
  position:absolute;
  left:0;
  top:0;
  bottom:.5rem ;
  right:0;
  padding:0 .18rem;
}
</style>
