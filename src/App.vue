<script setup>
import HeaderVue from './views/HeaderVue.vue';
import FooterVue from './views/FooterVue.vue';
/**
 * 本ファイルはプロジェクトのルートコンポーネントとして、以下の役割を持たせています
 *・各ページのビューファイルを切り替える(ルーティング)
 *・ルーティングののために使用する変数や関数の管理と使用
 *
 */

</script>

<template>

  <HeaderVue />
  <RouterView />
  <FooterVue />

</template>
