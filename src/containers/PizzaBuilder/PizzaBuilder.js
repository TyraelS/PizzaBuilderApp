import React, { Component } from 'react';

import Aux from '../../hoc/Auxil';
import Pizza from '../../components/Pizza/Pizza'

export default class PizzaBuilder extends Component {
  state = {
    ingredients: {
      salamis: true,
      corns: true,
      mushrooms: true
    }
  }

  render() {
    return (
      <Aux>
        <Pizza ingredients={this.state.ingredients}/>
        <div>Build Controls</div>
      </Aux>
    )
  }
}
