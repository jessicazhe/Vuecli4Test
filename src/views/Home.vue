<template>
<div id="home" class="home">
    <van-search v-model="searchData" input-align="center" placeholder="商品搜索，共2229款好物" />
  
  <!-- 轮播 -->
  <van-swipe :autoplay="3000" width="375" height="200" >
    <van-swipe-item v-for="(image, index) in images" :key="index">
    <img class="swiperimg" v-lazy="image.image_url" />
  </van-swipe-item>
  </van-swipe>
<!-- 5个小图标 -->
  <van-grid column-num='5'>
    <van-grid-item v-for=" (item,index) in channel" :key="index" :icon="item.icon_url" :text="item.name" />
</van-grid>
<!-- 品牌制造商 -->
  <!-- <div class="brandList"> -->
  <WrapDiv>
    <van-panel title="品牌制造商直供">
        <van-grid :column-num="2" >
          <van-grid-item v-for="(item1,index1) in brandList" :key="index1" >
            <van-image lazy-load :src="item1.new_pic_url" />
            <span class="title">{{item1.name}}</span>
            <p class="price">{{item1.floor_price}}元起</p>
          </van-grid-item>
        </van-grid>
    </van-panel>
  <!-- </div> -->
  </WrapDiv>
<!-- 品牌制造商 -->
  <div class="newGoodsList">
    <van-panel title="新品首发">
        <van-grid :column-num="2">
          <van-grid-item v-for="(item2,index2) in newGoodsList" :key="index2">
            <van-image lazy-load :src="item2.list_pic_url" />
            <span class="title">{{item2.name}}</span>
            <p class="price">{{item2.retail_price}}元起</p>
          </van-grid-item>
        </van-grid>
    </van-panel>
  </div>

  <!-- 人气面板 -->
  <div class="hotList">
    <van-panel title="人气推荐" >
      <van-card  v-for="(item3,index3) in hotGoodsList" :key="index3"
        :price="item3.retail_price"
        :desc="item3.goods_brief"
        :title="item3.name"
        :thumb="item3.list_pic_url"
      />
    </van-panel>
  </div>

  <!-- 导航栏部分 -->
  <div style="height:50px;"></div>
    <tab-btn></tab-btn>
  </div>
</template>

<script>
import tabBtn from '@/components/tabBtn'
import {WrapDiv} from './Home.js';
import axios from 'axios'
import api from '../assets/config/api.js'
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload)
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data:function(){
    return{
    searchData:'',
    data:{},
     
    }
  },
  computed:{
    images:function(){
      if(typeof this.data.banner=='object'){
        return this.data.banner
      }else{
        return[]
      }
    },
    channel:function(){
      if(typeof this.data.channel=='object'){
        return this.data.channel
      }else{
        return[]
      }
    },
    brandList:function(){
      if(typeof this.data.brandList=='object'){
        return this.data.brandList
      }else{
        return[]
      }
    },
    newGoodsList:function(){
      if(typeof this.data.newGoodsList=='object'){
        return this.data.newGoodsList
      }else{
        return[]
      }
    },
    hotGoodsList:function(){
      if(typeof this.data.hotGoodsList=='object'){
        return this.data.hotGoodsList
      }else{
        return[]
      }
    }
  },

  components: {
    WrapDiv,
    tabBtn
  },
  async mounted(){
    let res= await axios.get(api.IndexUrl)
    console.log(res);
    this.data=res.data.data;
  }
};
</script>


<style lang="less" scoped>
#home{
  .van-grid-item{
    overflow: hidden;
  }
  .swiperimg{
    width:375px;
    height:200px;
  }

}
.newGoodsList{
  .van-grid-item__content--center{
    padding: 0;
  }
  .title{
    width: 90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .price{
    font-size: 14px;
    color: #999;
  }
}

.hotList{
  .van-card__content{
    justify-content: center;
    text-align: left;
    padding: 0 8px;
  }
  .van-card__title{
    font-weight: 900;
    color: #333;
    font-size: 14px;
    padding: 5px 0;
  }
  .van-card__price {
    color: red;
  }
}
</style>
