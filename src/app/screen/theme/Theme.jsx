// @flow

import * as React from "react";
import './Theme.css';
import './Theme-animations.css';
import './Theme-mobile.css';

export default class Theme extends React.Component {

    render() {
        return (
            <div>
                <div className="be_plane"/>

                <div className="be_theme-image-left-right"/>
                <div className="be_theme-image-center"/>

                <div className="be_theme-sun"/>

                <div className="be_theme-balloon"/>

                <div className="be_theme-cloud-big"/>
                <div className="be_theme-cloud-big-2"/>
                <div className="be_theme-cloud-medium"/>
                <div className="be_theme-cloud-small"/>

                <div className="be_univers"/>

                <div className="be_star-small"/>
                <div className="be_star-small-top-corner"/>
                <div className="be_star-small-bottom-corner"/>
                <div className="be_star-big"/>
            </div>
        );
    }

}