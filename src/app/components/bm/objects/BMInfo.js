// @flow

import BMComponent from "./BMComponent";
import React from "react";
import './BMInfo.css';

export default class BMInfo extends BMComponent {
    items: string[] = [];

    constructor(line: string) {
        super(line);

        let parts = this.content.split("\n");
        parts.forEach(value => this.items.push(value))
    }

    render(): * {
        let colorIndex: number = 0;
        let colors: string[] = ["red", "blue", "green", "yellow"];

        let lis = [];

        this.items.forEach(value => {

            lis.push(<li><span className={"i-con " + colors[colorIndex++]}/>{value}</li>);

            if (colorIndex >= colors.length) {
                colorIndex = 0
            }
        });

        return <ul key={this.key} className={"bm_info"}>
            {lis}
        </ul>;
    }
}