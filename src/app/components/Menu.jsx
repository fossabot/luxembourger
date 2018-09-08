// @flow

import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {categoryStore} from "../store/CategoryStore";
import {observer} from "mobx-react";
import Category, {DIVIDER} from "../data/Category";
import {navigationHelper} from "../helper/NavigationHelper";
import Divider from '@material-ui/core/Divider';
import CategoryLink from "../data/CategoryLink";

class Menu extends React.Component {

    componentDidMount() {
        categoryStore.loadMenu();
    }

    onCategory(category: Category) {
        if(category instanceof CategoryLink) {
            window.open(category.link, "_blank");
            return;
        }

        navigationHelper.category(this, category);
    }

    render() {
        let listItems = [];

        categoryStore.categories.forEach((category: Category) => {
            let markIfSelected = categoryStore.category.id === category.id ?
                'be_Category-selected' : '';

            if(category.id === DIVIDER) {
                listItems.push(<Divider key="divider" />);
                return;
            }

            listItems.push(<ListItem button key={category.id} className={markIfSelected}
                                     onClick={() => this.onCategory(category)}>
                <ListItemIcon>
                    {category.icon}
                </ListItemIcon>
                <ListItemText primary={category.name}/>
            </ListItem>);
        });

        return <div className={'be_Menu'}>
            <List component="nav">
                {listItems}
            </List>

        </div>
    }
}

export default observer(Menu)