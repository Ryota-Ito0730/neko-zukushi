<script setup>
import ArchiveTagListItem from "./ArchiveTagListItem.vue";
const props = defineProps({
  catTags: Array,
});
const catTags = props.catTags;
</script>

<template>
  <ul class="tag-list">
    <ArchiveTagListItem :catTags="catTags"/>
  </ul>
</template>
