// @flow

import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {categoryStore} from "../store/CategoryStore";
import {observer} from "mobx-react";
import Category from "../data/Category";
import {uriHelper} from "../helper/UriHelper";

class CategoriesMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menuItems: categoryStore.categories()
        }
    }

    onCategory(category: Category) {
        categoryStore.setCurrentCategory(category);
        uriHelper.navigateToCategory(this, category);
    }

    render() {


        let listItems = [];

        this.state.menuItems.forEach((category: Category) => {
            let markIfSelected = categoryStore.category.id === category.id ?
                'be_category_selected' : '';

            listItems.push(<ListItem button key={category.id} className={markIfSelected}
                                     onClick={() => this.onCategory(category)}>
                <ListItemIcon>
                    {category.icon}
                </ListItemIcon>
                <ListItemText primary={category.name}/>
            </ListItem>)
        });

        return <div className={'be_categories be_categories_large_screen'}>
            <List component="nav">
                {listItems}
            </List>

        </div>
    }
}

export default observer(CategoriesMenu)