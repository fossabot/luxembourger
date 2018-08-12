import React from "react";
import Paper from "@material-ui/core/Paper";
import ReactMarkdown from 'react-markdown';
import {observer} from "mobx-react/index";
import {categoryStore} from "../store/CategoryStore";
import * as ReactDOM from "react-dom";
import {textHelper} from "../helper/TextHelper";
import Line from "../data/Line";

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
                case 'video':
                    child = <div>{line.content}</div>;
                    break;
                case 'images':
                    child = <div>{line.content}</div>;
                    break;
                case 'card':
                    if(line.icon) {
                        child = <div>{line.icon}, {line.content}</div>;
                    } else {
                        child = <div>{line.content}</div>;
                    }
                    break;
                case 'text':
                    child = <div>{line.content}</div>;
                    break;
                default:
                    child = <span>..</span>;
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