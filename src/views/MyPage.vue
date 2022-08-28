<template>
  <header>
    <div class="list_header">
      <div class="list_icon_l">
        <button @click="$router.push('/marketlist')">
          <img src="../assets/arrow_left.png" alt="" />
        </button>
      </div>
      <div class="list_header_center">
        <p>마이페이지</p>
      </div>
      <div class="list_icon_r"></div>
    </div>
  </header>
  <nav>
    <button class="logout button_common" @click="handleSignOut" v-if="isLoggedIn">로그아웃</button>
  </nav>

  <router-view></router-view>
  <NavMenu />
</template>
<script setup>
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
      router.push('/signin');
    });
  };
</script>
<script>
  import NavMenu from '../components/NavMenu.vue';

  export default {
    name: 'App',
    components: {NavMenu},
  };
</script>

<style scoped>
  @import '../css/style.css';

  .logout {
    /* margin-top: 80px;/ */
    position: absolute;
    left: 50%;
    bottom: 100px;
    transform: translateX(-50%);
  }
</style>
