import React from "react";
import {observer} from "mobx-react";
import {categoryStore} from "../store/CategoryStore";
import CategoryCard from "./CategoryCard";
import CategoryItem from "../data/CategoryItem";

class CategoryArticles extends React.Component {


    render() {
        let items = [];
        categoryStore.category.items.forEach(categoryItem => {
            items.push(<CategoryCard key={categoryItem.id}
                                     categoryItem={categoryItem}
                                     onSelect={(ci: CategoryItem) => categoryStore.setCurrentCategoryItem(ci)}
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