<template>
<div class="main3">
  <div>
    <h3>Secried stories</h3>
    <span id="view">All stories</span>
  
  </div>


    <div >
      <div>
    
  
         <img v-bind:src="'src/assets/'+first.image"> 
         <h5>How it  All stearted</h5>
         <span>The Cardpeotector launched in 2009,but on Secrid journey
             started over a decade ago,in 1980's.
         </span>
         </div>
    </div>

      <div >
        <div>
        <img v-bind:src="'src/assets/'+first.pic"> 
         <h5>Made in Taiwan</h5>
         <span>By 2008 the leatehr industry had practically
             abandoned the Ireland in favour of <low-income>
                 countries.
             </low-income>
         </span>
        </div>
         
    </div>

  <div >

        <div>
      <img v-bind:src="'src/assets/'+first.pic"> 

         <h5>Our Team</h5>
         <span>With the average age of 29,our team is young and enbergetic,
             A diverse family of over 100 colleagues.
         </span>
        </div>
     
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
      }
     
      
      
           
      
      
    }
  }
}
</script>

<style scoped lang="scss">

.main3{
  display:grid;
  grid-template-columns: repeat(3,1fr);
  justify-content: center !important;
  grid-auto-rows:minmax(10px,auto);
  grid-gap:10px;
  widtH:80%;
  margin-lefT:10%;
  margin-right:10%;
  margin-top:40px;
  background:#fdfaf5;
  
  div{
      
    &:nth-of-type(1){
      grid-column: 1/4;
  
      h3{
        display:inline-block;
        margin-lefT:30px;
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
      
div{
  height:500px;

  
      img{
    height:60%;
    widtH:100%;
  }
  h5{
    font-size:24px;
    display:block;
    margin-left:30px;
    margin-bottom:20px;
    
  }
  span{
    font-size:20px;
    margin-lefT:30px;
    display:block;
  }
}
    
  

  }

}
  
@media screen and (max-width: 900px){
    .main3{
      width:100%;
      margin-lefT:0%;
      margin-right:0%;
      div{
        div{
          height:auto;
          margin-bottom:20px;
        }
      }
    }
}
</style>