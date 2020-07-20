<template>
  <div id="catagroy">
    <van-search v-model="searchData" input-align="center" placeholder="商品搜索，共2229款好物" />
      <van-tree-select
        :items="items"
        :main-active-index.sync="activeIndex"
        height='calc(100vh - 104px)'
        @cilck-nav="changeRight"
      >
        <template style="content">

        </template>
      </van-tree-select>
    <tab-btn></tab-btn>
  </div>
</template>

<script>
import axios from 'axios'
import api from "@/assets/config/api.js"
import tabBtn from '@/components/tabBtn.vue'
export default {
  data(){
    return{
      searchData:'',
      items: [{ text: '分组 1' }, { text: '分组 2' }],
      activeIndex: 0,
      data:{}
    }
  },
  async craete(){
        let res=await axios.get(api.CataligList)
        let data =res.data;
        this.data=data.data;
        console.log(data);
  },
  computed:{
    items:function(){
      if(this.data.categroyList==undefined){
        return[]
      }else{
        let arr=[]
        this.data.categroyList.forEach((item,index)=>{
          item.text=item.name
          arr.push(item)
        })
        return arr;
      }
    }
  },
  methods:{
    changeRight:function(index){
      console.log(index);
    }
  },
  components:{
    tabBtn
  }
}
</script>

<style>

</style>