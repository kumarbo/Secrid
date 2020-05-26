<template>
  <div class="wrapper">
      <div class="one">
          <span>Secrid stories</span>
          <span>
              Industrial design and fashion come together in our pocket-sized essentials.Made 
              in Holland with great care for quality,people and the environment.A better world
              starts in your pocket.
          </span>
      </div>
      <div class="two">
          <div>
              <img src="../assets/kevin.jpg">
          </div>
          <div>
              <h5>Made in Holland</h5>
              <span>By 2009 the leather industry had practically
                  abandoned the Netherlands in favour of low-income countries.
              </span>
          </div>
      </div>
      <div class="third">
          <div>
              <img src="../assets/k3.jpg">
          </div>
          <div>
              <h5>How it all started</h5>
              <span>
                  The Cardprotector launched in 2002,but our Secrid journey started over
                  a decade ago,in the 1990's .In 1997.as cash made way for cards,we created
                  our first minimal wallet.
              </span>
          </div>
      </div>
      <div class="fourth">
          <div>
              <img src="../assets/k4.jpg">
          </div>
          <div>
              <h5>The first Secrid Brandstore</h5>
              <span>
                  Hello Rotterdam.This has been a dream 
              of our since the start of Secrid.Exactly ten years after the launch 
              of the Cardprotector,the dream has become reality.
              
              </span>
          </div>
      </div>
      <div class="fifth">
          <div>
              <img src="../assets/an.jpg">
          </div>
          <div>
              <h5>Our team</h5>
              <span>
                  With an average age of 29,our team is young and energetic,
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
      
    }
  }
}
</script>

<style scoped lang="scss">
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    background:whitesmoke;
}
h5{
    font-size:24px;
    margin-bottom: 10px;
    margin-lefT:30px;
    margin-top:30px;

}
span{
    display:block;
    font-size:20px;
    margin:0px 60px 40px 30px;
}
.wrapper{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-auto-rows: minmax(100px,auto);
    grid-template-areas:"one one one" "two third third" "fourth fourth fifth";
   width:80%;
   margin-lefT:10%;
   margin-right:10%;
   grid-gap:1em;

.one{
    grid-area:one;
    widtH:80%;
    margin-left:10%;
    margin-right:10%;
       text-align:center;
                span{
                display:block;
                
                &:nth-of-type(1){
                    font-size:34px;
                    font-weight:900;
                    padding-top:100px;
                    
                }
                &:nth-of-type(2){
                    font-size:24px;
                    padding-bottom: 100px;
                    margin-top:10px;
                }
            }
   
}
.two{
    grid-area:two;
    display:grid;
 grid-template-rows: 2fr 1fr;
 background:white;
    div{

        img{
            height:100%;
            widtH:100%;
        }
 
    }
}
.third{
    grid-area:third;
    display:grid;
     grid-template-rows: 2fr 1fr;
      background:white;
    div{
        img{
            height:100%;
            widtH:100%;
        }
    
    }
}
.fourth{
    grid-area:fourth;
    display:grid;
     grid-template-rows:2fr 1fr;
      background:white;
    div{
        img{
            height:100%;
            widtH:100%;
        }
    }
}
.fifth{
    grid-area:fifth;
    display:grid;
     grid-template-rows: 2fr 1fr;
      background:white;
    div{
        img{
            height:100%;
            widtH:100%;
        }
    }
}
}

   @media screen and (max-width: 900px){
       .wrapper{
           grid-template-areas:"one one one"
           "two two two"
           "third third third"
           "fourth fourth fourth"
           "fifth fifth fifth";
       }
   }
</style>