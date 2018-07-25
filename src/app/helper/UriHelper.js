import React from "react";
import CategoryItem from "../data/CategoryItem";
import {categoryStore} from "../store/CategoryStore";
import Category from "../data/Category";

class UriHelper {

    navigateToArticle(component: React.Component, ci: CategoryItem) {
        component.props.history.push('/' + categoryStore.category.id + "/" + ci.id);
    }

    navigateToCategory(component: React.Component, category: Category) {
        component.props.history.push('/' + category.id);
    }
}

export const uriHelper = new UriHelper();