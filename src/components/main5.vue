<template>
<div class="wrap">
    <div class="inner">
        <div>
            <div>
           <h5>REGION</h5>
           <span><img src="../assets/interface.svg">Rest of world</span>
            </div>


            <div>
           <h5>
               LANGUAGE
           </h5>
           <span id="ok">
               <img src="../assets/chat.svg">English
           </span>
           </div>
        </div>
        <div>
            <ul>
                <li><a href="#">PRODUCTS</a></li>
                 <li><a href="#">Wallets</a></li>
                  <li><a href="#">Collections</a></li>
                   <li><a href="#">Leather</a></li>
                    <li><a href="#">Protect your cards</a></li>
                     <li><a href="#">Promotional sales</a></li>
            </ul>
        </div>
        <div>
             <ul>
                <li><a href="#">COMPANY</a></li>
                 <li><a href="#">How it all started</a></li>
                  <li><a href="#">Made in Holland</a></li>
                   <li><a href="#">Our team</a></li>
                    <li><a href="#">Trade fair calendar</a></li>
                     
            </ul>
        </div>
        <div>
             <ul>
                <li><a href="#">SEFCVICES</a></li>
                 <li><a href="#">FAQ</a></li>
                  <li><a href="#">User manual</a></li>
                   <li><a href="#">Product  registration</a></li>
                    <li><a href="#">Contact</a></li>
                     <li><a href="#">Downloads</a></li>
            </ul>
        </div>
        <div>
             <ul>
                <li><a href="#">LEGAL</a></li>
                 <li><a href="#">Privacy policy</a></li>
                  <li><a href="#">Terms and conditions</a></li>
                  
            </ul>
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
.wrap{
     background:#222;
    .inner{
  display:grid;
    grid-template-columns:repeat(5,1fr);
    grid-auto-rows:minmax(100px,auto);
    grid-auto-rows: minmax(100px, auto);
    width: 90%;
    margin-lefT: 5%;
    margin-right: 5%;
    background:#222;
    div{
      
        h5{
                font-size: 16px;
               font-weight: bold;
               color:white;
             
        }
        span{
            border: 1px solid white;
            padding: 15px;
            color:white;
            
       img{
            height:15px;
            width:15px;
            margin-right:10px;
        }
    
     &:hover{
         background:black;
         color:white;
         transition:1s ease;
     }
        }
        #ok{
            padding:15px 50px 15px 15px;
        }
        ul{
            margin:0;
            padding:0;
            list-style-type:none;
            li{
                margin-bottom:20px;

                a{
                    text-decoration:none;
                    color:white;
                 
                }
                   &:nth-of-type(1){
                        font-weight:bold;
                        font-size:16px;
                        color:white;
                        margin-top:30px;
                    }
            }
        }
        &:nth-of-type(2){
            h5{
                margin-top:60px;
            }
        }
      
    }
    }
  

}
@media screen and (max-width: 900px){
    .wrap{
        .inner{
            grid-template-columns:repeat(2,1fr);
            div{
                text-align:center;
            }
        }
    }
}
</style>