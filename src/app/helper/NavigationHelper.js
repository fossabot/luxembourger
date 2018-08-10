// @flow

import React from "react";
import CategoryItem from "../data/CategoryItem";
import {categoryStore} from "../store/CategoryStore";
import Category, {dummyCategory} from "../data/Category";

class NavigationHelper {
    //FIXME find a good way to handle navigation in REACT

    gotoRoot(component: React.Component) {
        categoryStore.setCurrentCategory(dummyCategory);
        component.props.history.push('/');
    }

    restoreFromUri(component: React.Component, categoryId: string = null, categoryItemId: string = null) {

        console.log('Restoring url, categoryId: ', categoryId, ', categoryItemId: ', categoryItemId);

        if(!categoryId) {
            this.gotoRoot(component);
            return;
        }

        let category = categoryStore.findCategory(categoryId);

        if(!category) {
            this.gotoRoot(component);
            return;
        }

        categoryStore.setCurrentCategory(category);

        if(categoryItemId) {
            let categoryItem = categoryStore.findCategoryItem(categoryItemId);

            if(categoryItem) {
                categoryStore.setCurrentCategoryItem(categoryItem);
                this.setTitle(categoryItem.title);
            } else {
                this.category(component, category);
            }
        }
    }

    category(component: React.Component, category: Category) {
        component.props.history.push('/' + category.id);
        categoryStore.setCurrentCategory(category);

        this.setTitle(category.name);
    }

    categoryItem(component: React.Component, categoryItem: CategoryItem) {
        component.props.history.push('/' + categoryStore.category.id + "/" + categoryItem.id);
        categoryStore.setCurrentCategoryItem(categoryItem);

        this.setTitle(categoryItem.title);
    }

    setTitle(text: string) {
        document.title = "Becoming.lu / " + text;
    }
}

export const navigationHelper = new NavigationHelper();