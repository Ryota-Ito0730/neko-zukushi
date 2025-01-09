<script setup>
/**
 * 猫画像一覧ページのコンテンツ表示ファイルです
 * 猫画像一覧ページのルートコンポーネントとして使用しています
 */
import { ref } from "vue";
import { catObjRef, catObj} from "../catData";
import ArchiveTagList from "../components/ArchiveTagList.vue";
import ArchiveMediaList from "../components/ArchiveMediaList.vue";
import MainVisual from "../components/MainVisual.vue";
import ModalTeleport from "../components/ModalTeleport.vue";
// SFCにおける<style></style>はあえて使用せず、main.js経由で読み込みしているstyle.cssに各種スタイルを集約する

/**
 * メインコンテンツ側
 */
// 1、catデータをcatData.jsよりインポートし、変数:catContentsに代入
const catContents = catObjRef;
// 2、データの有無をチェックし、変数:isItemsにその結果を代入
const isItems = ref(0);
isItems.value = catContents.value.length;

/**
 * サイドバー側のタグを重複削除した上で出力させる
 */
let catTags01 = [];
let catTags02 = [];
for (const value of Object.values(catObj)) {
  catTags01.push(value.tagState);
  catTags02.push(value.tagCatType);
}
catTags01 = catTags01.filter((element, idx) => {
  return catTags01.indexOf(element) === idx;
});
catTags02 = catTags02.filter((element, idx) => {
  return catTags02.indexOf(element) === idx;
});
</script>

<template>
  <MainVisual />
  <div class="contents">
    <div class="side-wrapper">
      <div class="side-wrapper__inner">
        <p class="side__head">🐈タグ</p>
        <div class="tag-list-wrapper">
          <p class="side__head">様子</p>
          <ArchiveTagList v-if="isItems" :catTags="catTags01" />
          <p class="side__head">種類</p>
          <ArchiveTagList v-if="isItems" :catTags="catTags02" />
        </div>
      </div>
    </div>
    <div class="main-wrapper">
      <div class="main-wrapper__inner">
        <!-- コンポーネント化候補 -->
        <div class="list-wrapper">
          <Transition name="mediaList">
            <ArchiveMediaList v-if="isItems" :catContents="catContents" />
          </Transition>
        </div>
      </div>
    </div>
  </div><!-- contents -->
  <ModalTeleport /><!-- モーダル要素 -->
</template>
