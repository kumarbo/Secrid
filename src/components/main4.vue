<template>
<div class="wrap">
    <div>
        <a href="#">  <img src="../assets/seo-and-web.svg"></a>
      
        <h4>
            Find a store
        </h4>
    </div>
    <div>
           <a href="#">  <img src="../assets/symbol.svg"></a>
        <h4>
            Product registration
        </h4>
    </div>
    
    <div>
          <a href="#">  <img src="../assets/int.svg"></a>
        <h4>
            User manual
        </h4>
    </div>

    
<div>
          <a href="#">  <img src="../assets/material.svg"></a>
        <h4>
            Our leather
        </h4>
    </div>

</div>
</template>

<script>
export default {
  
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang="scss">
.wrap{
    display:grid;
    grid-template-columns:repeat(4,250px);
    justify-content: center;
    background:#333;
    margin-top:60px;
    div{
        text-align:center;
     
a{

   
 img{
        height:40px;
        width:40px;
        display:block;
            margin-left:auto;
            margin-right:auto;
            margin-top:30px;
            margin-bottom:30px;
    }
}
 h4{
     color:white;
 }
    }
  
}
@media screen and (max-width: 900px){
    .wrap{
        grid-template-columns: repeat(2,1fr) !important;
        margin-top:120px;
    }
}
</style>