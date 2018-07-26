import React from "react";
import Paper from "@material-ui/core/Paper";
import ReactMarkdown from 'react-markdown';
import {observer} from "mobx-react/index";
import {categoryStore} from "../store/CategoryStore";
import Typography from "@material-ui/core/Typography";

class CategoryItemView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    render() {
        if(!categoryStore.categoryItem) {
            return <div/>
        }

        return <div className={'be_ArticleView'}>
            <Paper elevation={1} className={'be_ArticleView-paper'}>
                <Typography variant="headline" component="i">
                    {categoryStore.categoryItem.title}
                </Typography>
                <ReactMarkdown source={categoryStore.currentArticle} />
            </Paper>
        </div>;
    }
}

export default observer(CategoryItemView)