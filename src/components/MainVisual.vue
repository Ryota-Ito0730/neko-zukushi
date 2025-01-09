<script setup>
import { getImageUrl } from "../helpers/getImageUrl";
import { catObj } from "../catData";

// Swiperを導入
import { register } from "swiper/element/bundle";
register();
// swiper : pagenationの設定
const pagenationSettings = {
  hideOnClick: false,
  renderBullet: (index, className) => {
    return `<span class='${className} workPagination'></span>`;
  },
};
// 空配列にpushメソッドで必要な情報を後程格納していく
const selectedData = [];
catObj.forEach(cO => {
  for (const [key, value] of Object.entries(cO)) {
    if (key === 'pickup' && value === true) {
      selectedData.push(cO.id);
    }
  }
});
// catData.js内の各猫データに、「pickup」キーを設け、「true」か「false」を付与
// 上記「true」に該当するデータがどれか特定し、そのid名を取得
// selectedData配列として、格納し本vueファイルでスワイパーアイテム内の情報として使用する
// const selectedData = ['cat01','cat07','cat11','cat15','cat18'];
</script>

<template>

  <swiper-container
    :pagination="pagenationSettings"
    :speed="2000"
    :loop="true"
    :autoplay="{
      delay: 4000,
    }"
    class="mv-swiper"
  >
    <swiper-slide
      v-for="(data, index) in selectedData"
      :key="index">
      <RouterLink :to="{ name: 'article', params: { id: data} }">
        <img :src="getImageUrl(data)" class="list__item-image" alt="" />
      </RouterLink>
    </swiper-slide>
  </swiper-container>
</template>
