<template>
  <div class="register_page">
    <div class="register_page_title"><h1>회원가입</h1></div>
    <div class="email">
      <input class="sign_form" type="text" placeholder="이메일 입력" v-model="email" />
      <img src="../assets/Message.png" alt="" />
    </div>
    <div class="pwd"><input class="sign_form" type="password" placeholder="비밀번호 입력" v-model="password" /> <img src="../assets/Lock.png" alt="" /></div>
    <div><button @click="register" class="button_common">가입하기</button></div>

    <div class="register_sns">
      <div><p>Or</p></div>
      <button @click="signInWithGoogle"><img src="../assets/signgoogle.png" alt="" /></button>
    </div>

    <div class="go_register">
      <button @click="$router.push('/signin')">이미 가입한 계정이 있다면? <span>로그인</span></button>
    </div>
  </div>

  <div class="display_name" v-if="visible == 1">
    <div class="register_page_title"><h2>닉네임을 입력 해주세요</h2></div>
    <div class="display_box">
      <input type="text" placeholder="닉네임" v-model="displayName" class="sign_form" />
      <img src="../assets/Profile.png" alt="" />
    </div>
    <button @click="registName" class="button_common">등록하기</button>
  </div>
  <!-- v-if="visible == 1" -->
</template>

<script setup>
  import {ref} from 'vue';
  import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile} from 'firebase/auth';
  import {useRouter} from 'vue-router';

  const email = ref('');
  const password = ref('');
  const displayName = ref('');
  const router = useRouter();
  const auth = getAuth();
  const visible = ref(0);

  const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(data => {
        console.log('Successfully registered!');
        console.log(data.user);
        // router.push('/feed');
        // router.replace('/marketlist');
        visible.value = 1;
      })
      .catch(error => {
        console.log(error.code);
        alert(error.message);
      });
  };
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result.user);
        // router.push('/feed');
        router.replace('/marketlist');
      })
      .catch(error => {
        //handle error
      });
  };

  const registName = () => {
    updateProfile(auth.currentUser, {
      displayName: displayName.value,
      // photoURL: "https://example.com/jane-q-user/profile.jpg"
    })
      .then(result => {
        // Profile updated!
        router.push('/marketlist');
        console.log('닉네임 등록!!');
        console.log(result.user);
        // ...
      })
      .catch(error => {
        // An error occurred
        // ...
      });
  };

  // const register = () => {
  //   createUserWithEmailAndPassword(auth, email.value, password.value)
  //     .then(data => {
  //       console.log(data.user);
  //     })
  //     .catch(err => console.log(err));
  //   updateProfile(auth.currentUser, {displayName: displayName.value})
  //     .then()
  //     .catch(err => console.log(err));
  // };
</script>

<script>
  export default {};
</script>

<style>
  @import '../css/style.css';
</style>
