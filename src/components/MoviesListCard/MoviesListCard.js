import * as React from 'react';

import StarRatings from 'react-star-ratings';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {Component} from "react";
import logo from '../../images/fb-icon-744228.png';


class MoviesListCard extends Component {
    render() {
        return (
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={`https://image.tmdb.org/t/p/w200${this.props.poster}?api_key=2206d6893040e69cde3b8d1af61fd53d`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {this.props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {this.props.description}
                    </Typography>
                </CardContent>
                <Divider variant="inset" component={CardContent} />
                <StarRatings
                    rating={this.props.stars}
                    numberOfStars={5}
                    name='rating'
                    starRatedColor="green"
                    starDimension="30px"
                    starSpacing="0px"
                />
                <div>
                    <img style={{width:'20px',height:'20px',float:'right',marginTop:'-27px'}} src={logo} alt="logo"/>
                </div>
            </Card>
        );
    }
}

export default MoviesListCard;