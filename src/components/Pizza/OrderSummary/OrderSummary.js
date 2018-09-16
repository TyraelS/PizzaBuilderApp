import React from 'react';

import classes from './OrderSummary.css';
import Button from '../../UI/Button/Button';

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
      <p><strong>Total Price: {props.price.toFixed(2)}$</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </div>

  );
}

export default orderSummary;