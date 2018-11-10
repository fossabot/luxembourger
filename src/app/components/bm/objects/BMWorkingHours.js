import BMComponent from "./BMComponent";
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


    static colors: string[] = ["green", "blue", "yellow", "red", ];
    static idx: number = 0;
    static getNextColor = () => {
        if (BMWorkingHours.idx >= BMWorkingHours.colors.length) {
            BMWorkingHours.idx = 0;
        }

        return BMWorkingHours.colors[BMWorkingHours.idx++];
    };

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
        for (let i = 6; i < parts.length; i++) {
            this.workingHours.push(new WorkingHour(parts[i]));
        }
    }

    render(): * {
        let logo = !this.logoUrl ? "" : <img className={"bm-img"} src={this.logoUrl} alt={this.title + ", Logo"}/>;
        let link = !this.link ? "" : <a href={this.link} target={"_blank"}
                                        title={"Click to open site " + this.title + " in new tab"}>{this.link}</a>;

        let address = "";
        if(this.address) {
            if(this.address.trim().startsWith("http")) {
                address = <a href={this.address} target={"_blank"}
                   title={"Click to open site " + this.title + " in new tab"}>Addresses on official site</a>;
            } else {
                address = <div>{this.address}</div>;
            }
        }

        let phone = !this.phone ? "" : <div>{this.phone}</div>;
        let transport = !this.transport ? "" : <div>{this.transport}</div>;

        let workingHours = [];
        for (let i = 0; i < this.workingHours.length; i++) {
            let w = this.workingHours[i];
            workingHours.push(<div key={Date.now() + Math.random() * 100000}>&nbsp;&nbsp;<b>{w.day}</b> : {w.time}<br/>
            </div>);
        }

        return <div key={this.key}
                    className={"flex-box bm-container " + BMWorkingHours.getNextColor()}>

            <div className={"left width-50prcnt"}>
                <div className={"bm-title"}>{this.title}</div>
                <div className={"bm-a"}>{link}</div>
                <div>{logo}</div>
                <div className={"bm-line address"}><span className={"icon location"}/>{address}</div>
            </div>

            <div className={"right width-50prcnt"}>
                <div className={"bm-line"}><span className={"icon phone"}/>{phone}</div>
                <div className={"bm-line"}><span className={"icon bus"}/><b>{transport}</b></div>
                <div className={"flex-box"}>
                    <div className={"left icon clock"}/>
                    <div className={"right"}>{workingHours}</div>
                </div>
            </div>
        </div>;
    }
}
