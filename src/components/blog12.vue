<template>
<div class="wrapper">
  <div class="search-box">
    <div>
    <input type="text" placeholder="Search...">
    <img src="../assets/loupe.svg">
    </div>
  </div>

  <div class="item1">
    <div>
      <span v-rainbow>
        Family Loungewear – All On Sale!
      </span>
      <span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         A, repudiandae. Vel adipisci saepe dolorem sequi maxime quod omnis nihil reiciendis!.
      </span>
      <span>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         A, repudiandae. Vel adipisci saepe dolorem sequi maxime quod omnis nihil reiciendis!
      </span>

      <span><a href="#">Read more</a></span>
      
    </div>
    <div>
<img src="../assets/west.jpg">
    </div>
  </div>


  <div class="item2"  >

     <div>
      <img src="../assets/s2.jpg">
    </div>
    <div >
 <span>My New Go-To Presets 25% Off!</span>
      <span>
      Happy Friday guys!! With so much home content lately, I’ve started to edit my photos a 
      little differently so I just
      </span>
      <span>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         A, repudiandae. Vel adipisci saepe dolorem sequi maxime quod omnis nihil reiciendis!
      </span>

       <span><a href="#">Read more</a></span>
    </div>
  </div>


   <div class="item2">

     <div>
      <img src="../assets/s3.jpg">
    </div>
    <div>
 <span>
   
My Spring Style Inspo
 </span>
      <span>
       I think it’s safe to say spring has sprung! Flowers are starting to bloom, 
       the weather is warmer, and everything is starting to come back to
      </span>
      <span>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         A, repudiandae. Vel adipisci saepe dolorem sequi maxime quod omnis nihil reiciendis!
      </span>

       <span><a href="#">Read more</a></span>
    </div>
  </div>


  <div class="item1">
    <div>
      <span v-rainbow>
        Easter Recap
      </span>
      <span>
  Hey guys! We had so much fun just hanging together, cooking, and enjoying each other’s 
  company on Easter that I didn’t have a
      </span>
      <span>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         A, repudiandae. Vel adipisci saepe dolorem sequi maxime quod omnis nihil reiciendis!
      </span>

      <span><a href="#">Read more</a></span>
      
    </div>
    <div>
<img src="../assets/s4.jpg">
    </div>
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
.wrapper{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  grid-auto-rows:minmax(100px,auto);
  

width:90%;
margin-left:5%;
margin-right:5%;
margin-bottom:30px;
.search-box{
  grid-column:1/3;
  margin-top:100px;
  text-align:center;
  div{
input[type=text]{
   padding:10px 30px;
 }
 img{
   height:30px;
   widtH:30px;
   margin:5px 0px 0px 5px;
   position:absolute;
 }
  }
 
 }
 img{
   height:30px;
   width:30px;
 }
}
   .item1{
    display:grid;
    grid-template-columns:1fr 1fr;
    background:white;
    margin-top:40px;
    
    div{
      &:nth-of-type(2){
    clip-path: polygon(25% 0%, 100% 0, 100% 100%, 25% 100%, 0% 50%);

        img{
          height:100%;
          widtH:100%;
        }
      }
      span{
        display:block;
        font-size: 18px;
        margin-left: 30px;
        margin-bottom: 20px;;
        &:nth-of-type(1){
          font-weight:bold;
          font-size:24px;
          margin-top:60px;
        }
        a{
          text-decoration:none;
          color:black;
          font-weight:bold;
          &:hover{
            color:seagreen;
          }
        }
      }
    }

  }
  
  .item2{
    
    display:grid;
    grid-template-columns:  1fr 1fr;
    background: #78715f;
    margin-top:40px;
    
    
       div{
         
      &:nth-of-type(1){
        
clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
        img{
          height:100%;
          widtH:100%;
        }
      }
         span{
        display:block;
        font-size: 18px;
        margin-left: 30px;
        margin-bottom: 20px;;
        &:nth-of-type(1){
          font-weight:bold;
          font-size:24px;
          margin-top:60px;
        }
        a{
          text-decoration:none;
          color:black;
          font-weight:bold;
          &:hover{
            color:white;
          }
        }
      }
    }
  }
  .item3{
    grid-row:2/4;
  }
 
 
   @media screen and (max-width: 900px){
     .wrapper{
       .item1{
         grid-column:1/3;
       }
       .item2{
         grid-column:1/3;
       }
     }
   }
</style>