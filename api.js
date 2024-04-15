let rr = document.getElementById("rr");
const APIkey = '4c96776dbbe142d584cac15f3cf210b5';

// Function to fetch recipe data
async function fetchRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${APIkey}&number=1`);
    const data = await response.json();
    return data.recipes;
}
rr.addEventListener('click', () => {
    document.getElementById("recipe").innerHTML = '';
    fetchRecipes()
        .then(recipes => {
            recipes.forEach(recipe => {
                let p = document.createElement("p")
                p.innerHTML = `${recipe.title}`
                let img = document.createElement("img")
                img.onload = function() {
                    img.classList.add("loaded");
                };
                img.src = recipe.image;
                document.getElementById("recipe").appendChild(p)
                document.getElementById("recipe").appendChild(img)
            });
        })
        .catch(error => {
            console.error('Error fetching recipes:', error);
        });
});