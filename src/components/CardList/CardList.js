import React, { Component } from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import HouseCard from '../HouseCard/HouseCard';
import './CardList.css'

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          apartment: []
        }
    }

    componentWillMount() {
      fetch("http://madhouse-rest.appspot.com/apartment")
      .then(result => result.json())
      .then(data => this.setState({ apartment: data }));
    }

    render () {
        return (
        <div className="CardList">
            <GridList className="CardList-GridList" cols={1}>
              {
                this.state.apartment.map( apt => (
                  <GridListTile style={{ height: 'auto' }}>
                    <HouseCard title={apt.title} description={apt.description} price={apt.price}></HouseCard>
                  </GridListTile>
                  )
                )
              }
            </GridList>
          </div>
        )
    }
}

export default CardList