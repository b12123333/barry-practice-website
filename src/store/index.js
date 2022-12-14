import Vuex from 'vuex'
const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}
const getLocaCartList = () => {
  // { shopId: {shopName:'', productList:{ productId: {} }}}
  if (localStorage.cartList) {
    return JSON.parse(localStorage.cartList)
  } else { return {} }
}

export default Vuex.createStore({
  state: {
    // { shopId: {shopName:'', productList:{ productId: {} }}}
    cartList: getLocaCartList()
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      // const { shopId, productId, productInfo } = payload
      // const shopInfo = state.cartList[shopId] || {}
      const { shopId, productId, productInfo } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      let product = shopInfo.productList[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count = product.count + payload.num
      if (payload.num > 0) { product.check = true }
      if (product.count < 0) { product.count = 0 }
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
      // 原本product沒有check，!product.check使其賦值為ture
      setLocalCartList(state)
    },
    cleanCartProducts (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalCartList(state)
    },
    // 全選點擊後，將所有商品內容的product.check改為true
    setCartItemsChecked (state, payload) {
      const { shopId } = payload
      const products = state.cartList[shopId].productList
      if (products) {
        for (const key in products) {
          const product = products[key]
          product.check = true
        }
      }
      setLocalCartList(state)
    },
    ClearCartData (state, shopId) {
      state.cartList[shopId].productList = {}
      setLocalCartList(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
