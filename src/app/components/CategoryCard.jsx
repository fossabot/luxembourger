import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

export default class CategoryCard extends React.Component {

    render() {
        return (
            <Card className={'margin-bottom-10px'} >
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                            R
                        </Avatar>
                    }
                    title={this.props.categoryItem.title}
                    subheader={this.props.categoryItem.date.toString()}
                />
                <CardMedia
                    className={"be_CategoryView_img"}
                    image={this.props.categoryItem.image}
                    title={this.props.categoryItem.imageTitle}
                />
                <CardContent>
                    <Typography component="p">
                        {this.props.categoryItem.description}
                    </Typography>
                </CardContent>
                <CardActions disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        );
    }
}