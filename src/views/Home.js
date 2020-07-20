import styled from 'vue-styled-components';
const WrapDiv=styled.div`

    .van-grid-item__content{
      padding: 0px !important;
      }
    .van-image{
      border: 1px solid #fff;
    }
    .title{
      position: absolute;
      top: 20px;
      left: 10px;
    }
    .price{
      position: absolute;
      top: 40px;
      left: 10px;
      font-size: 14px;
      color: #999;
 
    }
 
`
const WranDiv=styled.div`
    .van-grid-item__content--center{
        padding: 0;
    }
`
export {WrapDiv};
export {WranDiv};