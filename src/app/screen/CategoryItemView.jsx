import React from "react";
import Paper from "@material-ui/core/Paper";
import ReactMarkdown from 'react-markdown';
import {observer} from "mobx-react/index";
import {categoryStore} from "../store/CategoryStore";

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

        return <div className={'be_CategoryItemView'}>
            <Paper elevation={1} className={'be_CategoryItemView-paper'}>
                <ReactMarkdown source={categoryStore.currentArticle} />
            </Paper>
        </div>;
    }
}

export default observer(CategoryItemView)