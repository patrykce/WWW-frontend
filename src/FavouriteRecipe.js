import React, {useEffect, useState} from 'react'
import './recipe.module.css'
import './App.css'
import Recipe from "./Recipe";

const FavouriteRecipe = ({tittle,calories,image,ingredients}) => {
    const [APPLICATION_ID]=useState('dbf7b0c9')
    const [APPLICATION_KEY]=useState('f1d7ff79039dbddda0a99194cf00bca5')

    const [recipes, setRecipes] = useState([])

    const getRecipes =  async () => {
        const response = await fetch(`https://api.edamam.com/search?q=banana&app_id=${APPLICATION_ID}&app_key=${APPLICATION_KEY}`)
        const data = await response.json()
        setRecipes(data.hits)
    }


    useEffect(()=>{
        getRecipes()
    },[] )


    return(
        <div className="RecipeApi">
            <div className="recipes">
                {recipes.map(recipe => (
                    <Recipe className="recipe"
                            key={recipe.recipe.label}
                            tittle={recipe.recipe.label}
                            calories={Math.ceil(recipe.recipe.calories)}
                            image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    )

}

export default FavouriteRecipe