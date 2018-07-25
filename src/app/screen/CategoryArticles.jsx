import React from "react";
import {observer} from "mobx-react";
import {categoryStore} from "../store/CategoryStore";
import CategoryCard from "./component/CategoryCard";
import CategoryItem from "../data/CategoryItem";
import {uriHelper} from "../helper/UriHelper";

class CategoryArticles extends React.Component {

    onArticleSelect(ci: CategoryItem) {
        categoryStore.setCurrentCategoryItem(ci);
        uriHelper.navigateToArticle(this, ci);
    }

    render() {
        let items = [];
        categoryStore.category.items.forEach(categoryItem => {
            items.push(<CategoryCard key={categoryItem.id}
                                     categoryItem={categoryItem}
                                     onSelect={(ci: CategoryItem) => this.onArticleSelect(ci)}
            />)
        });

        return (
            <div className={'be_CategoryView be_CategoryView_large_screen'}>
                {items}
            </div>
        );
    }

}

export default observer(CategoryArticles)