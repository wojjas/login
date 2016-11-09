import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField.js';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {username: ''};
        this.getUsername = this.getUsername.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    isLoginBtnEnabled() {
        return (this.state.username && this.state.username.trim() &&
        this.state.password && this.state.password.trim());
    }

    clearFields() {
        this.setState({username: '', password: ''});
    }

    getUsername(username) {
        this.setState({username: username});
    }

    getPassword(password) {
        this.setState({password: password});
    }

    handleCancel() {
        this.clearFields();
    }

    handleLogin(e) {
         const {username, password} = this.state;
         this && this.clearFields();

        if (password === '007') {
            window.alert('Login SUCCEEDED!\n' +
                'welcome ' + username);
        } else {
            window.alert('Login FAILED!');
        }
    }

    render() {
        const isCancelEnabled = this.state.username || this.state.password;

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <form onSubmit={this.handleLogin}>
                    <InputField label="Username" value={this.state.username} valueChanged={this.getUsername}/>
                    <InputField label="Password" value={this.state.password} type="password"
                                valueChanged={this.getPassword}/>
                    <button type="button" onClick={this.handleCancel} disabled={!isCancelEnabled}>Cancel</button>
                    <button type="submit" onClick={this.handleLogin} disabled={!this.isLoginBtnEnabled()}>Login</button>
                </form>
            </div>
        );
    }
}

export default App;
