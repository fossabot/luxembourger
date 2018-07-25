import React, {Component} from 'react';
import './App.css';
import CategoriesMenu from "./app/screen/CategoriesMenu";
import CategoryView from "./app/screen/CategoryArticles";
import ArticleView from "./app/screen/ArticleView";
import Logo from "./app/screen/component/Logo";
import {Route} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path='/*' component={Logo}/>
                <Route exact path='/*' component={CategoriesMenu}/>

                <Route exact path='/:category' component={CategoryView}/>

                <Route exact path='/:category/:item' component={CategoryView} />
                <Route exact path='/:category/:item' component={ArticleView} />
            </div>
        );
    }
}

export default App;
