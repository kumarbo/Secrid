<template>
<div  class="wrapper">
    <div class="a1">
 <h1>Add a new blog</h1>
 <label>Blog Title:</label>
 <input type="text"  v-model="blog.title" required>


 <label>Blog Content:</label>
 <textarea v-model="blog.content">

 </textarea>

 <label>Radio</label><input type="checkbox" value="radio" v-model="blog.categories">
<label>Television</label><input type="checkbox" value="television" v-model="blog.categories">
<label>Newspaper</label><input type="checkbox" value="newspaper" v-model="blog.categories">
<label>Others</label><input type="checkbox" value="others" v-model="blog.categories"> 
 </div>

 <div class="a2">
     <h5>Preview Blog</h5>
     <p>Blog Tilte:{{blog.title}}</p>
     <p>Blog Content:{{blog.content}}</p>
     <p>Checkbox</p>
     <ul>
         <li v-for="cat in blog.categories" v-bind:key="cat.id">{{cat}}</li>
     </ul>
 </div>
</div>
</template>

<script>
export default {

  data () {
    return {
        blog:{
   title:'',
      content:'',
      categories:[]
        },
       
   
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  display:grid;
 grid-template-columns: 1fr 1fr;
 grid-auto-rows:minmax(100px,auto);
 grid-template-areas: "a1 a1" "a2 a2";
 justify-items: center;
 
  .a1{
      grid-area:a1;
      align-content: center;
      padding:50px 100px;
    label{
        display:block;
    }
    input[type=text]{
        display:block;
        margin-bottom:20px;
        widtH:100%;
        padding:10px 20px;
    }
    textarea{
        widtH:100%;
        padding:10px 20px;
    }
  }
  .a2{
      grid-area:a2;
    
      label{
          display:block;
      }
  }
}
</style>