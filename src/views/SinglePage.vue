<script setup>
import { catObj } from '../catData.js';
import { getImageUrl } from '../helpers/getImageUrl.js';
import { useRoute } from 'vue-router';
import { tagFilter }  from "../helpers/tagFilter"
// idを元に特定の猫記事の情報を取得
const route = useRoute();
const catId = route.params.id;
const articleInfo = catObj.find((obj) => obj.id === catId);

</script>

<template>
  <div class="article">
    <div class="article__inner">
      <div class="article__image-wrapper">
        <img class="article__image" :src="getImageUrl(articleInfo.fileName)" alt="">
      </div>
      <div class="article__title-wrapper">
        <h2 class="article__title">{{articleInfo.title}}</h2>
      </div>
      <div class="article__tag-wrapper">
        <div class="article-tag-top">
          <p class="article-tag-title">様子:</p>
          <RouterLink
            class="article-tag"
            :to="{ name: 'home' }"
            :data-tag="articleInfo.tagState"
            @click="tagFilter"
          >
          {{ articleInfo.tagState }}
          </RouterLink>
        </div>

        <div class="article-tag-bottom">
          <p class="article-tag-title">種類:</p>
          <RouterLink
            class="article-tag"
            :to="{ name: 'home' }"
            :data-tag="articleInfo.tagCatType"
            @click="tagFilter"
          >
          {{ articleInfo.tagCatType }}
          </RouterLink>
        </div>
      </div>
      <div class="article__description-wrapper">
        <p class="article__description">{{articleInfo.description}}</p>
      </div>
    </div>
  </div>

</template>
