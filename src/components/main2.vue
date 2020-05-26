<template>
<div class="wrapper">
    <div>
      <img src="../assets/card.jpg">
    </div>
    <div>
     <h3>
         QUICK ACCESS
     </h3>
     <span>
         The patented mechanism of our wallets
         provides a simple and fast way to
         accesss your cards.
     </span>
    </div>

     <div>
           <h3>
            PROTECT YOUR CARDS
        </h3>
        <span>
            The aluminium Cardprotector protects
            your cards from bending,breaking and unwanted
            RFID anf NFC communication.
        </span>
       
    </div>
    <div>
       <img src="../assets/mini.jpg">
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
    grid-auto-rows:minmax(150px,auto);
    margin-top:100px;
    div{
        img{
            height:100%;
            widtH:100%;
        }
       h3{
           margin:100px 100px 0px 100px;
           display:block;
       }
        span{
            margin-left:100px;
            margin-top:20px;
            display:block;
            width:40%;
            font-size:20px;
        }
    }
   
}


@media screen and (max-width: 900px){
    .wrapper{
        grid-template-columns: repeat(1,1fr);
        div{
            &:nth-of-type(4){
                margin-top:40px;
            }
        }
    }
}
</style>