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
        this.categories = [
            new Category('Quick Summary', QUICK_SUMMARY, summaryItems),
            new Category('Housing', HOUSING, housingItems),
            new Category('Doctors', DOCTORS, doctorsItems),
            new Category('Schooling', SCHOOLING, schoolingItems),
            new Category('Insurance', INSURANCE, insuranceItems),
            // new Category('Cars', CARS),
            // new Category('Bus / Train', BUS_TRAIN),
            // new Category('Legal', LEGAL),
            // new Category('Banks', BANKS),
            // new Category('Playgrounds', PLAYGROUNDS),
            // new Category('Emergency', EMERGENCY),
            // new Category('Experimental', EXPERIMENTAL, experimentalItems),
            new Category('', DIVIDER),
            new CategoryLink('Talk to us', FEEDBACK, "https://docs.google.com/forms/d/e/1FAIpQLSdPjxqhzYpI4eqwGIQNK8mV4CarZx1fjCgLbrxcZIpgs2w5Ig/viewform"),
            new CategoryLink('Source Code', SOURCE_CODE, "https://bitbucket.org/rodislav/becoming"),
        ];
    }

    setCurrentCategory(category: Category) {
        this.category = category;
        this.categoryItem = null;
    }

    setCurrentCategoryItem(categoryItem: CategoryItem) {
        this.categoryItem = categoryItem;

        httpHelper.getText(data => this.currentArticle = data, categoryItem.markdownUrl);
    }

    findCategory(categoryId: string): Category {
        for (let category of this.categories) {
            if(category.id === categoryId) {
                return category;
            }
        }

        return null;
    }

    findCategoryItem(categoryItemId: string): Category {
        for (let item of this.category.items) {
            if(item.id === categoryItemId) {
                return item;
            }
        }

        return null;
    }
}

export const categoryStore = new CategoryStore();