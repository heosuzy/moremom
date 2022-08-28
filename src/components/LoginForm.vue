<template>
  <div>
    <div><p>엄마들의 중고거래 앱</p></div>
    <div><h1>MoreMom</h1></div>

    <h1>로구인</h1>
    <p><input type="text" placeholder="email" v-model="email" /></p>
    <p><input type="password" placeholder="password" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <button @click="register">Submit</button>
    <button @click="signInWithGoogle">Sign In With Google</button>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
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
        router.push('/marketlist');
      })
      .catch(error => {
        console.log(error.code);
        alert(error.message);
        switch (error.code) {
          case 'auth/invalid-email':
            errMsg.value = 'Invalid email';
            break;
          case 'auth/user-not-found':
            errMsg.value = 'No account with that email was found';
            break;
          case 'auth/wrong-password':
            errMsg.value = 'Incorrect password';
            break;
          default:
            errMsg.value = 'Email or password was incorrect';
            break;
        }
      });
  };
  const signInWithGoogle = () => {};
</script>

<script>
  export default {};
</script>

<style></style>
