import React from 'react';

import classes from './Pizza.css';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';

export default (props) => {
  // const transformedIngredients = Object.keys(props.ingredients)
  //   .map(igKey => {
  //     return [...Array(props.ingredients[igKey])].map((_) => {
  //       return <PizzaIngredient key = {igKey} type = {igKey} />
  //     });
  //   });
  let transformedIngredients = props.ingredients.map((igKey) => (
    <PizzaIngredient key={igKey} type={igKey} />
  ));
  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Start Putting Ingredients ;D</p>
  }
  if(transformedIngredients === 0) {
    transformedIngredients = <p>Please, add ingredients ;D</p>
  }
  console.log(transformedIngredients);
  
  return (
    <div className = {classes.pizza}>
      <PizzaIngredient type='dough'/>
      {transformedIngredients}
    </div>
  );
};