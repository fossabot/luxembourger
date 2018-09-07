// @flow


import React from "react";
import BMComponent from "./BMComponent";

export default class BMTitleSmall extends BMComponent{

    constructor(line: string) {
        super(line)
    }

    render() {
        return <div key={this.key}
                    className={"bm_titleSmall"}>
            {this.content}
        </div>
    }
}