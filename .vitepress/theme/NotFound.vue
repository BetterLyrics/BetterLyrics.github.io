<script setup lang="ts">
import { onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'

const { NotFound } = DefaultTheme

onMounted(() => {
  const redirects: Record<string, string> = {
    "/dl": "/docs/get-started/download",
    "/faq": "/docs/FAQ/data-and-feedback",
    "/apple": "/docs/features/lyrics-cfg/apple-music",
  }

  let path = window.location.pathname.toLowerCase()
  if (path.endsWith('/') && path.length > 1) {
    path = path.slice(0, -1)
  }

  if (redirects[path]) {
    window.location.replace(redirects[path])
  }
})
</script>

<template>
  <NotFound />
</template>
