import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'todo_users': []
        }
    }

    render () {
        return (
            <div>
                Main App
            </div>
        )
    }
}

export default App;
