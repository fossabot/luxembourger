import BMComponent from "./BMComponent";
import React from "react";
import './BMLink.css';

export default class BMLink extends BMComponent {
    title: string;
    url: string;
    imageUrl: string = "/images/default-link.png";

    constructor(line: string) {
        super(line);

        let parts = this.content.split("\n");

        this.title = parts[0];
        this.url= parts[1];

        let tmp = parts[2];

        if(tmp && tmp.trim() !== '') {
            this.imageUrl = tmp;
        }
    }

    render(): * {
        return <a key={this.key}
                  className={"bm_link"}
                  rel="noopener noreferrer"
                  href={this.url}
                  title={this.title}
                  target={"_blank"}>
            <img src={this.imageUrl} alt={this.title} title={this.title}/>

            <span>{this.title}</span>
        </a>
    }
}