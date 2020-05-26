<template>
 <div class="wrap">
            <div class="first-div">
                <div v-on:click="component='app-ktm'">
                    <span>Kathamandu</span>
                </div>
                <div v-on:click="component='app-bkt'">
                    <span>Bhaktapur</span>
                </div>
        </div>
<!--<button v-on:click="component='app-ktm'">ktm</button>

 <button v-on:click="component='app-bkt'">bkt</button>-->

<div class="second-div">
 
 <component v-bind:is="component"></component>
</div>

  
 </div>
</template>

<script>
import ktm from './components/ktm.vue';
import bkt from './components/bkt.vue';

export default {
   
 components:{
    'app-ktm':ktm,
    'app-bkt':bkt
 },
 data(){
     return{
         component:'app-ktm'
     }
 }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }
  
.wrap{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-auto-rows:minmax(40px,auto);
    grid-template-areas:"firstd firstd" "second second";
    .first-div{
grid-area:firstd;
 display:flex;
    flex-wrap:wrap;
    flex-direction: row;
    justify-content: center;
    div{
          background: black;
    
    text-align: center !important;
    padding: 10px 40px;
    color: white;
    margin-right: 10px;
    margin-top:100px;
    &:hover{
        background:orangered;
        color:black;
        transition:1s ease;
    }
    }
    }
    .second-div{
     grid-area:second;
    }
}
</style>