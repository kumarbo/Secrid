import header from './components/header.vue';
import main from './components/main.vue';
import main1 from './components/main1.vue';
import main2 from './components/main2.vue';
import main3 from './components/main3.vue';
import main4 from './components/main4.vue';
import about from './components/about.vue';
import store from './store.vue';
import blog12 from './components/blog12.vue';

import collection from './components/collection.vue';

export default[
    { path:'/',components:{
        a:main,
        b:main1,
        c:main2,
        d:main3,
        e:main4
    }},
    
    {path:'/collection',component:collection},
    {path:'/about',component:about},
    {path:'/store',component:store},
    {path:'/blog12',component:blog12}

]