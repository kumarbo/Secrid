<template>
<div class="main1">
  <div>
    <h3>Featured Collections</h3>
    <span id="view">View all</span>
  
  </div>


    <div >
      <div>
    
  
         <img v-bind:src="'src/assets/'+first.image"> 
         <h5>POWDER</h5>
         <span>A new step tpwards zero-waste</span>
         </div>

      
    </div>

      <div >
        <div>
        <img v-bind:src="'src/assets/'+first.pic"> 
         <h5>YARD</h5>
         <span>A technical replacdement for leather</span>
        </div>
         
    </div>

  <div >

        <div>
      <img v-bind:src="'src/assets/'+first.pic"> 
         <h5>STITCH</h5>
         <span>Detailed needlework</span>
        </div>
     
    </div>

<div>
  <span >
{{text}}
  </span>
</div>

</div>
</template>

<script>
export default {
  
  data () {
    return {
      first:{
image:"ka.jpg",
pic:"er.jpg",
photo:"la.jpg"
      },
      text:"Industrial design and fashion come together in our pocket sized essentials.Made in Holland with great care for equality,people and environment."

      
      
           
      
      
    }
  }
}
</script>

<style scoped lang="scss">

.main1{
  display:grid;
  grid-template-columns: repeat(3,1fr);
  justify-content: center !important;
  grid-auto-rows:minmax(10px,auto);
  grid-gap:10px;
  widtH:80%;
  margin-lefT:10%;
  margin-right:10%;
  margin-top:40px;
  background:rgb(246,246,246);
  
  div{
    &:nth-of-type(1){
      grid-column: 1/4;
      text-align:center;
      h3{
        display:inline-block;
      }
      #view{
        float:right;
        border:1px solid black;
        padding:10px 15px;
        margin-top:10px;
        margin-right:20px;
        &:hover{
          background:darksalmon;
          transition: 1s ease-in-out;
        }

      }
      
    }
        &:nth-of-type(5){
            grid-column: 1/4;
        text-align: center;
        font-size: 24px;
        margin-top: 140px;
        widtH: 70%;
        margin-left: 15%;
        margin-right: 15%;
        margin-bottom: 30px;
      
        span{
          font-size: 24px;
         padding: 50px;

        }
    }
div{
  height:400px;

  
      img{
    height:100%;
    widtH:100%;
  }
  h3{
    font-size:24px;
    display:inline-block;
    
  }
  span{
    font-size:20px;
  }
}
    
  

  }

}
  
  
@media screen and (max-width: 900px){
    .main1{
          widtH: 100%;
          margin-right: 0%;
          margin-lefT: 0%;
          margin-top:0px;
      
    }
}

</style>