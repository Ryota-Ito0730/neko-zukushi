<script setup>
import ArchiveTagListLink from "./ArchiveTagListLink.vue";
defineProps({
  item: String,
  catTags: Array,
});
</script>

<template><!-- SFCにおけるルートタグ:コンポーネント全体を囲う役割 -->

  <!-- ディレクティブによる機能を持たせる場合 templateのネストで実現できる-->
  <template v-for="(item,index) in catTags" :key="index">

    <template v-if="index === 0">
      <li class="tag-list__item">
        <ArchiveTagListLink :data-tag="'all'" :item="'すべて'" />
      </li>
    </template>

      <li class="tag-list__item">
        <ArchiveTagListLink :data-tag="item" :item="item" />
      </li>

  </template>

</template>
