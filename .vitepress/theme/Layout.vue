<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'

const { isDark } = useData()

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async () => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  // Disable native CSS transitions to prevent visual conflict with View Transitions
  const style = document.createElement('style')
  style.innerHTML = `* { transition: none !important; }`
  document.head.appendChild(style)

  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
    
    // Force synchronous DOM update for the "new" snapshot
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  transition.finished.finally(() => {
    document.head.removeChild(style)
  })
})
</script>

<template>
  <DefaultTheme.Layout />
</template>
