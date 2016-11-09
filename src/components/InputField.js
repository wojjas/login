/**
 * Username or Password
 * State is "moved up" to parent component and sent back in props.
 * This is still a "controlled component" and state is in ONE place, in the parent.
 */
import React, { Component } from 'react';

class InputField extends Component{
    constructor(props){
        super(props);

        this.onValueChanged = this.onValueChanged.bind(this);
    }

    onValueChanged(e){
        this.props.valueChanged(e.target.value);
    }

    render(){
        const type = this.props.type || 'text';
        const value = this.props.value || '';

        return (
          <div>
              <p>{this.props.label}</p>
              <input type={type} value={value} onChange={this.onValueChanged} />
          </div>
        );
    }
}

export default InputField;
