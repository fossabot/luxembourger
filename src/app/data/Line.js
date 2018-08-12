export default class Line {

    type: string;
    icon: string;
    content: string;

    constructor(line: string) {
        let commaPos = line.indexOf(",");
        this.type = line.substr(0, commaPos);

        line = line.trim().substr(commaPos + 1, line.length - 1).trim();
        commaPos = line.indexOf(",");

        if (commaPos < 1) {
            this.content = line.trim();
        } else {
            this.content = line.substr(0, commaPos);

            if (this.content.trim().split(" ").length === 1) {
                this.icon = this.content;
                this.content = line.substr(commaPos + 1, line.length - 1).trim();
            } else {
                this.content = line.trim();
            }
        }
    }

}