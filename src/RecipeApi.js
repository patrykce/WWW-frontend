import React,{useState,useEffect} from 'react';
import Recipe from './Recipe'
import './App.css';


function RecipeApi(props){

    const [APPLICATION_ID]=useState('dbf7b0c9')
    const [APPLICATION_KEY]=useState('f1d7ff79039dbddda0a99194cf00bca5')

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    const [query,setQuery] = useState('chicken')

    const getRecipes =  async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APPLICATION_ID}&app_key=${APPLICATION_KEY}`)
        const data = await response.json()
        setRecipes(data.hits)
    }


    useEffect(()=>{
        getRecipes()
    },[query] )


    const updateSearch = e =>{
        setSearch(e.target.value)
        console.log(search)
    }

    const getSearch = e =>{
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }

    return(
        <div className="RecipeApi">
            <form onSubmit={getSearch} className="searchForm">
                    <input className="searchBar" type="text" value={search} onChange={updateSearch}/>
                    <button className="searchButton" type="submit">Search</button>
            </form>
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

export default RecipeApi
