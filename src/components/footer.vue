<template>
<footer>
  <div></div>
  <div>
    <span>From Brazil with &copy; 2020 Secrid MK</span>
  </div>
  <div>
    <a href="https://www.facebook.com/"> <img src="../assets/connections.svg"/></a>

 <a href="https://www.instagram.com/"><img src="../assets/social-media.svg"/></a>
 <a href="https://www.twitter.com/"><img src="../assets/social.svg"/></a>
  
  </div>
  
</footer>

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
footer{
  background:dimgrey;
  display:grid;
  grid-template-columns:1fr 3fr 1fr;
  
div{
  span{
    color:white;
    font-size:14px;
    display:block;
        margin:30px 15px 10px 0px;
  }
  img{
    height:20px;
    width:20px;
    margin:20px 15px 20px 0px;
  }
}
}

   @media screen and (max-width: 900px){
     footer{
       grid-template-columns:1fr 4fr 3fr;
       div{
         img{
           margin: 30px 15px 20px 0px;
         }
       }
     }
   }

</style>