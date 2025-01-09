import { catObj } from "../catData";
import { catObjRef } from "../catData";

export const tagFilter = (e) => {
  const result = [];
  e.preventDefault();
  const selectedTag = e.target.getAttribute("data-tag");

  for (const value of Object.values(catObj)) {
    if (selectedTag === value.tagState) {
      result.push(value);
    } else if (selectedTag === value.tagCatType) {
      result.push(value);
    } else if (selectedTag === "all") {
      result.push(value);
    }
  }
  catObjRef.value = result;
};