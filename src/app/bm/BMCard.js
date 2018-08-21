import BMComponent from "./BMComponent";

export default class BMCard extends BMComponent {
    icon: string;
    title: string;
    subTitle: string;

    constructor(line: string) {
        super(line);

        let parts = this.content.split("\n");

        this.icon = parts[0];
        this.title = parts[1];
        this.subTitle = parts[2];
    }
}