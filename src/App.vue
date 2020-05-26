<template>
  <div>
    <app-header></app-header>
<router-view></router-view>
<router-view name="a"></router-view>
<router-view name="b"></router-view>
<router-view name="c"></router-view>
<router-view name="d"></router-view>
<router-view name="e"></router-view>

<app-main5></app-main5>
<app-footer></app-footer>



  </div>
  
  
</template>

<script>

import header from './components/header.vue';
import main from './components/main.vue';
import footer from './components/footer.vue';
import main1 from './components/main1.vue';
import main2 from './components/main2.vue';
import main3 from './components/main3.vue';
import main4 from './components/main4.vue';
import blog from './components/blog.vue';
import main5 from './components/main5.vue';


export default {
  
  components:{
    'app-header':header,
    'app-footer':footer,
    'app-main':main,
    'app-main1':main1,
    'app-main2':main2,
    'app-main3':main3,
    'app-main4':main4,
    'app-blog':blog,
    'app-main5':main5
    
  },
 
  data () {
    return {
       a:['kumar','ram','shyam'],
    
       para:"lipulekh"
    }
  },
  methods:{
   
  }
}
</script>

<style scoped>

</style>
