import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../components/admin/AppLayout'
import AuthLayout from '../components/auth/AuthLayout'
import HomeLayout from '../components/home/HomeLayout'
import lazyLoading from './lazyLoading'
import firebase from 'firebase'

Vue.use(Router)

const demoRoutes = []
if (process.env.NODE_ENV === 'development') {
  const VueComponentTree = require('vue-component-tree').default

  demoRoutes.push(
    VueComponentTree(require.context('./..', true, /.demo.vue$/), '/demo')
  )
}

const EmptyParentComponent = {
  template: '<router-view></router-view>'
}

let router = new Router({
  mode: 'history',
  routes: [
    ...demoRoutes,
    {
      path: '*',
      redirect: { name: 'dashboard' }
    },
    {
      path: '',
      redirect: { name: 'homepage' }
    },
    {
      name: 'assessment',
      path: '/assessment',
      component: lazyLoading('public/Assessment')
    },
    {
      path: '/home',
      component: HomeLayout,
      children: [{
          name: 'homepage',
          path: '/home',
          component: lazyLoading('home/HomePage')
        },
        // {
        //     name: 'blog',
        //     path: '/blog',
        //     component: lazyLoading('public/Blog')
        //   },


        {
          name: 'events',
          path: '/events',
          component: lazyLoading('public/Events')
        },
        // {
        //     name: 'teenswithpurpose',
        //     path: '/teenswithpurpose',
        //     component: lazyLoading('public/TeensWithPurpose')
        //   },

        {
          name: 'about',
          path: '/about',
          component: lazyLoading('public/About')
        },
        {
          name: 'pricing',
          path: '/pricing',
          component: lazyLoading('public/Pricing')
        },
      ]
    },
    {
      path: '/login',
      component: AuthLayout,
      children: [{
          name: 'login',
          path: '/login',
          component: lazyLoading('auth/login/Login')
        },
        // {
        //   name: 'paymentConfirmedLogin',
        //   path: '/paymentConfirmedLogin',
        //   component: lazyLoading('auth/login/PaymentConfirmedLogin')
        // },

        {
          name: 'signup',
          path: 'signup',
          component: lazyLoading('auth/signup/Signup')
        },
        {
          name: 'mentorsignup',
          path: '/mentorsignup',
          component: lazyLoading('auth/signup/MentorSignup')
        },
        {
          path: '',
          redirect: { name: 'login' }
        }
      ]
    },
    {
      name: 'user',
      path: '/user',
      component: AppLayout,
      meta: {
        requiresAuth: true
      },
      children: [{
          name: 'dashboard',
          path: 'dashboard',
          component: lazyLoading('dashboard/Dashboard'),
          default: true
        },

        {
          name: 'my-weekly-ntention-plan',
          path: 'my-weekly-ntention-plan',
          component: lazyLoading('ntent/MyWeeklyNtentionPlan'),
        },
        {
          name: 'my-wellness-profile',
          path: 'my-wellness-profile',
          component: lazyLoading('ntent/MyWellnessProfile')
        },
        {
          name: 'scheduling',
          path: 'scheduling',
          component: lazyLoading('ntent/Scheduling')
        },
        {
          name: 'my-trackers',
          path: 'my-trackers',
          component: lazyLoading('ntent/MyTrackers')
        },
        {
          name: 'wellness-plan',
          path: 'wellness-plan',
          component: lazyLoading('ntent/WellnessPlan')
        },
        {
          name: 'my-giving-back',
          path: 'my-giving-back',
          component: lazyLoading('ntent/MyGivingBack')
        },
        {
          name: 'ntention-setter-access',
          path: 'ntention-setter-access',
          component: lazyLoading('ntent/NtentionSetterAccess')
        },
        {
          name: 'wellness-journal',
          path: 'wellness-journal',
          component: lazyLoading('ntent/WellnessJournal')
        },
        {
          name: 'account-settings',
          path: 'account-settings',
          component: lazyLoading('ntent/account-settings/AccountSettings')
        },
        {
          name: 'personal-details',
          path: 'personal-details',
          component: lazyLoading('ntent/PersonalDetails')
        },

        {
          path: '/edit-ntent',
          redirect: { name: 'edit-ntent' },
        },
        {
          path: '/comment-history',
          redirect: { name: 'comment-history' }
        },
        {
          name: 'daily-form',
          path: 'daily-form',
          component: lazyLoading('ntent/Dailyform')
        },
        {
          name: 'comment-history',
          path: 'comment-history',
          component: lazyLoading('ntent/CommentHistory')
        },
        {
          name: 'edit-profile',
          path: 'edit-profile',
          component: lazyLoading('ntent/EditProfile')
        },
        {
          name: 'edit-ntent',
          path: 'edit-ntent',
          component: lazyLoading('ntent/EditNtent')
        },
        {
          name: 'create-session',
          path: 'create-session',
          component: lazyLoading('ntent/CreateSession')
        },
        {
          name: 'user-list',
          path: 'user-list',
          component: lazyLoading('ntent/UserList')
        },
        {
          name: 'mentor-list',
          path: 'mentor-list',
          component: lazyLoading('ntent/MentorList')
        },
        {
          name: 'mentor-forms',
          path: 'mentor-forms',
          component: lazyLoading('ntent/MentorForms')
        },
        {
          name: 'mentor-availability-setter',
          path: 'mentor-availability-setter',
          component: lazyLoading('ntent/MentorAvailabilitySetter'),
          props: true
        },
        {
          name: 'user-timeslot-selector',
          path: 'user-timeslot-selector',
          component: lazyLoading('ntent/UserTimeslotSelector'),
          props: true
        },
        {
          name: 'my-intention-setters',
          path: 'my-intention-setters',
          component: lazyLoading('ntent/MyIntentionSetters'),
          props: true
        },


        {
          path: 'statistics',
          component: EmptyParentComponent,
          children: [{
              name: 'charts',
              path: 'charts',
              component: lazyLoading('statistics/charts/Charts')
            },
            {
              name: 'progress-bars',
              path: 'progress-bars',
              component: lazyLoading('statistics/progress-bars/ProgressBars'),
            },
            {
              path: '',
              redirect: { name: 'charts' }
            }
          ]
        },
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('login')
  else next()
})

export default router
