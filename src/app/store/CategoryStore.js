// @flow

import Category, {
    BANKS,
    BUS_TRAIN,
    CARS,
    DOCTORS,
    dummyCategory,
    EMERGENCY,
    HOUSING,
    INSURANCE,
    LEGAL,
    PLAYGROUNDS,
    SCHOOLING
} from "../data/Category";
import Housing from '@material-ui/icons/Home';
import Doctors from '@material-ui/icons/FavoriteBorder';
import Banks from '@material-ui/icons/LocalAtm';
import Schooling from '@material-ui/icons/ChildCare';
import Insurance from '@material-ui/icons/VerifiedUser';
import Cars from '@material-ui/icons/DirectionsCar';
import Bus from '@material-ui/icons/DirectionsBus';
import Legal from '@material-ui/icons/AccountBalance';
import Playgrounds from '@material-ui/icons/ChildFriendly';
import Emergency from '@material-ui/icons/LocalHospital';
import {extendObservable} from "mobx";
import CategoryItem from "../data/CategoryItem";
import {housingItems} from "./hardcoded/HousingItems";
import {doctorsItems} from "./hardcoded/DoctorsItems";
import {schoolingItems} from "./hardcoded/SchoolingItems";
import {httpHelper} from "../helper/HttpHelper";

class CategoryStore {

    categories: Category[] = [
        new Category('Housing', Housing, HOUSING, housingItems),
        new Category('Doctors', Doctors, DOCTORS, doctorsItems),
        new Category('Schooling', Schooling, SCHOOLING, schoolingItems),
        // new Category('Insurance', Insurance, INSURANCE),
        // new Category('Cars', Cars, CARS),
        // new Category('Bus / Train', Bus, BUS_TRAIN),
        // new Category('Legal', Legal, LEGAL),
        // new Category('Banks', Banks, BANKS),
        // new Category('Playgrounds', Playgrounds, PLAYGROUNDS),
        // new Category('Emergency', Emergency, EMERGENCY),
    ];

    category: Category;
    categoryItem: CategoryItem;
    currentArticle: string;

    constructor() {
        extendObservable(this, {
            category: dummyCategory,
            categoryItem: null,
            currentArticle: ''
    });
    }

    setCurrentCategory(category) {
        this.category = category;
        this.categoryItem = null;
    }

    setCurrentCategoryItem(categoryItem: CategoryItem) {
        this.categoryItem = categoryItem;

        httpHelper.textCall(
            httpHelper.GETRequest(categoryStore.categoryItem.markdownUrl),
            (data ) => {
                this.currentArticle = data;
            });
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