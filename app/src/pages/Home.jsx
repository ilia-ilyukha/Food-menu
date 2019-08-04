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

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchData: () => dispatch(fetchData()),

//     };
// };

// const mapStateToProps = state => {
//     return {
//         value: state.postReducer.value
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;