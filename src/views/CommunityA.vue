<template>
  <body>
    <header>
      <div class="list_header">
        <div class="list_icon_l"></div>
        <div class="list_header_center">
          <p>커뮤니티</p>
        </div>
        <div class="list_icon_r">
          <img src="../assets/search_icon.png" alt="" />
          <img class="alert_icon" src="../assets/Notification.png" alt="" />
        </div>
      </div>
    </header>

    <nav id="nav">
      <div class="nav_container">
        <ul class="nav_flex_container">
          <li><a href="#">#카테고리1</a></li>
          <li><a href="#">#카테고리2</a></li>
          <li><a href="#">#카테고리3</a></li>
          <li><a href="#">#카테고리4</a></li>
          <li><a href="#">#카테고리5</a></li>
        </ul>
      </div>
    </nav>

    <main id="main">
      <div class="main_container">
        <ul class="main_contents">
          <li class="main_contents_li">
            <ul>
              <li class="title_menu"><a href="#">#카테고리1</a></li>
              <li class="menu_content"><a href="#">오늘 뭐 먹을까요?</a></li>
              <li class="good_bt"><button>좋아요 10</button></li>
              <li class="comment_bt"><button>댓글 0</button></li>
            </ul>
          </li>

          <li class="main_contents_li">
            <ul>
              <li class="title_menu"><a href="#">#카테고리1</a></li>
              <li class="menu_content"><a href="#">오늘 뭐 먹을까요?</a></li>
              <li class="good_bt"><button>좋아요 10</button></li>
              <li class="comment_bt"><button>댓글 0</button></li>
            </ul>
          </li>

          <li class="main_contents_li">
            <ul>
              <li class="title_menu"><a href="#">#카테고리1</a></li>
              <li class="menu_content"><a href="#">오늘 뭐 먹을까요?</a></li>
              <li class="good_bt"><button>좋아요 10</button></li>
              <li class="comment_bt"><button>댓글 0</button></li>
            </ul>
          </li>

          <li class="main_contents_li">
            <ul>
              <li class="title_menu"><a href="#">#카테고리1</a></li>
              <li class="menu_content"><a href="#">오늘 뭐 먹을까요?</a></li>
              <li class="good_bt"><button>좋아요 10</button></li>
              <li class="comment_bt"><button>댓글 0</button></li>
            </ul>
          </li>

          <li class="main_contents_li">
            <ul>
              <li class="title_menu"><a href="#">#카테고리1</a></li>
              <li class="menu_content"><a href="#">오늘 뭐 먹을까요?</a></li>
              <li class="good_bt"><button>좋아요 10</button></li>
              <li class="comment_bt"><button>댓글 0</button></li>
            </ul>
          </li>

          <li class="main_contents_li">
            <ul>
              <li class="title_menu"><a href="#">#카테고리1</a></li>
              <li class="menu_content"><a href="#">오늘 뭐 먹을까요?</a></li>
              <li class="good_bt"><button>좋아요 10</button></li>
              <li class="comment_bt"><button>댓글 0</button></li>
            </ul>
          </li>

          <li class="main_contents_li">
            <ul>
              <li class="title_menu"><a href="#">#카테고리1</a></li>
              <li class="menu_content"><a href="#">오늘 뭐 먹을까요?</a></li>
              <li class="good_bt"><button>좋아요 10</button></li>
              <li class="comment_bt"><button>댓글 0</button></li>
            </ul>
          </li>

          <li class="main_contents_li">
            <ul>
              <li class="title_menu"><a href="#">#카테고리1</a></li>
              <li class="menu_content"><a href="#">오늘 뭐 먹을까요?</a></li>
              <li class="good_bt"><button>좋아요 10</button></li>
              <li class="comment_bt"><button>댓글 0</button></li>
            </ul>
          </li>

          <li class="main_contents_li">
            <ul>
              <li class="title_menu"><a href="#">#카테고리1</a></li>
              <li class="menu_content"><a href="#">오늘 뭐 먹을까요?</a></li>
              <li class="good_bt"><button>좋아요 10</button></li>
              <li class="comment_bt"><button>댓글 0</button></li>
            </ul>
          </li>
        </ul>
      </div>
    </main>

    <WriteButton />
    <NavMenu />
  </body>
</template>

<script>
  import NavMenu from '../components/NavMenu.vue';

  import WriteButton from '@/components/WriteButton.vue';
  export default {
    name: 'App',
    components: {NavMenu, WriteButton},
  };
</script>

<style scoped>
  @import '../css/style.css';
  @import '../css/reset.css';
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');

  html,
  body {
    width: 100%;
    margin: 0 auto;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  h1 {
    display: none;
  }

  /* 헤더 */
  #header .header_container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    margin: 0 auto;
    background-color: #ffffff;
  }
  #header .header_container .header_flex_container {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #header .header_container .header_flex_container > li {
    text-align: center;
  }

  #header .header_container .header_flex_container > li:first-child {
    flex: 1 1 95%;
  }
  #header .header_container .header_flex_container > li:first-child > a {
    font-family: 'Noto Sans KR', sans-serif;
    width: 56px;
    height: 21px;
    margin-left: 20%;
    color: #333333;
    font-size: 0.938em;
    font-weight: 500;
  }
  #header .header_container .header_flex_container > li:nth-child(n + 2) {
    flex: 1 1 9%;
  }
  #header .header_container .header_flex_container > li:last-child {
    padding-right: 2%;
  }
  #header .header_container .header_flex_container > li > a.txtnone {
    display: block;
    text-indent: -9999px;
  }
  #header .header_container .header_flex_container > li > a.search_icon {
    background: url(../assets/search_icon.png) no-repeat center;
    background-size: contain;
  }
  #header .header_container .header_flex_container > li > a.alarm_icon {
    background: url(../assets/alarm_icon.png) no-repeat center;
    background-size: contain;
  }

  /* 네비 */
  #nav .nav_container {
    width: 100%;
    margin: 0 auto;
    margin-top: 60px;
    background-color: #f5f5f5;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    box-sizing: border-box;
  }

  #nav .nav_container .nav_flex_container {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  #nav .nav_container .nav_flex_container > li > a {
    display: block;
    padding: 5px;
    color: #333333;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 0.625em;
  }
  #nav .nav_container .nav_flex_container > li > a:hover {
    border: 1px solid #563434;
    box-sizing: border-box;
    border-radius: 19px;
  }

  /* 메인 */
  #main .main_container {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  }
  #main .main_container .main_contents {
    width: 90%;
    margin: 0 auto;
  }
  #main .main_container .main_contents .main_contents_li {
    width: 100%;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: #f7f8f8;
    margin-top: 16px;
  }
  #main .main_container .main_contents .main_contents_li > ul {
    width: 100%;
  }
  #main .main_container .main_contents .main_contents_li > ul li.title_menu {
    width: 54px;
    height: 17px;
    background-color: #ada4a5;
    border-radius: 5px;
    margin: 11px 16px;
  }
  #main .main_container .main_contents .main_contents_li > ul li.title_menu > a {
    display: block;
    line-height: 15px;
    color: #ffffff;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 0.625em;
    text-align: center;
  }
  #main .main_container .main_contents .main_contents_li > ul li.menu_content {
    width: 100%;
    margin-left: 16px;
    margin-bottom: 11px;
  }
  #main .main_container .main_contents .main_contents_li > ul li.menu_content > a {
    display: block;
    width: 204px;
    height: 15px;
    color: #333333;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 0.75em;
    font-weight: 400;
    line-height: 15px;
  }
  #main .main_container .main_contents .main_contents_li > ul > li:nth-child(n + 3) {
    height: 15px;
    float: left;
    margin-left: 16px;
    margin-bottom: 13px;
  }
</style>
