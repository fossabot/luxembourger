// @flow

import * as React from "react";
import {navigationHelper} from "./NavigationHelper";
import EmptyProps from "./TypeHelper";
import {categoryStore} from "../store/CategoryStore";

//FIXME find a good way to handle navigation in REACT
export default class RouterHandler extends React.Component<EmptyProps> {

    unListen: () => {};

    componentDidMount() {

        this.unListen = this.props.history.listen(this.checkUri);
        this.checkUri()
    }

    checkUri(location: any) {
        let categoryId: string;
        let categoryItemId: string;

        if(!location) {
            categoryStore._loadCategories().subscribe();
            return;
        }

        if(location.pathname === '' || location.pathname === '/') {
            return;
        }

        // "/quick-summary/article-id" = ["", "quick-summary", "article-id"]
        const pathParts: string[] = location.pathname.split("/");

        if(pathParts.length < 2) {
            return;
        }

        categoryId = pathParts[1];
        categoryItemId = pathParts.length > 2 ? pathParts[2] : "";

        navigationHelper.restoreFromUri(this, categoryId, categoryItemId);
    }

    componentWillUnmount() {
        console.info("Stopping router handler");
        if(this.unListen) {
            this.unListen()
        }
    }

    render() {
        return ""
    }
}