import React from 'react';
import Header from './Header';

class App extends React.Component {
    state = { 
        pageHeader: 'header 1' 
    };
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    render () {
        return (
        <div className="App">
            <Header message={this.state.pageHeader}  />
            <div>
                           
            </div>
        </div>
        );
    }
};

export default App;