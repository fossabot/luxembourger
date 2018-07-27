// @flow

import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {categoryStore} from "../store/CategoryStore";
import {observer} from "mobx-react";
import Category from "../data/Category";
import {navigationHelper} from "../helper/NavigationHelper";

class CategoriesMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menuItems: categoryStore.categories
        }
    }

    onCategory(category: Category) {
        navigationHelper.category(this, category);
    }

    render() {
        let listItems = [];

        this.state.menuItems.forEach((category: Category) => {
            let markIfSelected = categoryStore.category.id === category.id ?
                'be_Category-selected' : '';

            listItems.push(<ListItem button key={category.id} className={markIfSelected}
                                     onClick={() => this.onCategory(category)}>
                <ListItemIcon>
                    {category.icon}
                </ListItemIcon>
                <ListItemText primary={category.name}/>
            </ListItem>)
        });

        return <div className={'be_Categories'}>
            <List component="nav">
                {listItems}
            </List>

        </div>
    }
}

export default observer(CategoriesMenu)