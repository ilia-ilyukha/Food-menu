import React from 'react';
import { connect } from 'react-redux';

class ThankYouPage extends React.Component {
    getIngredientsList = () => {
        if (this.props.userDish === null) {
            return (<p>Сделайте пожалуйста заказ!</p>);
        }
        return this.props.userDish.ingredients.map((value, key) => {
            return (
                <p className={value.active ? 'active' : 'disable'} key={key}>{value.text}</p>
            )
        });
    }
    getImg = () => {
        if (this.props.userDish === null) {
            return (<p>Сделайте пожалуйста заказ!</p>);
        }
        return (
            <div className="dish-icon">
                <img src={this.props.userDish.img} alt="" />
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                <h1>Ваш заказ:</h1>
                <div className="final-wrapper">
                    {this.getImg()}
                    {this.getIngredientsList()}
                    <a href="/" >Вернуться на главную</a>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userDish: state.appReducer.userDish,
    }
}

export default connect(mapStateToProps, null)(ThankYouPage);