<script setup>
import { tagFilter } from "../helpers/tagFilter";
const props = defineProps({
  datatag: String,
  item: String,
});
</script>
<template>
  <a
    class="tag-list__tag"
    href="#"
    :data-tag="props.dataTag"
    @click="tagFilter($event)"
    >{{ props.item }}</a
  >
</template>
