import React from 'react';
import "./Dish.css";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { createUserDishAction } from '../../redux/actions/appActions';

class Dish extends React.Component {
    id = this.props.match.params.id;
    state = {
        name: this.props.dishes[this.id].name,
        ingredients: this.props.dishes[this.id].ingredientsList[0],
        img: this.props.dishes[this.id].img
    }

    changeIngredient = (id) => {
        const { ingredients } = this.state;
        let status = this.state.ingredients[id].active ? false : true;
        ingredients[id].active = status;
        this.setState({
            ingredients: ingredients
        })
    }

    getIngredientsList = () => {
        return this.state.ingredients.map((value, key) => {
            return (
                <label className="container" key={key}>
                    <input
                        type="checkbox"
                        id="scales"
                        name="scales"
                        checked={value.active}
                        onChange={() => this.changeIngredient(key)}
                    />
                    <span className="checkMark"></span>
                    <span className={value.active ? "active" : "disable"}>{key + 1}) {value.text}</span>
                </label>
            )
        });
    }

    saveDish = () => {
        const {name, ingredients, img} = this.state;
        this.props.createUserDish({name, ingredients, img});
    }

    render() {
        return (
            <React.Fragment>
                <h1>
                    {this.state.name}
                </h1>
                <div className="IngredientsList">
                    {this.getIngredientsList()}
                </div>
                <Link to={`/ThankYou/`}>
                    <button className="btn" onClick={this.saveDish}>Сохранить</button>
                </Link>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dishes: state.appReducer.dishes,
        userDish: state.appReducer.userDish,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUserDish: (dish) => dispatch(createUserDishAction(dish))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dish);
// export default Dish;