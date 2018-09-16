import React, { Component } from 'react';

import Aux from '../../hoc/Auxil/Auxil';
import Pizza from '../../components/Pizza/Pizza'
import BuildControls from '../../components/Pizza/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salamis:  5,
  vegs: 2,
  corns: 2,
  mushrooms: 3
}
export default class PizzaBuilder extends Component {
  state = {
    ingredients: [
      
    ],
    totalPrice: 7,
    purchaseable: false,
    purchasing: false
  }

  updatePurchaseState (ingredients) {
    const sum = ingredients.length;
    this.setState({purchaseable: sum > 1});
  }

  addIngredientHandler = (type) => {
    let added = false;
    let priceAddition = 0;
    const updatedIngredients = [
      ...this.state.ingredients
    ]
    updatedIngredients.forEach(ig => {
      if(ig===type){
        added=true;
      }
    });
    if(!added){
      updatedIngredients.push(type);
      priceAddition = INGREDIENT_PRICES[type]
    }
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler =(type) => {
    let added = false;
    let priceAddition = 0;
    const updatedIngredients = [
      ...this.state.ingredients
    ]
    updatedIngredients.forEach(ig => {
      if(ig===type){
        added=true;
      }
    });
    if(added){
      updatedIngredients.splice(updatedIngredients.indexOf(type), 1);
      priceAddition = INGREDIENT_PRICES[type];
    }
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler  = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler =() => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler =() => {
    alert('You continue');
  }
  render() {
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary 
            ingredients = {this.state.ingredients} 
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice}
            />
        </Modal>
        <Pizza ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded = {this.addIngredientHandler}
          ingredientRemoved = {this.removeIngredientHandler}
          purchaseable = {this.state.purchaseable}
          ordered = {this.purchaseHandler}
          price = {this.state.totalPrice}
        />
      </Aux>
    )
  }
}
