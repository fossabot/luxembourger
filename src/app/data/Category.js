import React from "react";

export const HOUSING = 'housing';
export const DOCTORS = 'doctors';
export const SCHOOLING = 'schooling';
export const INSURANCE = 'insurance';
export const CARS = 'cars';
export const BUS_TRAIN  = 'bus_train';
export const LEGAL = 'legal';
export const BANKS = 'banks';
export const PLAYGROUNDS = 'playgrounds';
export const EMERGENCY = 'emergency';

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
