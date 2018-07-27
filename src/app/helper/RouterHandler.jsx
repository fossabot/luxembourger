// @flow

import * as React from "react";
import {navigationHelper} from "./NavigationHelper";

export default class RouterHandler extends React.Component {

    unlisten = null;
    //FIXME find a good way to handle navigation in REACT
    componentDidMount() {
        // Listen for changes to the current location.
        this.unlisten = this.props.history.listen((location) => {
            // location is an object like window.location

            console.log(location.pathname);

            if(location.pathname === '' || location.pathname === '/') {
                return;
            }

            const pathParts: string[] = location.pathname.split("/");

            if(pathParts.length < 2) {
                return;
            }

            navigationHelper.restoreFromUri(this,
                pathParts[1],
                pathParts[2]);
        })
    }

    componentWillUnmount() {
        if(this.unlisten) {
            this.unlisten()
        }
    }

    render() {
        return ""
    }
}