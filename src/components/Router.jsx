import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import Counter from './counterPage/Counter';
import Contact from './contactPage/Contact';
import MentionsLegales from './MentionsLegales';
import BeerDetails from './BeerDetails/BeerDetails';

export default class Router extends Component {
    render(){
        return (
            <Switch>
                <Route  exact path='/' component={HomePage}/>
                <Route  exact path='/counter' component={Counter}/>
                <Route  exact path='/contact' component={Contact}/>
                <Route  exact path='/legals' component={MentionsLegales}/>
                <Route  exact path='/details/:id' component={BeerDetails}/>
            </Switch>
        )
    }
}