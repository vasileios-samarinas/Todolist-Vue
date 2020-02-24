import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
      el: "#app",
      data: {
        todos:[{name:"buyshopping",Priority:"low" },{name:"MOT",Priority:"high"},
        {name:"cleandishes",Priority:"high"}],
        newItem:""},

      methods: {
        saveNewItem: function(){
          this.todos.push({
            name:this.newItem,
            Priority:"Low"
          });
          this.newItem="";
        }
      }
});
})
      //
      // data: {
      //   items: [ //MODIFIED
      //     {name: "Milk", isPurchased: false},
      //     {name: "Cheese", isPurchased: true},
      //     {name: "Beans", isPurchased: false},
      //   ],
      //   newItem: ""
      // },
