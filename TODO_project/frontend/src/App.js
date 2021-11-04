import React from 'react';
import logo from './logo.svg';
import './App.css';
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
        const TodoUsers = [
            {
                'username': 'user_1',
                'first_name': 'Стас',
                'last_name': 'Михайлов',
                'email': 'stas@example.com'
            },
            {
                'username': 'user_2',
                'first_name': 'Егор',
                'last_name': 'Бероев',
                'email': 'egor@example.com'
            }
        ]
        this.setState(
            {
                'todo_users': TodoUsers
            }
        )
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
