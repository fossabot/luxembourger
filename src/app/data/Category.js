import React from "react";
import {categoryIconsHelper} from "../helper/CategoryIconsHelper";
import CategoryItem from "./CategoryItem";

export const DUMMY = 'dummy';
export const DIVIDER = 'divider';

export default class Category {

    name;
    icon;
    id;
    url;
    items: CategoryItem[];

    constructor(name, id, url) {
        this.name = name;
        this.url = url;
        this.icon = React.createElement(categoryIconsHelper.get(id));
        this.id = id;
        this.items = [];
    }

}

export const dummyCategory = new Category('dummy', DUMMY);