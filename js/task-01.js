const categories = document.getElementById('categories');
const categoryItems = categories.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
    const name = item.querySelector('h2').textContent;
    const elements = item.querySelectorAll('ul > li');

    console.log(`Category: ${name}`);
    console.log(`Elements: ${elements.length}`);
});
