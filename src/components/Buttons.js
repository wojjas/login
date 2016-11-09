/**
 * the "control panel" contains Cancel and Login button
 */

import React, { Component } from 'react';

class Buttons extends Component{
    constructor(props){
        super(props);

        this.state = {value: ''};
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(e){
        //this.setState({value: e.target.value});
        console.log('Btn clicked!');
    }

    render(){
        return (
            <div>
                <button onClick={this.handleOnClick}>Cancel</button>
                <button onClick={this.handleOnClick}>Login</button>
            </div>
        );
    }
}

export default Buttons;

import React, {
    Component,
    PropTypes,
} from 'react';

class Delme extends Component {
    render() {
        return (
            <div>
                <h1>Hej hopp!</h1>
            </div>
        );
    }
}

Delme.propTypes = {};
Delme.defaultProps = {};

export default Delme;
