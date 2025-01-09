<script setup>
import { getImageUrl } from "../helpers/getImageUrl"
import { modalOpenRef, modalImgPathRef, modalTitleRef } from "../helpers/modalHelpers"
import { tagFilter }  from "../helpers/tagFilter"

defineProps({
    item: Object,
});

/**
 * モーダルウインドウの表示用関数
 */
const handleOpenModal = (modalInfo) => {
  modalImgPathRef.value = new URL(
    `/src/assets/images/${modalInfo.fileName}.webp`,
    import.meta.url
  ).href;
  modalTitleRef.value = modalInfo.title;
  modalOpenRef.value = true;
};

</script>

<template>

  <li class="list__item">
    <p class="list__item-head">
      {{ item.title }}
    </p>
    <div class="list__item-image-wrapper">
      <img
        :src="getImageUrl(item.fileName)"
        class="list__item-image"
        alt=""
        @click="handleOpenModal(item)"
      />
    </div>
    <div class="list__item-tags">
      <span class="tag-label">様子:</span>
      <div class="tag-wrapper">
        <a
          class="tag"
          href="#"
          :data-tag="item.tagState"
          @click="tagFilter"
          >{{ item.tagState }}</a
        >
      </div>
    </div>
    <div class="list__item-tags">
      <span class="tag-label">種類:</span>
      <div class="tag-wrapper">
        <a
          class="tag"
          href="#"
          :data-tag="item.tagCatType"
          @click="tagFilter"
          >{{ item.tagCatType }}</a
        >
      </div>
    </div>
    <div class="page-link-wrapper">
      <RouterLink class="page-link" :to="{ name: 'article', params: { id: item.id} }">詳しく見る</RouterLink>
    </div>
  </li>

</template>