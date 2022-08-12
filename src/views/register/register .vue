<template>
  <div class="wrapper">
    <img
    class="wrapper__img"
    src="http://www.dell-lee.com/imgs/vue3/user.png">
    <div class="wrapper__input">
        <input
          class="wrapper__input__content"
          placeholder="請輸入帳號"
          v-model='data.username'/>
    </div>
    <div class="wrapper__input">
        <input
          class="wrapper__input__content"
          placeholder="請輸入密碼"
          type='password'
          autocomplete="new-password"
          v-model='data.password'/>
    </div>
    <div class="wrapper__input">
      <input
          class="wrapper__input__content"
          placeholder="確認密碼"
          type='password'
          autocomplete="new-password"
          v-model='data.ensurement'/>
    </div>
    <div class="wrapper__register-button" @click="handleRegister">註冊</div>
    <router-link to= "/login" >
    <div class="wrapper__register-link">已註冊帳號</div>
    </router-link>
    <a-alert class="alert" v-if='data.showToast' message="註冊失敗" type="error" />
    <a-alert class="alert" v-if='data.showToastPassword' message="確認密碼與密碼不同" type="error" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { post } from '../../utils/request'

export default {
  name: 'App-register',
  data () {
    const router = useRouter()
    const data = reactive({
      username: '',
      password: '',
      ensurement: '',
      showToastPassword: false,
      showToast: false
    })
    const handleRegister = async () => {
      try {
        const result = await post('/api/user/register', {
          username: data.username,
          password: data.password
        })
        if (result.errno === 0 && data.password === data.ensurement) {
          router.push({ name: 'login' })
        } else if (data.password !== data.ensurement) {
          data.showToastPassword = true
          setTimeout(() => {
            data.showToastPassword = false
          }, 2000)
        }
      } catch (e) {
        data.showToast = true
        setTimeout(() => {
          data.showToast = false
        }, 2000)
      }
    }
    return { handleRegister, data }
  }
}

</script>

<style lang='scss' scoped>
.router-link-active{
  text-decoration:none;
}
a{
  text-decoration:none;
}
.alert {
  width: 60%;
  margin: -1.8rem auto;
}
.wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    &__img{
        width:.66rem;
        height: .66rem;
        display: block;
        margin: 0 auto .4rem;
    };
    &__input{
        background: #F9F9F9;
        padding: 0 .16rem;
        height: .48rem;
        border: .01rem solid rgba(0,0,0,0.1);
        border-radius: .06rem;
        margin: 0 .4rem .16rem .4rem;
        font-size: .16rem;
        &__content{
            background: none;
            border: none;
            outline: none;
            line-height:.48rem;
            width: 100%;
            color: #777;
            &::placeholder{
                color: rgba(0,0,0,0.5);
            }
        }
    }
    &__register-button {
        background: #0091FF;
        box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
        border-radius: .04rem;
        color: #FFF;
        margin: .32rem .4rem .16rem .4rem;
        height: .48rem;
        line-height: .48rem;
        font-size: .16rem;
        text-align: center;
    }
    &__register-link {
        font-size: .12rem;
        color:#777;
        text-align: center;
    }
}

</style>
