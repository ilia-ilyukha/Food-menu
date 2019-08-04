import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class DishesList extends React.Component {
    getDishes = () => {
        if (!this.props.dishes) {
            return null;
        }
        return this.props.dishes.map((dish, key) => {
            return (
                <Link to={`/Dish/` + key} key={key}>
                    <div className="dish-icon">
                        <img src={dish.img} alt="" />
                    </div>
                    {dish.name}
                </Link>
            )
        })
    }

    render() {
        return (
            <div className="dish-link">
                {this.getDishes()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        dishes: state.appReducer.dishes,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         // deleteRecipeProp: (key) => dispatch(deleteRecipeAction(key)),
//         // showEditFormProp: (key) => dispatch(showEditFormAction(key))
//     }
// }

export default connect(mapStateToProps, null)(DishesList);