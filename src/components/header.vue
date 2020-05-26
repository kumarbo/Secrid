<template>
<header>
    <div>
  <h3>SECRIBD</h3>
    </div>
      
      <div>
 <img src="../assets/menu.svg" id="image1" v-on:click="menu">
        <img src="../assets/close.svg" id="image2" v-on:click="men">
      </div>

      <div id="third-div">
   <ul id="list1">
           <li><router-link to="/">Wallets</router-link></li>
           <li><router-link to="/collection">Collections</router-link></li>
           <li><router-link to="/about">About</router-link></li>
           <li><router-link to="/store">Stores</router-link></li>
           <li><router-link to="/blog12">Blog</router-link></li>

         
        </ul>
       
      </div>
     
    
</header>
</template>

<script>
export default {
  
  data () {
    return {

    }
  },
  methods:{
    menu:function(){
      document.getElementById('image1').style.display="none";
      document.getElementById('image2').style.display="block";
         document.getElementById('list1').style.display="block";
                document.getElementById('third-div').style.display="block";
    },
    men:function(){
      document.getElementById('image1').style.display="block";
      document.getElementById('image2').style.display="none";
      document.getElementById('list1').style.display="none";
      document.getElementById('third-div').style.display="none";
    }
  }
}
</script>

<style scoped >

header{
  background:whitesmoke;
  display:grid;
  grid-template-columns:1fr 1fr 2fr;
  grid-auto-rows: minmax(30px,auto);
  position:fixed;
  widtH:100%;

z-index:1;
}
header h3{
  margin-left:30px;
  font-weight:700;
  font-size:24px;
}
header ul{
  margin:0;
  padding:0;
  list-style-type:none;
  margin-top:30px;
}
header ul li{
  float:left;
  margin-right:20px;
  
}
header ul li a{
  text-decoration:none;
  color:black;
  font-size:18px;
}
header ul li a:hover{
  color:darksalmon;
}
img{
  height:30px;
  width:30px;
  display:none;
  margin-top: 20px;
    margin-right: 50px;
    float: right;
}

   @media screen and (max-width: 900px){

header{
  grid-template-columns: 1fr 1fr;
  
}

header div:nth-of-type(3){
  grid-column:1/3;
  text-align:center;
}



     header ul {
       display:none;
     }
   header ul li{
     float:none;
     margin-bottom:20px;
     margin-right:0px;
     
     
   }
   header ul li a:hover{
     background:brown;
   }
  
     #image1{
      
    display: block;

     }
     #third-div{
       display:none;
     }
   }
</style>