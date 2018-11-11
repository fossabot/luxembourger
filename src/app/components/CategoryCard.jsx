// @flow

import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import CategoryItem from "../objects/CategoryItem";

type Props = {
    categoryItem: CategoryItem,
    selected: boolean,
    onSelect: (c: CategoryItem) => {}
}

export default class CategoryCard extends React.Component<Props> {

    render() {
        let icon = this.props.selected ? "👍 " : "";

        let image = "";

        if(this.props.categoryItem.image && this.props.categoryItem.image.replace(" ", "") !== "") {
            image = <CardMedia
                className={"be_CategoryMenu-image"}
                image={this.props.categoryItem.image}
                title={this.props.categoryItem.imageTitle}
            />
        }

        return (
            <Card className={'be_margin-bottom-30px hand-cursor'}
                  onClick={(e) => this.props.onSelect ? this.props.onSelect(this.props.categoryItem) : ''}>

                <CardHeader
                    title={icon + this.props.categoryItem.title}
                    // subheader={this.props.categoryItem.date.toString()}
                />

                {image}

                <CardContent>
                    <Typography component="p">
                        {this.props.categoryItem.description}
                    </Typography>
                </CardContent>
                <CardActions disableActionSpacing>
                    <Button variant="outlined" color={"primary"} >
                        Learn more
                    </Button>
                </CardActions>
            </Card>
        );
    }
}