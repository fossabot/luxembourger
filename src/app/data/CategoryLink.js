import React from "react";
import dummy from "@material-ui/icons/Delete";
import Category from "./Category";

export default class CategoryLink extends Category {

    link;

    constructor(name, icon, id, link) {
        super(name, icon, id);
        this.link = link;
    }

}