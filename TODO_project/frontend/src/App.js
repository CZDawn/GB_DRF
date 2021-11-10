import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import TodoUsersList from './components/TodoUsers.js'
import HeaderNav from './components/header.js'
import FooterNav from './components/footer.js'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'todo_users': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users').then(response => {
            const todo_users = response.data
            this.setState(
               {
                   'todo_users': todo_users
               }
            )
        }).catch(error => console.log(error))
    }

    render () {
        return (
            <div class="wrapper">
                <HeaderNav/>
                <TodoUsersList TodoUsers={this.state.todo_users} />
                <FooterNav/>
            </div>
        )
    }
}

export default App;
