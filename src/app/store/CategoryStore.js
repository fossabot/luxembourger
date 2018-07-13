import Category, {
    BANKS,
    BUS_TRAIN,
    CARS,
    DOCTORS, EMERGENCY,
    HOUSING,
    INSURANCE,
    LEGAL,
    PLAYGROUNDS,
    SCHOOLING
} from "../data/Category";
import Housing from '@material-ui/icons/Home';
import Doctors from '@material-ui/icons/FavoriteBorder';
import Schooling from '@material-ui/icons/ChildCare';
import Insurance from '@material-ui/icons/VerifiedUser';
import Cars from '@material-ui/icons/DirectionsCar';
import Bus  from '@material-ui/icons/DirectionsBus';
import Legal from '@material-ui/icons/AccountBalance';
import Banks from '@material-ui/icons/FavoriteBorder';
import Playgrounds from '@material-ui/icons/ChildFriendly';
import Emergency from '@material-ui/icons/LocalHospital';
import React from "react";
import {extendObservable} from "mobx";
import CategoryItem from "../data/CategoryItem";

class CategoryStore {

    category;

    constructor() {
        extendObservable(this, {
            category: this.categories()[0]
        });
    }

    setCurrentCategory(category) {
        this.category = category;
    }

    categories() {
       return [
           new Category('Housing', Housing, HOUSING, this.housingItems()),
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

    housingItems() {
        return [
            new CategoryItem('How to search online', '', new Date(), 'https://material-ui.com/static/images/cards/paella.jpg', 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.', 'this is image title',
                1),

            new CategoryItem('How to search online', '', new Date(), 'https://material-ui.com/static/images/cards/paella.jpg', 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.', 'this is image title',
                2),
        ]
    }
}

export const categoryStore = new CategoryStore();