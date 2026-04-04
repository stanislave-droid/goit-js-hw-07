const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);
categories.forEach(output);

function output(item) {
  console.log(`Category: ${item.children[0].textContent}`);
  console.log(`Elements: ${item.children[1].children.length}`);
}
