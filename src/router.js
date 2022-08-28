import {createWebHistory, createRouter} from 'vue-router';
import {getAuth, onAuthStateChanged} from 'firebase/auth';

import RegisterA from './views/RegisterA.vue';
import FeedA from './views/FeedA';
import SignIn from './views/SignIn';
import HomeA from './components/HomeA';
import ListA from './views/ListA';
import AddProduct from './views/AddProduct';
import MyPage from './views/MyPage';
import ChatPage from './views/ChatPage';
import CommunityA from './views/CommunityA';
import DetailA from './views/DetailA';

const routes = [
  {
    path: '/',
    component: HomeA,
  },
  {
    path: '/register',
    component: RegisterA,
  },
  {
    path: '/feed',
    component: FeedA,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/signin',
    component: SignIn,
  },
  {
    path: '/marketlist',
    component: ListA,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/addproduct',
    component: AddProduct,
  },
  {
    path: '/chatpage',
    component: ChatPage,
  },
  {
    path: '/mypage',
    component: MyPage,
  },
  {
    path: '/community',
    component: CommunityA,
  },
  {
    path: '/detail/:id',
    component: DetailA,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      user => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert('you dont have access');
      next('/');
    }
  } else {
    next();
  }
});

export default router;
