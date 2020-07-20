<template>
    <div>
       
        <van-tabbar v-model="tabActive">
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="medal-o">专题</van-tabbar-item>
            <van-tabbar-item icon="qr" to="/categroy">分类</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        data:function(){
            return{
                tabActive:0
            }
    },
    mounted(){
        switch(this.$route.path){
            case "/categeoy":
                this.tabActive=2;
                break;
            case "/":
                this.tabActive=0;
                break;
            default:
                this.tabActive=0
        }
    } 
   
}   
</script>

<style lang="stylus" scoped>

</style>