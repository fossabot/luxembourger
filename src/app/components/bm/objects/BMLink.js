import BMComponent from "./BMComponent";

export default class BMLink extends BMComponent {
    title: string;
    url: string;
    imageUrl: string = "/images/assets/default-link.png";

    constructor(line: string) {
        super(line);

        let parts = this.content.split("\n");

        this.title = parts[0];
        this.url= parts[1];
        this.imageUrl= parts[2];
    }
}