<template>
  <!-- 로고 메인 화면 -->
  <!-- <HomeA></HomeA> -->
  <router-view></router-view>
  <NavMenu></NavMenu>
</template>

<!-- <script setup>
  import {onMounted, ref} from 'vue';
  import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
  import {useRouter} from 'vue-router';

  const isLoggedIn = ref(false);
  const router = useRouter();

  let auth;
  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user) {
        isLoggedIn.value = true;
      } else {
        isLoggedIn.value = false;
      }
    });
  });

  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push('/');
    });
  };
</script> -->

<script>
  // import {useRouter} from 'vue-router';
  // const router = useRouter();
  import navmenu from './components/NavMenu.vue';
import homea from './components/HomeA.vue';

  export default {
    name: 'App',
    data() {
      return {
        show: 0,
      };
    },
    // mounted() {
    //   setTimeout(() => {
    //     this.show = 1;
    //   }, 5000);
    // },
    components: {
    NavMenu: navmenu,
    HomeA: homea,
},
    method: {},
  };
</script>

<style>
  @import './css/style.css';
</style>
