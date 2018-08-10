import React from "react";
import {observer} from "mobx-react";
import {categoryStore} from "../store/CategoryStore";
import CategoryCard from "./component/CategoryCard";
import CategoryItem from "../data/CategoryItem";
import {navigationHelper} from "../helper/NavigationHelper";
import {DUMMY} from "../data/Category";
import Category from "../data/Category";
import * as ReactDOM from "react-dom";

class CategoryView extends React.Component {

    category: Category = null;

    onArticleSelect(categoryItem: CategoryItem) {
        navigationHelper.categoryItem(this, categoryItem);
    }

    componentDidMount() {
        navigationHelper.restoreFromUri(this,
            this.props.match.params.categoryId,
            this.props.match.params.categoryItemId);
    }

    scrollTopIfNeeded() {
        if(this.category !== categoryStore.category && ReactDOM.findDOMNode(this)) {
            ReactDOM.findDOMNode(this).scrollTop = 0;
        }

        this.category = categoryStore.category;
    }

    render() {

        setTimeout(() => this.scrollTopIfNeeded(), 10);

        if (categoryStore.category.id === DUMMY) {
            return <div/>;
        }

        let items = [];
        categoryStore.category.items.forEach(categoryItem => {
            items.push(<CategoryCard key={categoryItem.id}
                                     categoryItem={categoryItem}
                                     onSelect={(ci: CategoryItem) => this.onArticleSelect(ci)}
            />)
        });

        return <div className={'be_CategoryView'}>
            {items}
        </div>;
    }

}

export default observer(CategoryView)