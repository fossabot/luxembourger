// @flow

import React from "react";
import CategoryItem from "../objects/CategoryItem";
import {categoryStore} from "../store/CategoryStore";
import Category from "../objects/Category";
import EmptyProps from "./TypeHelper";
import {htmlHelper} from "./HtmlHelper";

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
            htmlHelper.updateHeadMeta(category.name);

            if(categoryItemId) {
                categoryStore.findCategoryItem(categoryItemId).subscribe((categoryItem: CategoryItem) => {
                    if(categoryItem) {
                        categoryStore.setCurrentCategoryItem(categoryItem);
                        htmlHelper.updateHeadMeta(categoryItem.title);
                    }
                });
            }
        });
    }

}

export const navigationHelper = new NavigationHelper();