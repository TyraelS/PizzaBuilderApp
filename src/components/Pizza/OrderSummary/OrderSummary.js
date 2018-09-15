import React from 'react';

import classes from './OrderSummary.css'

const orderSummary = (props) => {
  let ingredientSummary = props.ingredients;
  ingredientSummary = ingredientSummary.map((ig) => {
    return (<li key={ig}>{ig};</li>);
  });
    
  return(
    <div className={classes.OrderSummary}>
      <h3>Your Order</h3>
      <p>A delicious pizza with following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </div>

  );
}

export default orderSummary;