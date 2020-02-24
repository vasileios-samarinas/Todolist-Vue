import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
      el: "#app",
      data: {
        todos:["buyshopping","MOT","cleandishes"],
        newItem:""
      },
      methods: {
        saveNewItem: function(){
          this.todos.push(this.newItem);
          this.newItem = "";
        }
      }






    });
  });
  //     },
  //     methods: {
  //       saveNewItem:function(){
  //         this.items.push({
  //           name:this.newItem,
  //           isPurchased:false
  //         });
  //         this.newItem="";
  //       },
  //       buyItem: function(index){
  //         this.items[index].isPurchased =true;
  //         // this.items[index].isPurchased =!this.items[index].isPurchased
  //       }
  //     }
  //   });
  // });
