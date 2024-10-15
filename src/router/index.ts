import { createRouter, createWebHistory } from 'vue-router'
import { handleRouterBeforeEach, handleRouterAfterEach } from './permission.js'
import routes from './routes.js'

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach(handleRouterBeforeEach)
router.afterEach(handleRouterAfterEach)

export default router