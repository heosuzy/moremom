<template>
  <header>
    <div class="list_header">
      <div class="list_icon_l">
        <img src="../assets/list_catagory.png" alt="" />
      </div>
      <div class="list_header_center">
        <p>안양동</p>
        <img src="../assets/arrow_down.png" alt="" />
      </div>
      <div class="list_icon_r">
        <img src="../assets/search_icon.png" alt="" />
        <img class="alert_icon" src="../assets/Notification.png" alt="" />
      </div>
    </div>
  </header>
  <div class="product_list">
    <ul v-for="(a, i) in lists" :key="i">
      <!-- {{
        lists[i]?.id
      }} -->
      <li @click="$router.push('detail/' + `${i}`)">
        <div href="" class="product">
          <div>
            <img src="../assets/product0.png" alt="" class="product_img" />
          </div>
          <div class="product_detail">
            <p class="title">{{ lists[i]?.title }}</p>
            <div class="product_text">
              <p class="locate">안양동</p>
              <!-- <p class="date">{{ lists[0]?.date }}</p> -->
            </div>
            <p class="price">{{ lists[i]?.price }}원</p>
          </div>
          <div class="product_icon">
            <div class="comment">
              <img src="../assets/comment.png" alt="" />
              <p>1</p>
            </div>
            <div class="like">
              <img src="../assets/like.png" alt="" />
              <p>0</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- {{ lists[1]?.title }}
  <div>`${lists[0].title}`</div> -->
  <WriteButton />
  <NavMenu />
</template>

<script>
  import NavMenu from '../components/NavMenu.vue';
  import {db} from '../main.js';
  import {collection, onSnapshot} from 'firebase/firestore';
  import WriteButton from '@/components/WriteButton.vue';
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
    components: {NavMenu, WriteButton},
  };
</script>
<!-- <script setup>
  import {onMounted, ref} from 'vue';
  import {getDocs} from 'firebase/firestore';
  import {colRef} from '../main.js';

  const listsA = ref([]);
  console.log(listsA);

  // onMounted(async () => {
  //   getDocs(colRef)
  //     .then(snapshot => {
  //       console.log(snapshot.docs);
  //       let lists = [];
  //       snapshot.docs.forEach(doc => {
  //         lists.push({...doc.data(), id: doc.id});
  //       });
  //       console.log(lists);
  //       listsA.value = lists;
  //     })
  //     .catch(err => {
  //       console.log(err.message);
  //     });
  // });
    // onMounted(async () => {
    // console.log('listpageMounted');
    // const querySnapshot = await getDocs(collection(db, 'product'));
    // let productList = [];
    // querySnapshot.forEach(doc => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    //   console.log(doc);
    //   const list = {
    //     id: doc.id,
    //     uid: doc.data().uid,
    //     name: doc.data().nickname,
    //     img: doc.data().img,
    //     price: doc.data().price,
    //     title: doc.data().title,
    //     date: doc.data().date,
    //     content: doc.data().content,
    //   };
    //   productList.push(list);
    // });
    // lists.value = productList;
    // });

</script> -->
<style scoped>
  @import '../css/style.css';

  .product_list {
    margin-top: 60px;
    width: 100%;
    /* height: 90%; */
    padding: 0px 20px;
    height: 90vh;
    overflow: scroll;
    -ms-overflow-style: none;
  }
  .product_list::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
  .product_list ul {
    width: 100%;
    border-bottom: 1px solid #e9e9e9;
    padding: 16px 0;
    color: #333;
  }
  .product {
    display: flex;
  }
  .product_img {
    margin-right: 16px;
  }

  .product_icon {
    display: flex;
    margin-left: auto;
    margin-top: auto;
  }
  .product_icon div {
    display: flex;
    margin-right: 8px;
  }
  .comment img,
  .like img {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
  .title {
    font-size: 12px;
    font-weight: bold;
  }
  .product_text {
    display: flex;
    font-size: 10px;
  }
  .price {
    font-size: 12px;
    margin-top: 3px;
  }
</style>
