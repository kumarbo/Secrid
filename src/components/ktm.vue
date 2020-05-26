<template>
 <div class="wrapper">
      <div class="inner">
        <div></div>
        <div class="firstb">
         <img src="../assets/arrows.svg" v-on:click="second">
        </div>
        <div></div>
      </div>


      <div >
        

            <img v-bind:src="'src/assets/'+images[n]">
        
       
        
      </div>


      <div class="inner">
        <div></div>
        <div class="secondb">
    
     <img src="../assets/directional.svg" v-on:click="first">
        </div>
   
      <div></div>
      </div>
 </div>
</template>

<script>
export default {
  
  data () {
    return {
      images:['k1.jpg','k2.jpg','k3.jpg','k4.jpg'],
      n:"0"
    
    }
  },
  methods:{
       first:function(){
        

         
         this.n++;
         if(this.n==4){
           this.n--;
         }
        
        
},
  second:function(){
    this.n--;
    if(this.n<0){
      this.n++;
    }
  }
}
}
</script>

<style scoped lang="scss">

.wrapper{
 display:grid;
 grid-template-columns:1fr 3fr  1fr;
grid-auto-rows: minmax(50px,auto);
margin-top:40px;
margin-bottom:60px;
div{
  img{
    height:100%;
    width:100%;
   
    
  }
}
.inner{
  display:grid;
  grid-template-rows:2fr 1fr 2fr;
  .firstb{
      img{
        float:right;
        margin-right:20px;
        margin-top:20px;
        height:30px;
        width:30px;
         
        
      }
  }
  .secondb{
    img{
      margin-left:20px;
      margin-top:20px;
      height:30px;
      width:30px;
      
    }
  }

}
}
</style>