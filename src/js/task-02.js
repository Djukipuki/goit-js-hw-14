const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientList = document.getElementById('ingredients');

ingredients.forEach(ingredientName => {
    const newIngredient = document.createElement('li');

    newIngredient.textContent = ingredientName;
    newIngredient.classList.add('item');

    ingredientList.appendChild(newIngredient);
});
