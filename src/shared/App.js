import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Register, About, Sorry, Members } from 'pages';


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/sorry" component={Sorry}/>
                <Route path="/register" component={Register}/>
                <Route path="/members/:menu" component={Members}/>
            </div>
        );
    }
}

export default App;