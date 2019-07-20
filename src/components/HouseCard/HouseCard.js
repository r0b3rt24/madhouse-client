import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import placeholder from "./house-card-placeholder.jpg";
import "./HouseCard.css"

class HouseCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className="house-card">
        <CardActionArea>
          <CardMedia
            className="house-card-media"
            image={placeholder}
            title="Contemplative Reptile"
          />
          <CardContent>
            <div className="house-card-text">
              <div className="text-left">
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.description}
              </Typography>
              </div>
              <div className="text-right">
                <Typography variant="h2" color="textSecondary" component="p">
                  {this.props.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className="unit">
                  $/mo.
                </Typography>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Mark
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default HouseCard