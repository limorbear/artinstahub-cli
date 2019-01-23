import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Register, Edit, About, Sorry } from 'pages';


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/edit" component={Edit}/>
                <Route path="/about" component={About}/>
                <Route path="/sorry" component={Sorry}/>
            </div>
        );
    }
}

export default App;