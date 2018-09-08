import React from "react";
import {categoryIconsHelper} from "../helper/CategoryIconsHelper";

export const DUMMY = 'dummy';
export const HOUSING = 'housing';
export const QUICK_SUMMARY = 'quick-summary';
export const DOCTORS = 'doctors';
export const SCHOOLING = 'schooling';
export const INSURANCE = 'insurance';
export const CARS = 'cars';
export const BUS_TRAIN  = 'bus_train';
export const LEGAL = 'legal';
export const BANKS = 'banks';
export const PLAYGROUNDS = 'playgrounds';
export const EMERGENCY = 'emergency';
export const SOURCE_CODE = 'source-code';
export const FEEDBACK = 'feedback';
export const DIVIDER = 'divider';

export default class Category {

    name;
    icon;
    id;
    url;
    items;

    constructor(name, id, url) {
        this.name = name;
        this.url = url;
        this.icon = React.createElement(categoryIconsHelper.get(id));
        this.id = id;
        this.items = [];
    }

}

export const dummyCategory = new Category('dummy', DUMMY);