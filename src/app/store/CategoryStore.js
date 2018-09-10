// @flow

import Category, {dummyCategory} from "../data/Category";
import {extendObservable} from "mobx";
import CategoryItem from "../data/CategoryItem";
import {httpHelper} from "../helper/HttpHelper";
import CategoryLink from "../data/CategoryLink";
import {bmObjectFactory} from "../components/bm/BMObjectFactory";
import BMCategory from "../components/bm/objects/BMCategory";
import BMCategoryItem from "../components/bm/objects/BMCategoryItem";

class CategoryStore {

    categories: Category[];
    category: Category;
    categoryItem: CategoryItem;
    categoryItems: CategoryItem[];
    currentArticle: string;

    constructor() {
        extendObservable(this, {
            category: dummyCategory,
            categoryItem: null,
            currentArticle: '',
            categories: [],
            categoryItems: []
        });
    }

    loadMenu() {
        let tmp = [];

        httpHelper.getText(data => {
            bmObjectFactory.textToBMComponents(data).forEach((value: BMCategory) => {
                    if(value.type === "category-link") {
                        tmp.push(new CategoryLink(value.title, value.id, value.url))
                    } else {
                        tmp.push(new Category(value.title, value.id, value.url))
                    }
                });

            this.categories = tmp;
        }, "/content/menu.bm");
    }

    setCurrentCategory(category: Category) {
        this.category = category;
        this.categoryItem = null;

        if(category.items.length < 1) {
            let tmp = [];

            httpHelper.getText(data => {
                bmObjectFactory.textToBMComponents(data).forEach((value: BMCategoryItem) => {
                    tmp.push(new CategoryItem(value.title, value.description, value.image, value.url))
                });

                category.items = tmp;
                this.categoryItems = tmp;
            }, category.url);
        } else {
            if(this.category === category) {
                this.categoryItems = category.items;
            }
        }
    }

    setCurrentCategoryItem(categoryItem: CategoryItem) {
        this.categoryItem = categoryItem;

        httpHelper.getText(data => this.currentArticle = data, categoryItem.markdownUrl);
    }

    findCategory(categoryId: string): Category {
        for (let category of this.categories) {
            if (category.id === categoryId) {
                return category;
            }
        }

        return null;
    }

    findCategoryItem(categoryItemId: string): Category {
        for (let item of this.category.items) {
            if (item.id === categoryItemId) {
                return item;
            }
        }

        return null;
    }
}

export const categoryStore = new CategoryStore();