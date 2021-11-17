import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import HeaderNav from './components/header.js'
import FooterNav from './components/footer.js'
import TodoUsersList from './components/TodoUsers.js'
import ProjectsList from './components/Projects.js'
import TODOsList from './components/TODOs.js'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'todo_users': [],
            'projects': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/').then(response => {
            const todo_users = response.data
            this.setState(
               {'todo_users': todo_users.results}
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/project/').then(response => {
            const projects = response.data
            this.setState(
                {'projects': projects.results}
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/').then(response => {
            const todo = response.data
            this.setState(
                {'todo': todo.results}
            )
        }).catch(error => console.log(error))
    }

    render () {
        return (
            <div class="wrapper">
                <BrowserRouter>
                    <header class="header_container">
                        <nav class="header_nav">
                            <Link to='/' class="header_nav_item">
                                Пользователи
                            </Link>
                            <Link to='/project' class="header_nav_item">
                                Проекты
                            </Link>
                            <Link to='/todo' class="header_nav_item">
                                Заметки
                            </Link>
                        </nav>
                    </header>
                    <Route exact path='/' component={() => <TodoUsersList TodoUsers={this.state.todo_users}/>}/>
                    <Route exact path='/project' component={() => <ProjectsList Projects={this.state.projects}/>}/>
                    <Route exact path='/todo' component={() => <TODOsList TODOs={this.state.todo}/>}/>
                    <footer class="footer_container">
                        <nav class="footer_nav">
                            <Link to='/contacts' class="footer_nav_item">
                                Мои контакты
                            </Link>
                            <Link to='/socials' class="footer_nav_item">
                                Мои социальные сети
                            </Link>
                            <p class="footer_copyright">
                                Все права защищены &#169; 2021
                            </p>
                        </nav>
                    </footer>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
