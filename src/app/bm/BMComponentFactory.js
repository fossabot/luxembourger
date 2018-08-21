// @flow

import BMYoutube from "./BMYoutube";
import BMComponent from "./BMComponent";
import React from "react";
import BMImage from "./BMImage";
import BMCard from "./BMCard";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

export class BMComponentFactory {

    i = 0;

    youtube(bmComponent: BMYoutube) {
        return <iframe key={"bm-" + (this.i++)} width="670" height="350" src={bmComponent.link} frameBorder="0"
                       allow="autoplay; encrypted-media" allowFullScreen/>
    }

    image(bmComponent: BMImage) {
        return <img key={"bm-" + (this.i++)} style={{width: '100%'}}
                    src={bmComponent.url} title={bmComponent.title}/>
    }

    text(bmComponent: BMComponent) {
        return <div key={"bm-" + (this.i++)} style={{color: '#5f6368'}}>{bmComponent.content}</div>
    }

    card(bmComponent: BMCard) {

        if(bmComponent.icon) {
            return <Card key={"bm-" + (this.i++)} >
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

        return <Card key={"bm-" + (this.i++)} >
            <CardHeader
                title={bmComponent.title}
                subheader={bmComponent.subTitle}
            />
        </Card>;
    }
}

export const bmComponentFactory: BMComponentFactory = new BMComponentFactory();