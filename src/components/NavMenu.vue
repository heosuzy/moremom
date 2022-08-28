<template>
  <nav class="footer">
    <router-link to="/marketlist">
      <div>
        <div><img src="../assets/nav_home.png" alt="" /></div>
        <p>홈</p>
      </div>
    </router-link>
    <router-link to="/community">
      <div>
        <img src="../assets/nav_commuity.png" alt="" />
        <p>커뮤니티</p>
      </div>
    </router-link>
    <router-link to="/chatpage">
      <div>
        <img src="../assets/nav_chat.png" alt="" />
        <p>체팅창</p>
      </div>
    </router-link>
    <router-link to="/mypage">
      <div>
        <div class="center"><img src="../assets/nav_mypage.png" alt="" /></div>
        <p>마이페이지</p>
      </div>
    </router-link>

    <!-- <router-link to="/">home</router-link>
    <router-link to="/register">register</router-link>
    <router-link to="/feed">feed</router-link>
    <router-link to="/signin">sign</router-link>
    <button @click="handleSignOut" v-if="isLoggedIn">로그아웃</button>
    <router-link to="/marketlist">마켓</router-link>
    <router-link to="/addproduct">상품추가</router-link> -->
  </nav>
</template>

<script>
  export default {
    name: 'NavMenu',
  };
</script>

<style scoped>
  .footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    position: fixed;
    bottom: 0;
    padding: 0 30px;
    height: 80px;
    background-color: #fff;
    box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.1);
  }

  img {
    margin: 0 auto;
    margin-bottom: 4px;
  }
  p {
    font-size: 12px;
    color: #ada4a5;
    font-weight: medium;
  }
</style>
