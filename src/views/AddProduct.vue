<template>
  <header>
    <div class="list_header">
      <div class="list_icon_l">
        <button @click="$router.push('/marketlist')">
          <img src="../assets/arrow_left.png" alt="" />
        </button>
      </div>
      <div class="list_header_center">
        <p>글쓰기</p>
      </div>
      <div class="list_icon_r"><button class="submit" @click="createdList">완료</button></div>
    </div>
  </header>
  <div class="write_form_container">
    <div class="file_photo">
      <label for="file">
        <div class="btn-upload">
          <img src="../assets/fe_camera.png" alt="" />
          <p>준비중</p>
        </div>
      </label>
      <input type="file" name="file" id="file" @change="detectFiles($event.target.files)" />
    </div>
    <div class="input">
      <input type="text" placeholder="제목" v-model="title" />
    </div>
    <div class="input">
      <input type="text" placeholder="가격" v-model="price" />
    </div>
    <div class="content">
      <textarea
        v-model="content"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="상품 사진과 구매 연도, 사용감, 하자 등 
구매자에게 필요한 정보를 꼭 기재해주세요. "
      ></textarea>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  // import {getAuth} from 'firebase/auth';
  import {collection, addDoc} from 'firebase/firestore';
  import {db} from '../main.js';
  import {useRouter} from 'vue-router';

  // const auth = getAuth();
  // const user = auth.currentUser;
  const title = ref('');
  const price = ref('');
  const content = ref('');
  // const uid = user.uid;
  // const uid = localStorage.getItem('user').uid;
  const router = useRouter();

  const createdList = () => {
    const docRef = addDoc(collection(db, 'product'), {
      title: title.value,
      price: Number(price.value),
      content: content.value,
      // uid: uid,
    });
    console.log(docRef);
    router.push('/marketlist');
  };

  // // Add a new document with a generated id.
  // const docRef = await addDoc(collection(db, "product"), {
  //   name: "Tokyo",
  //   country: "Japan"
  // });
  // console.log("Document written with ID: ", docRef.id);
</script>

<script>
  // import {db} from '../main.js';
  // import { collection, addDoc } from "firebase/firestore";

  // export default {
  //   data(){
  //     return {
  //       title:null,
  //       price:null,
  //       content:null,
  //     }
  //   },
  //   methods:{
  //     async createList(){
  //     const docRef = await addDoc(collection(db, "product"), {
  //       name: "Tokyo",
  //       country: "Japan"
  //     });
  //     console.log(docRef);
  //     }
  //   }
  // }
</script>

<style scoped>
  .write_form_container {
    width: 100%;
    padding: 0 20px;
    margin-top: 60px;
  }
  .submit {
    color: #ff6060;
    font-size: 13px;
  }

  .btn-upload {
    width: 70px;
    height: 70px;
    background: #f6f6f6;
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Poppins;
    font-size: 11px;
  }
  #file {
    display: none;
  }
  .file_photo {
    height: 118px;
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    align-items: center;
  }
  .input {
    width: 100%;
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    align-items: center;
    height: 64px;
  }
  input,
  textarea {
    font-size: 13px;
    width: 100%;
    outline: none;
  }
  textarea {
    padding-top: 32px;
    height: 500px;
  }
</style>
