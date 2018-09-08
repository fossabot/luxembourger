// @flow

import Category, {
    DOCTORS,
    dummyCategory,
    SOURCE_CODE,
    HOUSING,
    QUICK_SUMMARY,
    INSURANCE,
    SCHOOLING, FEEDBACK, DIVIDER
} from "../data/Category";
import {extendObservable} from "mobx";
import CategoryItem from "../data/CategoryItem";
import {housingItems} from "./hardcoded/HousingItems";
import {doctorsItems} from "./hardcoded/DoctorsItems";
import {schoolingItems} from "./hardcoded/SchoolingItems";
import {httpHelper} from "../helper/HttpHelper";
import {insuranceItems} from "./hardcoded/InsuranceItems";
import CategoryLink from "../data/CategoryLink";
import {summaryItems} from "./hardcoded/QuickSummaryItems";
import {bmObjectFactory} from "../components/bm/BMObjectFactory";
import BMCategory from "../components/bm/objects/BMCategory";
import BMCategoryItem from "../components/bm/objects/BMCategoryItem";

class CategoryStore {

    categories: Category[];
    category: Category;
    categoryItem: CategoryItem;
    currentArticle: string;

    constructor() {
        extendObservable(this, {
            category: dummyCategory,
            categoryItem: null,
            currentArticle: '',
            categories: []
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

        if(category.items.length === 0) {
            let tmp = [];

            httpHelper.getText(data => {
                bmObjectFactory.textToBMComponents(data).forEach((value: BMCategoryItem) => {
                    tmp.push(new CategoryItem(value.title, value.description, value.image, value.url))
                });

                category.items = tmp;
                this.category = category;
            }, category.url);
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