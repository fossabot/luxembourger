// @flow


import React from "react";

export default class BMComponent {

    static keyIdx = 0;

    key: string;
    type: string;
    content: string;

    constructor(line: string) {
        let newLinePos = line.indexOf("\n");
        this.type = line.substr(0, newLinePos);
        this.content = line.substr(newLinePos + 1, line.length - 1);

        this.key = "bm-" + this.type + "-" + BMComponent.keyIdx++
    }

    render() {
        return <div key={this.key}>
            {this.content}
        </div>
    }
}