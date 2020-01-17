import React from 'react';
import './App.css';
import Nav from './Nav'
import About from './About'
import Menu from './Menu'
import RecipeApi from "./RecipeApi";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FavouriteRecipe from "./FavouriteRecipe";

function App(){


    return(
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={About}/>
                    <Route path="/option1"  component={RecipeApi}/>
                    <Route path="/option2" component={FavouriteRecipe}/>
                    <Route path="/menu" component={Menu}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
