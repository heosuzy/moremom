<template>
  <button>
    <div>
      <img @click="$router.push('/addproduct')" src="../assets/WriteButton.png" alt="" />
    </div>
  </button>
</template>

<script>
  export default {
    name: 'WriteButton',
  };
</script>

<style scoped>
  button {
    position: fixed;
    right: 20px;
    bottom: 103px;
    width: 60px;
    height: 60px;
    background: linear-gradient(92.08deg, #ff416c 0%, #ff4b2b 100%);
    /* blue-shadow */
    border-radius: 50%;
    box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.3);
  }
  button div {
    display: flex;
    justify-content: center;
  }
</style>
