// @flow

import React from "react";
import BMComponent from "./BMComponent";

export default class BMTitleSmall extends BMComponent{

    render() {
        return <div key={this.key}
                    className={"bm_titleSmall"}>
            {this.content}
        </div>
    }
}