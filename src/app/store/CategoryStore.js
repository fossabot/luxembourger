// @flow

import Category, {
    BANKS,
    BUS_TRAIN,
    CARS,
    DOCTORS,
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

class CategoryStore {

    category: Category;
    categoryItem: CategoryItem;

    constructor() {
        extendObservable(this, {
            category: this.categories()[0],
            categoryItem: null
    });
    }

    setCurrentCategory(category) {
        this.category = category;
    }

    setCurrentCategoryItem(categoryItem: CategoryItem) {
        this.categoryItem = categoryItem;
    }

    categories() {
       return [
           new Category('Housing', Housing, HOUSING, housingItems),
           new Category('Doctors', Doctors, DOCTORS),
           new Category('Schooling', Schooling, SCHOOLING),
           new Category('Insurance', Insurance, INSURANCE),
           new Category('Cars', Cars, CARS),
           new Category('Bus / Train', Bus, BUS_TRAIN),
           new Category('Legal', Legal, LEGAL),
           new Category('Banks', Banks, BANKS),
           new Category('Playgrounds', Playgrounds, PLAYGROUNDS),
           new Category('Emergency', Emergency, EMERGENCY),
       ]
    }
}

export const categoryStore = new CategoryStore();