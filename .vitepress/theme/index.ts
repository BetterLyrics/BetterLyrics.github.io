import DefaultTheme from 'vitepress/theme'
import './custom.css'

import Layout from './Layout.vue'
import NotFound from './NotFound.vue'

import { nextTick } from 'vue'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  NotFound: NotFound,
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return

    router.onAfterRouteChanged = () => {
      nextTick(() => {
        // Find the main content container and force a reflow to restart the animation
        const content = document.querySelector('#VPContent') as HTMLElement
        if (content) {
          content.style.animation = 'none'
          void content.offsetWidth // Force reflow
          content.style.animation = ''
        }
      })
    }
  }
}
