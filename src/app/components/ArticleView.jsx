import React from "react";
import Paper from "@material-ui/core/Paper";
import ReactMarkdown from 'react-markdown';
import {httpHelper} from "../helper/HttpHelper";

export default class ArticleView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    componentDidMount () {
        httpHelper.textCall(
            httpHelper.GETRequest('http://localhost:3000/test.md'),
            (data ) => {
                this.setState({input: data});
            });
    }

    render() {
        return (
            <div className={'be_ArticleView'}>
                <Paper elevation={1} className={'be_ArticleView-paper'}>
                    <ReactMarkdown source={this.state.input} />
                </Paper>
            </div>
        );
    }


}