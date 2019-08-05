import React from 'react';
import DishesList from "../components/DishesList/DishesList.jsx";

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Меню</h1>
                <DishesList />
            </React.Fragment>
        );
    }
}
export default Home;