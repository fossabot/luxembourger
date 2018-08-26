// @flow

import BMYoutube from "./objects/BMYoutube";
import BMComponent from "./objects/BMComponent";
import React from "react";
import BMImage from "./objects/BMImage";
import BMCard from "./objects/BMCard";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import BMLink from "./objects/BMLink";
import BMList from "./objects/BMList";

export class BMComponentFactory {

    i = 0;

    create(bmComponent: BMComponent) {

        let htmlComponent;

        switch (bmComponent.type) {
            case 'youtube':
                htmlComponent = bmComponentFactory.youtube(bmComponent);
                break;
            case 'image':
                htmlComponent = bmComponentFactory.image(bmComponent);
                break;
            case 'text':
                htmlComponent = bmComponentFactory.text(bmComponent);
                break;
            case 'title-big':
                htmlComponent = bmComponentFactory.titleBig(bmComponent);
                break;
            case 'title-small':
                htmlComponent = bmComponentFactory.titleSmall(bmComponent);
                break;
            case 'link':
                htmlComponent = bmComponentFactory.link(bmComponent);
                break;
            case 'card':
                htmlComponent = bmComponentFactory.card(bmComponent);
                break;
            case 'list':
                htmlComponent = bmComponentFactory.list(bmComponent);
                break;
            default:
                htmlComponent = <br/>;
        }

        return htmlComponent;
    }

    youtube(bmComponent: BMYoutube) {
        return <iframe key={"bm-" + bmComponent.type + "-" + (this.i++)}
                       width="100%" height="350" src={bmComponent.link}
                       frameBorder="0"
                       allow="autoplay; encrypted-media" allowFullScreen/>
    }

    image(bmComponent: BMImage) {
        return <img key={"bm-" + bmComponent.type + "-" + (this.i++)}
                    style={{width: '100%'}}
                    src={bmComponent.url} title={bmComponent.title}/>
    }

    text(bmComponent: BMComponent) {
        return <div key={"bm-" + bmComponent.type + "-" + (this.i++)} className={"bm_text"}>
            {bmComponent.content}
            </div>
    }

    titleBig(bmComponent: BMComponent) {
        return <div key={"bm-" + bmComponent.type + "-" + (this.i++)} className={"bm_titleBig"}>
            {bmComponent.content}
            </div>
    }

    titleSmall(bmComponent: BMComponent) {
        return <div key={"bm-" + bmComponent.type + "-" + (this.i++)} className={"bm_titleSmall"}>
            {bmComponent.content}
            </div>
    }

    link(bmComponent: BMLink) {
        return <a key={"bm-" + bmComponent.type + "-" + (this.i++)}
                  className={"bm_link"}
                  href={bmComponent.url}
                  title={bmComponent.title}
                  target={"_blank"}>
            <img src={bmComponent.imageUrl} />

            <span>{bmComponent.title}</span>
        </a>
    }

    card(bmComponent: BMCard) {

        if(bmComponent.icon) {
            return <Card key={"bm-" + bmComponent.type + "-" + (this.i++)} >
                <CardHeader
                    avatar={
                        <Avatar aria-label={bmComponent.icon}>
                            {bmComponent.icon.substr(0, 1).toUpperCase()}
                        </Avatar>
                    }
                    title={bmComponent.title}
                    subheader={bmComponent.subTitle}
                />
            </Card>;
        }

        return <Card key={"bm-" + bmComponent.type + "-" + (this.i++)} >
            <CardHeader
                title={bmComponent.title}
                subheader={bmComponent.subTitle}
            />
        </Card>;
    }

    list(bmComponent: BMList) {
        let colorIndex: number = 0;
        let colors: string[] = ["red", "blue", "green", "yellow"];

        let lis = [];

        bmComponent.items.forEach(value => {
            let subItems = [];
            value.items.forEach(subItem => {
                subItems.push(<div className={"list-subItem"}>{subItem}</div>)
            });

            lis.push(<li><span className={"dot " + colors[colorIndex++]} />{value.text}{subItems}</li>)

            if(colorIndex >= colors.length) {
                colorIndex = 0
            }
        });

        return <ul className={"bm_list"}>
            {lis}
        </ul>;
    }
}

export const bmComponentFactory: BMComponentFactory = new BMComponentFactory();