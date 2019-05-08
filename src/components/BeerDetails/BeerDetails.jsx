import React, { Component } from 'react';
import Axios from 'axios';
import { Row, Col } from 'reactstrap';

const ApiUrl =  'https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers?key=ea0f9a8f2e22fc561fc4e6a6738c1280';


export default class BeerDetails extends Component  {
    constructor(props){
        super(props)
        this.state = {
            beers: []
        };
    }

    componentDidMount(){
        Axios.get(ApiUrl)
        .then(response => {
            this.setState({beers: response.data.data});
        })
        .catch (err => console.log(err));
        }
    render() {
        console.log(this.state);
        return (
            <div>
                <Row>
                    <Col>
                        {<p color="white">Je suis la col 1</p>}
                    </Col>
                    <Col>
                        <p color="white">Je suis la col 2</p>
                    </Col>
                </Row>
            </div>
        );
    }
}