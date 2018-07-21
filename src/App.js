import React, {Component} from 'react';
import './App.css';
import Categories from "./app/screen/CategoriesMenu";
import CategoryView from "./app/screen/CategoryArticles";
import ArticleView from "./app/screen/ArticleView";
import Logo from "./app/screen/Logo";

class App extends Component {
    render() {
        return (
            <div>
                <Logo />
                <Categories />
                <CategoryView />
                <ArticleView />
            </div>
        );
    }
}

export default App;
