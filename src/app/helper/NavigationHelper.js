// @flow

import React from "react";
import CategoryItem from "../data/CategoryItem";
import {categoryStore} from "../store/CategoryStore";
import Category from "../data/Category";
import EmptyProps from "./TypeHelper";
import {metaHelper} from "./MetaHelper";

class NavigationHelper {
    // FIXME find a good way to handle navigation in REACT

    gotoRoot(component: React.Component<EmptyProps>) {
        if(component) {
            component.props.history.push('/');
        }

        categoryStore.setCurrentCategory(null);
    }

    restoreFromUri(component: React.Component<EmptyProps>, categoryId: string, categoryItemId: string) {

        console.info('Restoring url, categoryId: ', categoryId, ', categoryItemId: ', categoryItemId);

        if(!categoryId || categoryId === "") {
            this.gotoRoot(component);
            return;
        }

        categoryStore.findCategory(categoryId).subscribe((category: Category) => {
            if(!category) {
                this.gotoRoot(component);
                return;
            }

            categoryStore.setCurrentCategory(category);

            if(categoryItemId) {
                categoryStore.findCategoryItem(categoryItemId).subscribe((categoryItem: CategoryItem) => {
                    if(categoryItem) {
                        categoryStore.setCurrentCategoryItem(categoryItem);
                        metaHelper.updateMeta(categoryItem.title);
                    } else {
                        this.category(component, category);
                    }
                });
            }
        });
    }

    category(component: React.Component<EmptyProps>, category: Category) {
        component.props.history.push('/' + category.id);
        categoryStore.setCurrentCategory(category);

        metaHelper.updateMeta(category.name);
    }

    categoryItem(component: React.Component<EmptyProps>, categoryItem: CategoryItem) {
        component.props.history.push('/' + categoryStore.category.id + "/" + categoryItem.id);
        categoryStore.setCurrentCategoryItem(categoryItem);

        metaHelper.updateMeta(categoryItem.title);
    }
}

export const navigationHelper = new NavigationHelper();