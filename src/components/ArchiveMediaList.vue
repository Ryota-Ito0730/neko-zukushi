<script setup>
import ArchiveMediaListItem from "./ArchiveMediaListItem.vue";
defineProps({
  catContents: Object,
});
</script>

<template>

  <ul class="list">
    <ArchiveMediaListItem v-for="(item, key) in catContents" :item="item" :key="key"/>
  </ul>

</template>