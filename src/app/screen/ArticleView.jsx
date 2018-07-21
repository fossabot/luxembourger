import React from "react";
import Paper from "@material-ui/core/Paper";
import ReactMarkdown from 'react-markdown';
import {httpHelper} from "../helper/HttpHelper";
import {observer} from "mobx-react/index";
import {categoryStore} from "../store/CategoryStore";

class ArticleView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: 'Please select a category first'
        }
    }

    render() {

        if(categoryStore.categoryItem) {
            httpHelper.textCall(
                httpHelper.GETRequest(categoryStore.categoryItem.markdownUrl),
                (data ) => {
                    this.setState({input: data});
                });
        }

        return (
            <div className={'be_ArticleView'}>
                <Paper elevation={1} className={'be_ArticleView-paper'}>
                    <ReactMarkdown source={this.state.input} />
                </Paper>
            </div>
        );
    }
}

export default observer(ArticleView)