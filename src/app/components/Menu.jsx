// @flow

import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {categoryStore} from "../store/CategoryStore";
import {observer} from "mobx-react";
import Category, {SOURCE_CODE} from "../data/Category";
import {navigationHelper} from "../helper/NavigationHelper";
import Divider from '@material-ui/core/Divider';

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menuItems: categoryStore.categories
        }
    }

    onCategory(category: Category) {
        if(category.id === SOURCE_CODE) {
            window.open("https://bitbucket.org/rodislav/becoming", "_blank");
            return;
        }

        navigationHelper.category(this, category);
    }

    render() {
        let listItems = [];

        this.state.menuItems.forEach((category: Category) => {
            let markIfSelected = categoryStore.category.id === category.id ?
                'be_Category-selected' : '';

            if(category.id === SOURCE_CODE) {
                listItems.push(<Divider key="divider" />)
            }

            listItems.push(<ListItem button key={category.id} className={markIfSelected}
                                     onClick={() => this.onCategory(category)}>
                <ListItemIcon>
                    {category.icon}
                </ListItemIcon>
                <ListItemText primary={category.name}/>
            </ListItem>);
        });

        return <div className={'be_Categories'}>
            <List component="nav">
                {listItems}
            </List>

        </div>
    }
}

export default observer(Menu)