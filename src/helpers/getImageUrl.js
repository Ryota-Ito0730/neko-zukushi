/**
 * 画像パスを出力します
 * ※下記記述でvite使用環境ビルド後の不具合を解消しています
 *
 */
export const getImageUrl = (fileName) => {
  return new URL(`/src/assets/images/${fileName}.webp`, import.meta.url).href;
};