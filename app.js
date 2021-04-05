var app = new Vue({
  el: '#app',
  data: {
    user: '',
    products: ['Pizza', 'Cheese', 'Tacos', 'Hamburger'],
    commandes: []
  },
  methods: {
    commander: () => {
      console.log('ok')
    }
  }
})