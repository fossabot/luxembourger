// @flow

export default class BMComponent {

    type: string;
    content: string;

    constructor(line: string) {
        let newLinePos = line.indexOf("\n");
        this.type = line.substr(0, newLinePos);
        this.content = line.substr(newLinePos + 1, line.length - 1);
    }
}