// Création d'un composant
// 1. Le nom du composant
// 2. Object: 1. template html / 2. props, qui seront injectées dans le html
Vue.component('product-card', {
  template: `
  <div class="col-3">
    <p class="jumbotron">{{ name }}
      <button v-on:click="sendOrder(name)" v-if="role == 'order'">
        Commander
      </button>
    </p>
  </div>
  `,
  props: ['name', 'role'],
  methods: {
    sendOrder: function(product) {
      // Cette fonction $emit va renvoyer vers le composant parent app
      // 1. Le nom de l'évenement émit
      // 2. Le payload de l'émission
      this.$emit('order_received', product)
    }
  }
})

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