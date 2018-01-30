<template>
    <li class="nav-item  ">
        <a href="javascript:;" class="nav-link " v-bind:class="{'nav-toggle':menu.ChildItems.length>0}" @click="menuClickEvent(menu)">
            <i class="icon-diamond"></i>
            <span class="title">{{menu.name}}</span>
            <span class="arrow" v-if="menu.ChildItems.length>0"></span>                    
        </a>
        <ul class="sub-menu" v-if="menu.ChildItems.length>0">
          <myMenuItem v-for="item in menu.ChildItems" :key="item.code" :menuList="item.ChildItems" :menu="item"></myMenuItem>
        </ul>
    </li>
</template>

<script>
export default {
  name: "myMenuItem",
  props: {
    menuList: Array, //集合数据
    menu: Object //明细项
  },
  methods: {
    menuClickEvent: function(menu) {
      console.log("<============ myMenuItem Click =============>");
      console.log(JSON.stringify(menu));
      // if (menu.ChildItems.length > 0) {
      //   for (let i = 0; this.children.length > 0; i++) {
      //     this.childMenus.pop(i);
      //   }
      //   menu.ChildItems.forEach(key => {
      //     this.childMenus.push(key);
      //   });
      // }
    }
  }
};
</script>

