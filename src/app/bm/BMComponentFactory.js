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
        return <div key={"bm-" + bmComponent.type + "-" + (this.i++)}
                    style={{color: '#5f6368'}}>{bmComponent.content}</div>
    }

    titleBig(bmComponent: BMComponent) {
        return <h1 key={"bm-" + bmComponent.type + "-" + (this.i++)}>
            {bmComponent.content}
            </h1>
    }

    titleSmall(bmComponent: BMComponent) {
        return <h3 key={"bm-" + bmComponent.type + "-" + (this.i++)}
                   style={{color: '#5f6368'}}>{bmComponent.content}</h3>
    }

    link(bmComponent: BMLink) {
        return <div>
                <a key={"bm-" + bmComponent.type + "-" + (this.i++)}
                   href={bmComponent.url} title={bmComponent.title}
                   target={"_blank"}>{bmComponent.title}
                   </a>
            </div>
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
}

export const bmComponentFactory: BMComponentFactory = new BMComponentFactory();