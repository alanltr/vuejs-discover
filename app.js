var app = new Vue({
  el: '#app',
  data: {
    user: '',
    products: ['Pizza', 'Cheese', 'Tacos', 'Hamburger'],
    orders: [],
    titleClass: 'display-4'
  },
  methods: {
    makeOrder: function(product) { // TODO: Comprendre pq en ES6 this = Document | ES5 this = Vue
      // console.log(this)

      this.orders.push(product)
    }
  }
})