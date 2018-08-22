import BMComponent from "./BMComponent";

export default class BMImage extends BMComponent {
    url: string;
    title: string;

    constructor(line: string) {
        super(line);

        let parts = this.content.split("\n");

        this.title = parts[0];
        this.url = parts[1];
    }
}