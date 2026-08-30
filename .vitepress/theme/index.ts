import DefaultTheme from 'vitepress/theme'
import './custom.css'

import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return

    router.onAfterRouteChanged = () => {
      // Find the main content container and force a reflow to restart the animation
      const content = document.querySelector('.vp-doc') || document.querySelector('.VPHome')
      if (content) {
        content.classList.remove('page-transition')
        void content.clientWidth // Force reflow
        content.classList.add('page-transition')
      }
    }
  }
}
