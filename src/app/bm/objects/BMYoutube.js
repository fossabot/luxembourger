import BMComponent from "./BMComponent";

export default class BMYoutube extends BMComponent {
    link: string;

    constructor(line: string) {
        super(line);
        this.link = this.content;
    }
}