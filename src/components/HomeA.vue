<template>
  <div class="main">
    <div class="main_content">
      <div>
        <img class="main_logo" src="../assets/logo_text.png" alt="logo" />
      </div>
      <div>
        <button class="main_start" @click="$router.replace('/signin')">시작하기</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  @import '../css/style.css';
</style>
