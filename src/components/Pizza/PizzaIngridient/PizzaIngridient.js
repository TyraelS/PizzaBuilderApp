import React from 'react';
import classes from './PizzaIngredient.css';

export default (props) => {
  let ingredient = null;

  switch(props.type) {
    case ('dough'): 
      ingredient = <div className={classes.dough}></div>;
      break;
    case('salamis'): 
      ingredient = (
        <div className={classes.salamis}>
          <div className={classes.sal-1}></div>
          <div className={classes.sal-2}></div>
          <div className={classes.sal-3}></div>
          <div className={classes.sal-4}></div>
          <div className={classes.sal-5}></div>
          <div className={classes.sal-6}></div>
          <div className={classes.sal-7}></div>
          <div className={classes.sal-8}></div>
          <div className={classes.sal-9}></div>
          <div className={classes.sal-10}></div>
          <div className={classes.sal-11}></div>
        </div>
      )
      break;
    case('mushrooms'): 
      ingredient =( <div className={classes.mushrooms}>
        <div className={classes.mushroom-1}>
          <div className={classes.stem}></div>
          <div className={classes.cup}></div>
        </div>
        <div className={classes.mushroom-2}>
          <div className={classes.stem}></div>
          <div className={classes.cup}></div>
        </div>
        <div className={classes.mushroom-3}>
          <div className={classes.stem}></div>
          <div className={classes.cup}></div>
        </div>
        <div className={classes.mushroom-4}>
          <div className={classes.stem}></div>
          <div className={classes.cup}></div>
        </div>
        <div className={classes.mushroom-5}>
          <div className={classes.stem}></div>
          <div className={classes.cup}></div>
        </div>
        <div className={classes.mushroom-6}>
          <div className={classes.stem}></div>
          <div className={classes.cup}></div>
        </div>
        <div className={classes.mushroom-7}>
          <div className={classes.stem}></div>
          <div className={classes.cup}></div>
        </div>
        <div className={classes.mushroom-8}>
          <div className={classes.stem}></div>
          <div className={classes.cup}></div>
        </div>
        <div className={classes.mushroom-9}>
          <div className={classes.stem}></div>
          <div className={classes.cup}></div>
        </div>
      </div>
      );
      break;
    case('corns'):
      ingredient = (
        <div className = {classes.corns}>
          <div className={classes.corn-1}></div>
          <div className={classes.corn-2}></div>
          <div className={classes.corn-3}></div>
          <div className={classes.corn-4}></div>
          <div className={classes.corn-5}></div>
          <div className={classes.corn-6}></div>
          <div className={classes.corn-7}></div>
          <div className={classes.corn-8}></div>
          <div className={classes.corn-9}></div>
          <div className={classes.corn-10}></div>
          <div className={classes.corn-11}></div>
          <div className={classes.corn-12}></div>
        </div>
      );
      break;
    case('vegs'):
      ingredient = (
        <div calssName = {classes.vegs}>
          <div className={classes.veg-1}></div>
          <div className={classes.veg-2}></div>
          <div className={classes.veg-3}></div>
          <div className={classes.veg-4}></div>
          <div className={classes.veg-5}></div>
          <div className={classes.veg-6}></div>
          <div className={classes.veg-7}></div>
          <div className={classes.veg-8}></div>
          <div className={classes.veg-9}></div>
          <div className={classes.veg-10}></div>
          <div className={classes.veg-11}></div>
          <div className={classes.veg-12}></div>
        </div>
      )
      break;
    default: ingredient = null;

    return ingredient;
  }
}
