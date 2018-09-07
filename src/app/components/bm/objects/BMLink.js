import BMComponent from "./BMComponent";
import React from "react";

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

    render(): * {
        return <a key={this.key}
                  className={"bm_link"}
                  href={this.url}
                  title={this.title}
                  target={"_blank"}>
            <img src={this.imageUrl}/>

            <span>{this.title}</span>
        </a>
    }
}