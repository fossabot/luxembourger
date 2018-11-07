// @flow

import React from "react";
import CategoryItem from "../data/CategoryItem";
import {categoryStore} from "../store/CategoryStore";
import Category from "../data/Category";
import EmptyProps from "./TypeHelper";

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
                        this.updateMeta(categoryItem.title);
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

        this.updateMeta(category.name);
    }

    categoryItem(component: React.Component<EmptyProps>, categoryItem: CategoryItem) {
        component.props.history.push('/' + categoryStore.category.id + "/" + categoryItem.id);
        categoryStore.setCurrentCategoryItem(categoryItem);

        this.updateMeta(categoryItem.title);
    }

    updateMeta(text: string) {
        document.title = text + ", Becoming.lu";

        let category = categoryStore.category;
        let categoryItem = categoryStore.categoryItem;

        let metas: [] = document.getElementsByTagName("META");

        for (const meta of metas) {
            try {
                const metaName = meta.attributes.getNamedItem("property").nodeValue;

                if(metaName === "og:title") {
                    meta.setAttribute("content", text + ", promoted by Becoming.lu");
                }

                if(categoryItem) {
                    if(metaName === "og:image") {
                        meta.setAttribute("content", "https://becoming.lu" + categoryItem.image);
                    }

                    if(metaName === "og:url") {
                        meta.setAttribute("content", "https://becoming.lu/" + category.id + "/" + categoryItem.id);
                    }
                } else if(category) {
                    if(metaName === "og:image") {
                        meta.setAttribute("content", "https://becoming.lu/images/becoming.png");
                    }

                    if(metaName === "og:url") {
                        meta.setAttribute("content", "https://becoming.lu/" + category.id);
                    }
                }
            } catch (e) {
                // ignore
            }

        }
    }
}

export const navigationHelper = new NavigationHelper();