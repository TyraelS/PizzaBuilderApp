import React, { Component } from "react";

import Aux from "../../hoc/Auxil/Auxil";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Pizza/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  salamis: 5,
  vegs: 2,
  corns: 2,
  mushrooms: 3
};
class PizzaBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 5,
    purchaseable: false,
    purchasing: false,
    loading: false
  };

  componentDidMount() {
    axios
      .get("https://pizza-builder-app.firebaseio.com/ingredients.json")
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error => {
        this.setState({error: true});
      });
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    console.log(sum);
    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    console.log(updatedIngredients);
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Oleh Shynkarenko",
        adress: {
          street: "Hello str",
          city: "Vinnytsia"
        },
        email: "test@test.com"
      },
      deliveryMethod: "courier"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false });
      });
  };
  render() {
    let orderSummary = null;
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    let pizza = this.state.error?<p>Ingredients can't be loaded</p>:<Spinner />;
    if (this.state.ingredients) {
      pizza = (
        <Aux>
          <Pizza ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            purchaseable={this.state.purchaseable}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.state.totalPrice}
        />
      );
    }
    if(this.state.loading){
      orderSummary = <Spinner/>;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {pizza}
      </Aux>
    );
  }
}

export default withErrorHandler(PizzaBuilder, axios);
