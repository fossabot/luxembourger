import React, {Component} from 'react';
import './App.css';
import Categories from "./app/components/Categories";
import CategoryView from "./app/components/CategoryView";
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
