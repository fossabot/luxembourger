import BMComponent from "./BMComponent";
import React from "react";

export default class BMYoutube extends BMComponent {
    link: string;

    constructor(line: string) {
        super(line);
        this.link = this.content;
    }

    render() {
        return <iframe key={this.key}
                       src={this.link}
                       width="100%" height="350" frameBorder="0"
                       allow="autoplay; encrypted-media" allowFullScreen/>
    }
}