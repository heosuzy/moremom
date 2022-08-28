<template>
  <div class="login_page">
    <div class="login_page_title">
      <p>
        엄마들의 중고거래 앱
        <img src="../assets/loginpage0.png" alt="" />
      </p>
      <h1>More<span>Mom</span></h1>
    </div>

    <div class="email">
      <input class="sign_form" type="text" placeholder="이메일 입력" v-model="email" />
      <img src="../assets/Message.png" alt="" />
    </div>
    <div class="pwd">
      <input class="sign_form" type="password" placeholder="비밀번호 입력" v-model="password" />
      <img src="../assets/Lock.png" alt="" />
    </div>
    <div class="errmsg">
      <p v-if="errMsg">{{ errMsg }}</p>
    </div>
    <div><button @click="register" class="button_common">로그인</button></div>
    <div>
      <button class="go_register" @click="$router.push('/register')">아직 회원이 아니신가요? <span>가입하기</span></button>
    </div>

    <div class="signin_sns">
      <div><p>SNS 계정으로 로그인</p></div>
      <button @click="signInWithGoogle">
        <img src="../assets/signgoogle.png" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
  import {useRouter} from 'vue-router';

  const email = ref('');
  const password = ref('');
  const errMsg = ref(); // error message
  const router = useRouter();

  const register = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
      .then(data => {
        console.log('Successfully sign in! ');
        console.log(auth.currentUser);
        // router.push('/feed');
        router.replace('/marketlist');
      })
      .catch(error => {
        console.log(error.code);
        alert(error.message);
        switch (error.code) {
          case 'auth/invalid-email':
            errMsg.value = '유효하지 않은 형식의 이메일 입니다';
            break;
          case 'auth/user-not-found':
            errMsg.value = '해당 이메일 계정을 찾을 수 없습니다';
            break;
          case 'auth/wrong-password':
            errMsg.value = '잘못된 비밀번호 입니다';
            break;
          default:
            errMsg.value = '이메일 또는 비밀번호가 잘못되었습니다';
            break;
        }
      });
  };
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
      .then(result => {
        console.log(result.user);
        router.push('/marketlist');
      })
      .catch(error => {
        //handle error
      });
  };
</script>

<script>
  export default {};
</script>

<style>
  @import '../css/style.css';
</style>
