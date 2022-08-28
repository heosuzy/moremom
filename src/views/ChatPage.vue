<template>
  <header>
    <div class="list_header">
      <div class="list_icon_l"></div>
      <div class="list_header_center">
        <p>채팅</p>
      </div>
      <div class="list_icon_r">
        <img class="alert_icon" src="../assets/Notification.png" alt="" />
      </div>
    </div>
  </header>
  <section>
    <ul class="message_wrap">
      <li class="message_list">
        <div class="message_box">
          <div class="photo">
            <img src="../assets/photo.jpg" alt="사진" />
          </div>
          <div class="nick_name">
            <ul>
              <li>닉네임</li>
              <li>채팅내용입니다.</li>
            </ul>
          </div>
          <div class="item">
            <img src="../assets/image1.jpg" alt="판매상품" />
          </div>
        </div>
      </li>
      <li class="message_list">
        <div class="message_box">
          <div class="photo">
            <img src="../assets/photo.jpg" alt="사진" />
          </div>
          <div class="nick_name">
            <ul>
              <li>닉네임</li>
              <li>채팅내용입니다.</li>
            </ul>
          </div>
          <div class="item">
            <img src="../assets/image1.jpg" alt="판매상품" />
          </div>
        </div>
      </li>
      <li class="message_list">
        <div class="message_box">
          <div class="photo">
            <img src="../assets/photo.jpg" alt="사진" />
          </div>
          <div class="nick_name">
            <ul>
              <li>닉네임</li>
              <li>채팅내용입니다.</li>
            </ul>
          </div>
          <div class="item">
            <img src="../assets/image1.jpg" alt="판매상품" />
          </div>
        </div>
      </li>
      <li class="message_list">
        <div class="message_box">
          <div class="photo">
            <img src="../assets/photo.jpg" alt="사진" />
          </div>
          <div class="nick_name">
            <ul>
              <li>닉네임</li>
              <li>채팅내용입니다.</li>
            </ul>
          </div>
          <div class="item">
            <img src="../assets/image1.jpg" alt="판매상품" />
          </div>
        </div>
      </li>
    </ul>
  </section>
  <NavMenu />
</template>

<script setup>
  // import {ref} from 'vue';
  // // import {getAuth} from 'firebase/auth';
  // import {collection, addDoc} from 'firebase/firestore';
  // import {db} from '../main.js';

  // // const auth = getAuth();
  // // const user = auth.currentUser;
  // const title = ref('');
  // const price = ref('');
  // const content = ref('');
  // // const uid = user.uid;
  // // const uid = localStorage.getItem('user').uid;

  // const createdList = () => {
  //   const docRef = addDoc(collection(db, 'product'), {
  //     title: title.value,
  //     price: Number(price.value),
  //     content: content.value,
  //     // uid: uid,
  //   });
  //   console.log(docRef);
  // };

  // // Add a new document with a generated id.
  // const docRef = await addDoc(collection(db, "product"), {
  //   name: "Tokyo",
  //   country: "Japan"
  // });
  // console.log("Document written with ID: ", docRef.id);
</script>

<script>
  import NavMenu from '../components/NavMenu.vue';

  export default {
    components: {NavMenu},
  };
</script>

<style scoped>
  @import '../css/reset.css';
  section {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    margin-top: 100px;
  }
  section .message_wrap {
    width: 90%;
    margin: 0 auto;
  }
  section .message_wrap .message_list {
    width: 100%;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-top: 20px;
  }
  section .message_wrap .message_list .message_box {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 10px;
    grid-column: 1/9;
    padding: 20px;
  }
  section .message_wrap .message_list .message_box .item img {
    float: right;
  }
  section .main_container .message_wrap .message_list .photo {
    border-radius: 50%;
    background: #dddddd;
  }
  section .main_container .message_wrap .message_list .nick_name {
  }
  section .main_container .message_wrap .message_list .item {
  }
</style>
