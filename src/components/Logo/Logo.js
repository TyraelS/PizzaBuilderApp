import React from 'react';

import burgerLogo from '../../assets/images/small-pizza-2.svg'
import classes from './Logo.css'

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="MyPizza"/>
  </div>
);

export default logo;