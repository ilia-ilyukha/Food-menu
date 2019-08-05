import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { saveDishesListAction } from '../../redux/actions/appActions';

class DishesList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isLoaded: false
        }
    }
    componentDidMount = () => {
        fetch("http://localhost:3001/dishes")
        .then(res => res.json())
        .then(
            (result) => {
                this.props.saveDishesListProp(result);
                this.setState({isLoaded: true});
            },
            (error) => {
                console.log("Error!!!");
            }
        );     
    }

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
                {!this.state.isLoaded ? "Загружаем...." : ""}
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

const mapDispatchToProps = (dispatch) => {
    return {
        saveDishesListProp: (list) => dispatch(saveDishesListAction(list))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DishesList);