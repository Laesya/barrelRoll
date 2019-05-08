import React from 'react';
import { Button} from 'reactstrap';
import { Link } from 'react-router-dom';

import './BeerCard.css';

function CalculPrice(abv){
    return Math.round((parseFloat(abv) * 1.263) * 100) / 100
}

export default function Beer({ img="beerImg", name="Oops, this product doesn't exist", abv="5.5", id="beerId", price}, )  {
    return (
          <div className="CardBeer">
            <p className="card-header" >{name}</p>
              <div className="card-body">
                <img className="card-img" src={img} alt='beer img'  />
                <Button ><Link to={"/details/" + id}>More Details</Link></Button>
              </div>
              <p className="card-footer">{price} $</p>
          </div>
    );
}




