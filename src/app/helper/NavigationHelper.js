// @flow

import React from "react";
import CategoryItem from "../data/CategoryItem";
import {categoryStore} from "../store/CategoryStore";
import Category from "../data/Category";

class NavigationHelper {

    restoreFromUri(component: React.Component, categoryId: string = null, categoryItemId: string = null) {
        if(!categoryId) {
            component.props.history.push('/');
            return;
        }

        let category = categoryStore.findCategory(categoryId);

        if(!category) {
            component.props.history.push('/');
            return;
        }

        categoryStore.setCurrentCategory(category);

        if(categoryItemId) {
            let categoryItem = categoryStore.findCategoryItem(categoryItemId);

            if(categoryItem) {
                categoryStore.setCurrentCategoryItem(categoryItem);
            } else {
                this.category(component, category);
            }
        }
    }

    category(component: React.Component, category: Category) {
        component.props.history.push('/' + category.id);
        categoryStore.setCurrentCategory(category);
    }

    categoryItem(component: React.Component, ci: CategoryItem) {
        component.props.history.push('/' + categoryStore.category.id + "/" + ci.id);
        categoryStore.setCurrentCategoryItem(ci);
    }
}

export const navigationHelper = new NavigationHelper();