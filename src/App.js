import React, {Component} from 'react';
import './App.css';
import Categories from "./app/components/CategoriesMenu";
import CategoryView from "./app/components/CategoryArticles";
import ArticleView from "./app/components/ArticleView";
import Logo from "./app/components/Logo";

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
