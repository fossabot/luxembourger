// @flow


import React from "react";
import BMComponent from "./BMComponent";

export default class BMTitleBig extends BMComponent{

    constructor(line: string) {
        super(line)
    }

    render() {
        return <div key={this.key}
                    className={"bm_titleBig"}>
            {this.content}
        </div>
    }
}