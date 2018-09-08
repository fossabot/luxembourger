// @flow

import React from "react";
import BMComponent from "./BMComponent";

export default class BMTitleBig extends BMComponent{

    render() {
        return <div key={this.key}
                    className={"bm_titleBig"}>
            {this.content}
        </div>
    }
}