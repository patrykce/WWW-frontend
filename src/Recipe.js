import React from 'react'
import './recipe.module.css'

const Recipe = ({tittle,calories,image,ingredients}) => {
    return(
        <div className="recipe">
            <h1 >{tittle}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p className="calories">kcal: {calories}</p>
            <img className="recipeImage" src={image} alt=""/>
        </div>
    )
}

export default Recipe