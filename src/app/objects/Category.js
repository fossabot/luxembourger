import React from "react";
import {iconsHelper} from "../helper/IconsHelper";
import CategoryItem from "./CategoryItem";

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
        this.icon = React.createElement(iconsHelper.get(id));
        this.id = id;
        this.items = [];
    }

}