// @flow

import BMComponent from "./BMComponent";

export default class BMInfo extends BMComponent {
    items: string[] = [];

    constructor(line: string) {
        super(line);

        let parts = this.content.split("\n");
        parts.forEach(value => this.items.push(value))
    }
}