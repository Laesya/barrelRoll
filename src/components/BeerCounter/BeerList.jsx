import React, { Component } from 'react';
import BeerCard from './BeerCard';
import Axios from 'axios';
import { Form, FormGroup,  Input,  Row, Col, Button } from 'reactstrap';
import './BeerList.css';

const ApiUrl =  'https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers?key=ea0f9a8f2e22fc561fc4e6a6738c1280';
const categoriesUrl = 'https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/categories?key=ea0f9a8f2e22fc561fc4e6a6738c1280';



export default class CategoryChoice extends Component  {
    constructor(props){
        super(props)
        this.price = this.price.bind(this)
        this.category = this.category.bind(this)
        this.state = {
            beers: [],
            filteredBeer: [],
            categories: [],
        };
    }

    componentDidMount(){
            Axios.get(ApiUrl)
            .then(response => {
                this.setState({
                    beers: response.data.data,
                    filteredBeer: response.data.data,
                    categories: this.state.categories,
                });
                this.setState({beers : this.state.beers.map((beer) => {
                    if(beer.abv != null) {
                    beer['price'] = Math.round((parseFloat(beer.abv) * 1.263) * 100) / 100
                } else {
                    beer['price'] = 5
                }
                return beer
                })
            })
                this.setState({filteredBeer : this.state.beers})
            })
            .catch (err => console.log(err));

            Axios.get(categoriesUrl)
            .then((response) => {
            this.setState({ 
                categories : response.data.data,
                beers : this.state.beers,
                });
            })
            .catch((error) => console.log(error))


        }
        category (event) {
            this.CategoryFilter(event.target.value) 
          }
        CategoryFilter(NameCategory){
            this.setState({filteredBeer : this.state.beers.filter(beer => {
               
                if(beer.style != null){
                return beer.style.category.name === NameCategory;
                } else {
                    return false;
                }
            })})
        }
        
        price(event) {
            this.setState({filteredBeer: this.state.beers.sort(( beer1, beer2) => {
                if(beer1.price < beer2.price){
                    return -1;
                }
                if(beer1.price > beer2.price){
                    return 1;
                }
                return 0;
            }) })

        }
        
    render() {
        return (
            <div>
                <Row>
                    <div  className='CounterChoice'>
                        <Row>
                            <Col>
                                <Form className="choiceCategory">
                                    <FormGroup>
                                        <Input className="inputChoice" type="select" name="select" id="exampleSelect"   onChange={this.category} >
                                            <option >Select Category</option>
                                            {
                                                this.state.categories.map((category) => {
                                                        return (
                                                            <option key={category.name} value={category.name}>{category.name}</option>
                                                        )
                                                    }
                                                )
                                            }
                                        </Input>
                                    </FormGroup>      
                                </Form>
                            </Col>
                            <Col>
                                <Button onClick={this.price}>Price</Button>
                            </Col>
                        </Row>  
                    </div>
                </Row>
                <Row>
                    {
                        this.state.filteredBeer.map((beer) => {
                            console.log(beer.price)

                            if(beer.labels != null) {
                                return (
                                    <Col key={beer.name} xs={3}>
                                        <BeerCard  key={beer.id} abv={beer.abv} img={beer.labels.medium} name={beer.name} id={beer.id} price={beer.price}/>;  
                                    </Col>
                                )                  
                            } else {
                                return (
                                    <Col key={beer.name} xs={3}>
                                        <BeerCard key={beer.id} abv={beer.abv} img={'https://nsa40.casimages.com/img/2019/05/05/mini_190505032723349089.png'} name={beer.name} id={beer.id} price={beer.price}/>;
                                    </Col>
                                )
                            } 
                        })
                    }
                </Row>
            </div>
        );
    }
}