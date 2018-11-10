import React from "react";
import {observer} from "mobx-react";
import {categoryStore} from "../store/CategoryStore";
import CategoryCard from "./CategoryCard";
import CategoryItem from "../data/CategoryItem";
import {navigationHelper} from "../helper/NavigationHelper";
import Category from "../data/Category";
import * as ReactDOM from "react-dom";

class CategoryMenu extends React.Component {

    category: Category = null;

    onArticleSelect(categoryItem: CategoryItem) {
        navigationHelper.categoryItem(this, categoryItem);
    }

    componentDidMount() {
        navigationHelper.restoreFromUri(this,
            this.props.match.params.categoryId,
            this.props.match.params.categoryItemId);
    }

    render() {
        if (!categoryStore.category) {
            return <span />;
        }

        let currentCategoryItemId = categoryStore.categoryItem ? categoryStore.categoryItem.id : "";

        let items = [];
        categoryStore.categoryItems.forEach(categoryItem => {
            items.push(<CategoryCard key={categoryItem.id}
                                     selected={currentCategoryItemId === categoryItem.id}
                                     categoryItem={categoryItem}
                                     onSelect={(ci: CategoryItem) => this.onArticleSelect(ci)}
            />)
        });

        let maybeHidden = 'be_CategoryMenu';
        if(categoryStore.categoryItem) {
            maybeHidden += " hidden";
        }

        return <div className={maybeHidden}>
            {items}
        </div>;
    }

}

export default observer(CategoryMenu)