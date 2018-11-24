// @flow

import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {categoryStore} from "./store/CategoryStore";
import {observer} from "mobx-react";
import Category, {DIVIDER} from "./objects/Category";
import Divider from '@material-ui/core/Divider';
import CategoryLink from "./objects/CategoryLink";
import EmptyProps from "./helper/TypeHelper";
import {Link} from "react-router-dom";

class Menu extends React.Component<EmptyProps> {

    onCategory(e, category: Category) {
        if(category instanceof CategoryLink) {
            e.preventDefault();
            window.open(category.link, "_blank");
        }
    }

    render() {
        let listItems = [];

        if(!categoryStore.categories || categoryStore.categories.length === 0) {
            return <span />
        }

        categoryStore.categories.forEach((category: Category) => {
            let id = categoryStore.category ? categoryStore.category.id : "";

            let markIfSelected = id === category.id ?
                'be_Category-selected' : '';

            if(category.id === DIVIDER) {
                listItems.push(<Divider key="divider" />);
                return;
            }

            listItems.push(
                <Link key={category.id} to={category.getUri()} title={category.name}>
                    <ListItem button className={markIfSelected}
                              onClick={ e => this.onCategory(e, category)}>
                        <ListItemIcon>
                            {category.icon}
                        </ListItemIcon>
                        <span title={category.name}>{category.name}</span>
                    </ListItem>
                </Link>
                );
        });

        let maybeHidden = 'be_Menu';
        if(categoryStore.category || categoryStore.categoryItem) {
            maybeHidden += " hidden";
        }

        return <div className={maybeHidden}>
            <List component="nav">
                {listItems}
            </List>

        </div>
    }
}

export default observer(Menu)