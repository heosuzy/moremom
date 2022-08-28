<template>
  <header>
    <div class="list_header">
      <div class="list_icon_l">
        <button @click="$router.push('/marketlist')">
          <img src="../assets/arrow_left.png" alt="" />
        </button>
      </div>
    </div>
  </header>
  <div>
    <!-- {{ $route.params.id }}
    {{ lists[0]?.title }}
    {{ lists[$route.params.id]?.title }} -->
    <div class="product_image">
      <div class="image"></div>
    </div>
    <div>
      <div class="tit">
        <div class="profile"></div>
        <div class="display">
          <p class="name">닉넴</p>
          <p class="date">시간</p>
        </div>
        <button class="chat">
          <div>채팅하기</div>
        </button>
      </div>
    </div>
    <div class="detail">
      <p class="detail_price">{{ lists[$route.params.id]?.price }}원</p>
      <div class="detail_sell_tit">
        <p class="detail_sell">판매중</p>
        <p class="detail_tit">{{ lists[$route.params.id]?.title }}</p>
      </div>
      <p class="detail_content">{{ lists[$route.params.id]?.content }}</p>
    </div>
  </div>
</template>

<script>
  import {db} from '../main.js';
  import {collection, onSnapshot} from 'firebase/firestore';
  export default {
    data() {
      return {
        lists: [],
      };
    },
    created() {
      onSnapshot(collection(db, 'product'), querySnapshot => {
        this.lists = [];
        querySnapshot.forEach(doc => {
          this.lists.push({
            id: doc.id,
            uid: doc.data().uid,
            name: doc.data().nickname,
            img: doc.data().img,
            price: doc.data().price,
            title: doc.data().title,
            // date: doc.data().date.toDate(),
            content: doc.data().content,
          });
          console.log(this.lists);
        });
      });
    },
    method: {},
  };
</script>

<style scoped>
  .product_image {
    margin-top: 60px;
  }
  .product_image div {
    width: 100%;
    height: 335px;
    background-image: url(../assets/product1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
  .tit {
    display: flex;
    align-items: center;
    padding: 18px 20px;
    border-bottom: 1px solid #e9e9e9;
  }
  .profile {
    width: 28px;
    height: 28px;
    background-color: #d9d9d9;
    border-radius: 50%;
    margin-right: 8px;
  }
  .name {
    font-size: 12px;
    color: #333;
  }
  .date {
    font-weight: 300;
    font-size: 9px;
    color: #ada4a5;
  }
  .chat {
    margin-left: auto;
    width: 92px;
    height: 40px;
    background: linear-gradient(92.08deg, #ff416c 0%, #ff4b2b 100%);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .chat div {
    color: #fff;
    font-size: 14px;
  }
  .detail {
    padding: 16px 20px;
  }
  .detail_price {
    color: #333333;
    font-weight: 700;
    font-size: 16px;
  }
  .detail_sell_tit {
    display: flex;
  }
  .detail_sell {
    font-weight: 500;
    font-size: 16px;
    color: #ff6060;
  }
  .detail_tit {
    margin-left: 5px;
    font-weight: 400;
    font-size: 16px;
    color: #333333;
  }
  .detail_content {
    margin-top: 16px;
    font-weight: 400;
    font-size: 12px;
    color: #333333;
  }
</style>
