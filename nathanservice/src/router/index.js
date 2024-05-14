import { createRouter, createWebHashHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingView,
    meta: { requiresAuth: false }
  },
  {
    path: '/meist',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/teenused',
    name: 'services',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ServicesView.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/tehtud-tood',
    name: 'previous-work',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PreviousWorkView.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/kontakt',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/partnerid',
    name: 'partners',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PartnersView.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/admin-login',
    name: 'admin-login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/admin-home',
    name: 'admin-home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminHomeView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin-services',
    name: 'admin-services',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminServicesView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin-previous-work',
    name: 'admin-previous-work',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminPreviousWorkView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin-contact',
    name: 'admin-contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminContactView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin-partners',
    name: 'admin-partners',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminPartnersView.vue'),
    meta: { requiresAuth: true }
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    scrollTo(0,0);
  }
})

// Add navigation guard to check authentication before each navigation
router.beforeEach((to, from, next) => {
  console.log("router check");
  // Check if the route requires authentication
  if (to.meta.requiresAuth) {
    // Check authentication status here, e.g., by making an API request
    // If user is authenticated, proceed to the requested route
    // If user is not authenticated, redirect to login page or display error message
    // Example API request:
    fetch("/auth/authenticate", {
      method: "GET",
      credentials: 'include' // Include credentials if using cookies or tokens for authentication
    })
    .then(response => {
      console.log(response);
      if (response.ok) {
        // User is authenticated, proceed to requested route
        next();
      } else {
        console.log("Router: not authenticated");
        // User is not authenticated, redirect to login page or display error message
        next('/admin-login'); // Redirect to login page
        // Alternatively, you can display an error message here
      }
    })
    .catch(error => {
      console.error('Error checking authentication:', error);
      // Handle error as needed, e.g., display an error message
      next(false); // Prevent navigation
    });
  } else {
    // If the route does not require authentication, proceed to the requested route
    next();
  }
});

export default router
