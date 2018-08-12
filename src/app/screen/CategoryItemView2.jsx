import React from "react";
import Paper from "@material-ui/core/Paper";
import ReactMarkdown from 'react-markdown';
import {observer} from "mobx-react/index";
import {categoryStore} from "../store/CategoryStore";
import * as ReactDOM from "react-dom";
import {textHelper} from "../helper/TextHelper";
import Line from "../data/Line";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

class CategoryItemView2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    scrollTop() {
        if(ReactDOM.findDOMNode(this)) {
            ReactDOM.findDOMNode(this).scrollTop = 0;
        }
    }

    render() {
        if(!categoryStore.categoryItem) {
            return <div/>
        }

        setTimeout(() => this.scrollTop(), 10);

        let lines = textHelper.textToLines(categoryStore.currentArticle);
        let children = [];


        lines.forEach((line: Line) => {
            let child;

            switch (line.type) {
                case 'youtube':
                    child = <iframe width="670" height="350" src={line.content} frameBorder="0"
                                allow="autoplay; encrypted-media" allowFullScreen></iframe>;
                    break;
                case 'images':
                    let imgs = [];
                    line.content.split(",").forEach(url => {
                        imgs.push(<img style={{width: '100%'}} src={url} title={url}></img>);
                    });

                    child = <div>{imgs}</div>;
                    break;
                case 'card':
                    if(line.icon) {
                        child = <Card>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label={line.icon}>
                                        {line.icon.substr(0, 1).toUpperCase()}
                                    </Avatar>
                                }
                                title={line.content}
                                subheader='---'
                            />
                        </Card>;
                    } else {
                        child = <Card>
                            <CardHeader
                                title={line.content}
                                subheader='---'
                            />
                        </Card>;
                    }
                    break;
                case 'text':
                    child = <div style={{color: '#5f6368'}}>{line.content}</div>;
                    break;
                default:
                    child = <br/>;
            }

            children.push(child)
        });

        return <div className={'be_CategoryItemView'}>
            <Paper elevation={1} className={'be_CategoryItemView-paper'}>
                {children}
            </Paper>
        </div>;
    }
}

export default observer(CategoryItemView2)