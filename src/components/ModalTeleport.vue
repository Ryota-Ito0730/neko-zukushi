<script setup>
import { modalOpenRef, modalImgPathRef, modalTitleRef } from "../helpers/modalHelpers"
/**
 * モーダルウインドウ
 */
const handleCloseModal = () => {
  modalOpenRef.value = false;
};
</script>

<template>
    <Teleport to="body">
      <Transition name="modal">
        <div class="modal" v-if="modalOpenRef">
          <div class="modal-contents">
            <div class="modal__close-wrapper">
              <button class="modal__close" @click="handleCloseModal">×</button>
            </div>
            <p class="modal-contents__title">{{ modalTitleRef }}</p>
            <div class="modal-contents__img-wrapper">
              <img class="modal-contents__img" :src="modalImgPathRef" alt="" />
            </div>
          </div>
          <div class="modal-bg" @click="handleCloseModal"></div>
        </div>
      </Transition>
    </Teleport>
</template>
