const categoriesEl = document.querySelector("#categories");
const categoriesItemsEl = categoriesEl.querySelectorAll(".item");
console.log("Number of categories:", categoriesItemsEl.length);

categoriesItemsEl.forEach((categoryItem) => {
  const categoryName = categoryItem.querySelector("h2").textContent;
  const categoryElements = categoryItem.querySelectorAll("ul li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
