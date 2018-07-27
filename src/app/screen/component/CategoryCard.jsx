// @flow

import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import CategoryItem from "../../data/CategoryItem";

type Props = {
    categoryItem: CategoryItem,
    onSelect: (c: CategoryItem) => {}
}

export default class CategoryCard extends React.Component<Props> {

    render() {
        return (
            <Card className={'be_margin-bottom-10px'} >
                <CardHeader
                    title={this.props.categoryItem.title}
                    // subheader={this.props.categoryItem.date.toString()}
                />
                <CardMedia
                    className={"be_CategoryView-image"}
                    image={this.props.categoryItem.image}
                    title={this.props.categoryItem.imageTitle}
                />
                <CardContent>
                    <Typography component="p">
                        {this.props.categoryItem.description}
                    </Typography>
                </CardContent>
                <CardActions disableActionSpacing>
                    <Button variant="outlined" color={"primary"}
                    onClick={(e) => this.props.onSelect ? this.props.onSelect(this.props.categoryItem) : ''}>
                        Learn more
                    </Button>
                </CardActions>
            </Card>
        );
    }
}