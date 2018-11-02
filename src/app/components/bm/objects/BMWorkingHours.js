import BMComponent from "./BMComponent";
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";
import React from "react";
import './BMWorkingHours.css';

class WorkingHour {
    day: string;
    time: string;

    constructor(pairValue: string) {
        let parts: string[] = pairValue.trim().split(" : ");
        this.day = parts[0];
        this.time = parts[1];
    }
}

export default class BMWorkingHours extends BMComponent {
    title: string;
    logoUrl: string;
    link: string;
    address: string;

    phone: string;
    transport: string;

    workingHours: WorkingHour[];

    constructor(line: string) {
        super(line);

        let parts = this.content.split("\n");

        this.title = parts[0];
        this.logoUrl = this.nullable(parts[1]);
        this.link = this.nullable(parts[2]);
        this.address = this.nullable(parts[3]);

        this.phone = this.nullable(parts[4]);
        this.transport = this.nullable(parts[5]);

        this.workingHours = [];
        for(let i = 6; i < parts.length; i++) {
            this.workingHours.push(new WorkingHour(parts[i]));
        }
    }

    render(): * {
        let logo = !this.logoUrl ? "" : <img src={this.logoUrl} title={this.title + ", Logo"}/>;
        let link = !this.link ? "" : <a href={this.link} target={"_blank"}
                                        title={"Click to open site " + this.title + " in new tab"}>{this.link}</a>;

        let address = !this.address ? "" : <div>{this.address}</div>;

        let phone = !this.phone ? "" : <div>{this.phone}</div>;
        let transport = !this.transport ? "" : <div>{this.transport}</div>;

        let workingHours = [];
        for(let i = 0; i < this.workingHours.length; i++) {
            let w = this.workingHours[i];
            workingHours.push(<div><b>{w.day}</b> : {w.time}</div>);
        }

        return <div key={this.key}
        className={"ceva"}>
            <div>{this.title}</div>
            <div>{logo}</div>
            <div>{link}</div>
            <div>{address}</div>
            <div>{phone}</div>
            <div>{transport}</div>
            <div>{workingHours}</div>
        </div>;
    }
}
