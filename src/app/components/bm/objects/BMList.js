// @flow

import BMComponent from "./BMComponent";

export default class BMList extends BMComponent {
    items: BMListItem[] = [];

    constructor(line: string) {
        super(line);

        let parts = this.content.split("\n");
        let listItem: BMListItem;

        parts.forEach(value => {
            if(value.startsWith(" - ")) {
                if(!listItem) {
                    listItem = new BMListItem("✔");
                    this.items.push(listItem);
                }

                listItem.addSubItem(value)
            } else {
                listItem = new BMListItem(value);
                this.items.push(listItem);
            }
        })
    }
}

export class BMListItem {

    text: string;
    items: string[] = [];

    constructor(text: string) {
        this.text = text;
    }

    addSubItem(value: string) {
        if(!this.items) {
            this.items = []
        }

        this.items.push(value.replace(" - ", ""))
    }
}