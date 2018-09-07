import BMComponent from "./BMComponent";

export default class BMFacebook extends BMComponent {
    title: string;
    dataHref: string;

    constructor(line: string) {
        super(line);

        let parts = this.content.split("\n");

        this.title = parts[0];
        this.dataHref = parts[1];
    }
}