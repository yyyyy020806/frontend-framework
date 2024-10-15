import NProgress from 'nprogress'
import type { NavigationGuardWithThis, NavigationHookAfter } from 'vue-router'

export const handleRouterBeforeEach: NavigationGuardWithThis<undefined> = () => {
  NProgress.start()
}

export const handleRouterAfterEach: NavigationHookAfter = () => {
  NProgress.done()
}