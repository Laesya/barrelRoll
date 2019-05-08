import React from 'react'
import { UncontrolledCarousel } from 'reactstrap';
import Axios from 'axios';
import './HomePage.scss';

const ApiUrl =  'https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers?key=ea0f9a8f2e22fc561fc4e6a6738c1280';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers : []
    };
  }
    componentDidMount = () => {
        Axios.get(ApiUrl)
        .then((response) => {
          const beers = response.data.data;
          let beerTable = []
          for(let i = 0; i < 3; i++){
            let beer = beers[Math.floor(Math.random() * response.data.data.length)]
            beers.splice(i, 1);
            console.log(beer)
            beerTable.push({
              altText: beer.name,
              caption: beer.abv + '% alcohol by volume',
              header: beer.name
            });
            if(beer.labels != null) {
              beerTable[i]['src'] = beer.labels.medium;
            } else {
              beerTable[i]['src'] = 'https://nsa40.casimages.com/img/2019/05/05/mini_190505124644117500.png' ;
            }
          }
          this.setState({beers : beerTable})
        })
        .catch((error) => console.log(error))
    }
  render() {
    return (
        <div  className='mainBody'>     
            <UncontrolledCarousel items={this.state.beers}/>
      </div>
    );
  }
}