import BMComponent from "./BMComponent";
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";
import React from "react";

export default class BMApp extends BMComponent {
    title: string;
    subTitle: string;
    android: string;
    ios: string;
    imageUrl: string;

    constructor(line: string) {
        super(line);

        let parts = this.content.split("\n");

        this.title = parts[0];
        this.subTitle = parts[1];
        this.android = parts[2];
        this.ios = parts[3];
        this.imageUrl = parts[4];
    }

    render(): * {
        return <div key={this.key}>
            <div className={"bm_app"}
                 title={this.title}>
                <img src={this.imageUrl}/>
                <span>{this.title}</span>
            </div>
            <div className={"bm_app-subtitle"}>
                {this.subTitle}
            </div>
            <div className={"bm_app-buttons"}>
                <a href={this.android}
                   title="Get from PlayStore"
                   target={"_blank"}>
                    <img src="/images/assets/logo/google-play.png"/>
                </a>
                <a className={"be_margin-left-10px"}
                   href={this.ios}
                   title="Get from AppStore"
                   target={"_blank"}>
                    <img src="/images/assets/logo/app-store.png"/>
                </a>

            </div>
        </div>
    }
}