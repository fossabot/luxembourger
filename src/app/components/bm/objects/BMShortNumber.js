import BMComponent from "./BMComponent";

export default class BMShortNumber extends BMComponent {
    number: string;
    label: string;

    constructor(line: string) {
        super(line);

        let parts = this.content.split("\n");

        this.number = parts[0];
        this.label= parts[1];
    }
}