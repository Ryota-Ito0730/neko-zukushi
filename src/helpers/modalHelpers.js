import { ref } from "vue";
/**
 * モーダルウインドウ
 * モーダルトリガーとターゲット双方で使用する変数を格納しています
 * modalOpenRef : モーダル開閉を管理
 * modalImgPathRef : モーダル内で使用する画像ファイルパスを管理
 * modalTitleRef : モーダル内で使用するテキストを管理
 */
export const modalOpenRef = ref(false);

export const modalImgPathRef = ref(null);

export const modalTitleRef = ref(null);