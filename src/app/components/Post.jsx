import React from "react";
import Paper from "@material-ui/core/Paper";
import ReactMarkdown from 'react-markdown';
import {observer} from "mobx-react/index";
import {categoryStore} from "../store/CategoryStore";
import * as ReactDOM from "react-dom";
import BasicMarkup from "./bm/BasicMarkup";

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    scrollTop() {
        try {
            window.scrollTo(0, 0);
        } catch (e) {
            //    ignore error
            console.error(e);
        }
    }

    render() {
        setTimeout(() => this.scrollTop(), 10);

        if(!categoryStore.categoryItem) {
            return <div/>
        }

        let markupView;

        if(categoryStore.categoryItem.markdownUrl.toLowerCase().endsWith(".md")) {
            markupView = <ReactMarkdown source={categoryStore.currentArticle} />
        } else {
            markupView = <BasicMarkup source={categoryStore.currentArticle} />
        }

        return <div className={'be_CategoryItemView'}>
            <Paper elevation={1} className={'be_CategoryItemView-paper'}>
                {markupView}
            </Paper>
        </div>;
    }
}

export default observer(Post)