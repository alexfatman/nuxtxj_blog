<script setup>
import { convertDate } from '../utils';

useHead({
  title: 'Blog Page',
  meta: [
    {
      property: 'tg:site_verification',
      content: "g7j8/rPFXfhyrq5q0QQV7EsYWv4=",
    },
      {
      property: 'telegram:channel',
      content: "@aleksandr_kirop",
    },
  ],
})
</script>

<template>
  <main
    class="relative mx-auto max-w-prose overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8"
  >
    <nuxt-link
      class="block cursor-pointer"
      href="/blog"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="inline h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11 17l-5-5m0 0l5-5m-5 5h12"
        />
      </svg>
      Back
    </nuxt-link>
    <ContentDoc v-slot="{ doc }">
      <h2 class="my-4 text-4xl font-semibold">{{ doc.title }}</h2>
      <p class="my-4 text-gray-500">
        {{ doc.author }}, {{ convertDate(doc.date) }}
      </p>
      <p><img :id="titimage" :src="`${doc.imgurl}`" :alt="`${doc.title}`"></p>
      <div class="prose prose-lg first-letter:text-3xl first-letter:text-blue-600">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
  </main>
</template>
