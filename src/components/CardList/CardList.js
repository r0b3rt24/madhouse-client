import React, { Component } from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import HouseCard from '../HouseCard/HouseCard';
import './CardList.css'

class CardList extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
        <div className="CardList">
            <GridList className="CardList-GridList" cols={1}>
              <GridListTile style={{ height: 'auto' }}>
                <HouseCard title="Hello" description="Hi" price="100"></HouseCard>
              </GridListTile>
              <GridListTile style={{ height: 'auto' }}>
                <HouseCard title="Hello" description="Hi" price="100"></HouseCard>
              </GridListTile>
              <GridListTile style={{ height: 'auto' }}>
                <HouseCard title="Hello" description="Hi" price="100"></HouseCard>
              </GridListTile>
              <GridListTile style={{ height: 'auto' }}>
                <HouseCard title="Hello" description="Hi" price="100"></HouseCard>
              </GridListTile>
              <GridListTile style={{ height: 'auto' }}>
                <HouseCard title="Hello" description="Hi" price="100"></HouseCard>
              </GridListTile>
              <GridListTile style={{ height: 'auto' }}>
                <HouseCard title="Hello" description="Hi" price="100"></HouseCard>
              </GridListTile>
              <GridListTile style={{ height: 'auto' }}>
                <HouseCard title="Hello" description="Hi" price="100"></HouseCard>
              </GridListTile>
              <GridListTile style={{ height: 'auto' }}>
                <HouseCard title="Hello" description="Hi" price="100"></HouseCard>
              </GridListTile>
            </GridList>
          </div>
        )
    }
}

export default CardList