<template>
<div class="wrapper">
    <header>
        <span>Some of our favourite collections</span>
        <span>Made in Holland with great care.for pockets around the world</span>
    </header>

    <main>
      <div></div>
      <div></div>

      <div>
               <span>POWDER</span>
      <span>A new step towards zero-waste</span>
      </div>
   
    </main>

<!--section1-->
    <section class="section1">
      <div class="image-div1"  v-on:click="show=!show" v-if="!show"> 
         
      </div>
      <div class="des" v-if="show" v-on:click="show=!show">
          <span>Features</span>
          <span>4 extra cards</span>
          <span>Banknotes</span>
          <span>Business cards</span>
          <span>Receipts</span>
      </div>
      <div>
          <span>FOR HER</span>
          <span>It's in the little things</span>
      </div>
    </section>





<!--section2-->
        <section class="section2">
                 <div class="image-div2" v-on:click="show2=!show2" v-if="!show2">
         
      </div>
         <div class="des" v-if="show2" v-on:click="show2=!show2">
          <span>Features</span>
          <span>4 extra cards</span>
          <span>Banknotes</span>
          <span>Business cards</span>
          <span>Receipts</span>
      </div>
      <div>
     <span>NEW CLASSICS</span>
        <span>Classic designs with a twist</span>
      </div>
   
    </section>


        <section class="section3">
                   <div class="image-div3" v-on:click="show3=!show3" v-if="!show3">
         
      </div>
         <div class="des" v-if="show3" v-on:click="show3=!show3">
          <span>Features</span>
          <span>4 extra cards</span>
          <span>Banknotes</span>
          <span>Business cards</span>
          <span>Receipts</span>
      </div>
      <div>
     <span>YARD</span>
        <span>A technical replacment for leather</span>
      </div>
    </section>


        <section class="section4">
                             <div class="image-div4" v-on:click="show4=!show4" v-if="!show4">
         
      </div>
         <div class="des" v-if="show4" v-on:click="show4=!show4">
          <span>Features</span>
          <span>4 extra cards</span>
          <span>Banknotes</span>
          <span>Business cards</span>
          <span>Receipts</span>
      </div>
      <div>
     <span>YARD</span>
        <span>A technical replacment for leather</span>
      </div>
    </section>


        <section class="section5">
                   <div class="image-div5" v-on:click="show5=!show5" v-if="!show5">
         
      </div>
         <div class="des" v-if="show5" v-on:click="show5=!show5">
          <span>Features</span>
          <span>4 extra cards</span>
          <span>Banknotes</span>
          <span>Business cards</span>
          <span>Receipts</span>
      </div>
      <div>
     <span>YARD</span>
        <span>A technical replacment for leather</span>
      </div>
    </section>
        <section class="section6">
                   <div class="image-div6" v-on:click="show6=!show6" v-if="!show6">
         
      </div>
         <div class="des" v-if="show6" v-on:click="show6=!show6">
          <span>Features</span>
          <span>4 extra cards</span>
          <span>Banknotes</span>
          <span>Business cards</span>
          <span>Receipts</span>
      </div>
      <div>
     <span>YARD</span>
        <span>A technical replacment for leather</span>
      </div>
    </section>

         <section class="section7">
                   <div class="image-div7">
         
      </div>
      <div>
     <span>Prefer browsing by wallet type?</span>
        <span>Compare our wallets to find right one for you.</span>
      </div>
    </section>
        
</div>


</template>

<script>
export default {
  
  data () {
     
   
    return {
       show:false,
       show2:false,
       show3:false,
       show4:false,
       show5:false,
       show6:false
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-auto-rows:minmax(100px,auto);
    grid-gap:1em;
    grid-template-areas:
        "header header header" 
        "main main main"
        "section1 section2 section3"
        "section4 section5 section6"
        "section7 section7 section7";
    width:80%;
    margin-lefT:10%;
    margin-right:10%;
        header{
            grid-area:header;
            text-align:center;
                span{
                display:block;
                
                &:nth-of-type(1){
                    font-size:24px;
                    font-weight:900;
                    padding-top:100px;
                    
                }
                &:nth-of-type(2){
                    font-size:18px;
                    padding-bottom: 100px;
                    margin-top:10px;
                }
            }
        }
        main{
            grid-area:main;
            background:url('../assets/ivan.jpg');
            height:600px;
            background-size:cover;
        
            display:grid;
            grid-auto-rows:1fr 2fr 1fr;
            div{
  span{
                color:white;
                display:block;
                margin-left:30px;
                 font-size:18px;
                 margin-bottom:5px;
                 &:nth-of-type(1){
                     font-size:20px;
                     margin-top:60px;
                     font-weight:800;
                 }
            
            }
           
            }
          
}
        }
        .section1{
            grid-area:section1;
            display:grid;
            grid-template-rows:2fr 1fr;
         
            .image-div1{
                background:url('../assets/img1.jpg');
                height:300px;
                background-size:cover;
            }
           
            div{
                span{
                    display:block;
                    margin-left:10px;
                    &:nth-of-type(1){
                        font-weight:bold;
                       margin-top:20px;
                          margin-bottom:10px;
                    }
                }
            }
        
        }
          .section2{
            grid-area:section2;
              display:grid;
            grid-template-rows:2fr 1fr;
     
            .image-div2{
                background:url('../assets/image4.jpg');
                  height:300px;
                background-size:cover;
            }
              div{
                span{
                    display:block;
                    margin-left:10px;
                    &:nth-of-type(1){
                        font-weight:bold;
                         margin-top:20px;
                          margin-bottom:10px;
                    }
                }
            }
        
        }
          .section3{
            grid-area:section3;
              display:grid;
            grid-template-rows:2fr 1fr;
     
            .image-div3{
                background:url('../assets/image3.jpg');
                  height:300px;
                background-size:cover;
            }
              div{
                span{
                    display:block;
                    margin-left:10px;
                    &:nth-of-type(1){
                        font-weight:bold;
                          margin-top:20px;
                          margin-bottom:10px;
                    }
                }
            }
        
        }
          .section4{
            grid-area:section4;
            
              display:grid;
            grid-template-rows:2fr 1fr;
     
            .image-div4{
                background:url('../assets/iomage6.jpg');
                  height:300px;
                background-size:cover;
            }
              div{
                span{
                    display:block;
                    margin-left:10px;
                    &:nth-of-type(1){
                        font-weight:bold;
                          margin-top:20px;
                          margin-bottom:10px;
                    }
                }
            }
        }
          .section5{
            grid-area:section5;
              
              display:grid;
            grid-template-rows:2fr 1fr;
     
            .image-div5{
                background:url('../assets/image4.jpg');
                  height:300px;
                background-size:cover;
            }
              div{
                span{
                    display:block;
                    margin-left:10px;
                    &:nth-of-type(1){
                        font-weight:bold;
                          margin-top:20px;
                          margin-bottom:10px;
                    }
                }
            }
        }
          .section6{
            grid-area:section6;
            
              display:grid;
            grid-template-rows:2fr 1fr;
     
            .image-div6{
                background:url('../assets/image5.jpg');
                  height:300px;
                background-size:cover;
            }
              div{
                span{
                    display:block;
                    margin-left:10px;
                    &:nth-of-type(1){
                        font-weight:bold;
                          margin-top:20px;
                          margin-bottom:10px;
                    }
                }
            }
        }
          .section7{
            grid-area:section7;
            text-align: center;
            span{
                display:block;
                &:nth-of-type(1){
                    font-size:30px;
                    font-weight:bold;
                    margin-bottom:10px;

                }
                &:nth-of-type(2){
                    font-size:18px;
                }
            }
        }
    

    @media screen and (max-width: 900px){
      .wrapper{
        grid-template-areas: "header header header"
                              "main main main"
                              "section1 section1 section1"
                              "section2 section2 section2"
                              "section3 section3 section3"
                              "section4 section4 section4"
                              "section5 section5 section5"
                              "section6 section6 section6"
                              "section7 section7 section7";
      }
    }

</style>