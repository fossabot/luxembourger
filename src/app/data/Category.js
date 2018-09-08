import React from "react";
import dummy from "@material-ui/icons/Delete";

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
export const EXPERIMENTAL = 'experimental';
export const SOURCE_CODE = 'source-code';
export const FEEDBACK = 'feedback';
export const DIVIDER = 'divider';

export default class Category {

    name;
    icon;
    id;
    items;

    constructor(name, icon, id, items) {
        this.name = name;
        this.icon = React.createElement(icon);
        this.id = id;
        this.items = items ? items : [];
    }

}

export const dummyCategory = new Category('dummy', dummy, DUMMY);