import React from 'react';
import BeerList from '../BeerCounter/BeerList';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <BeerList />
      </div>
    );
  }
}