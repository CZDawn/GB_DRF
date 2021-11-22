import './App.css';
import axios from 'axios'
import React from 'react';
import logo from './logo.svg';
import Cookies from 'universal-cookie'
import LogiForm from './components/Auth.js'
import TODOsList from './components/TODOs.js'
import FooterNav from './components/footer.js'
import HeaderNav from './components/header.js'
import ProjectsList from './components/Projects.js'
import TodoUsersList from './components/TodoUsers.js'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'todo_users': [],
            'projects': [],
            'token': ''
        }
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, ()=>this.load_data())
    }

    is_authenticated() {
        return this.state.token != ''
    }

    logout() {
        this.set_token('')
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, ()=>this.load_data())
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password}).then(response => {
            this.set_token(response.data['token'])
        }).catch(error => alert('Неверный логин или пароль'))
    }

    get_headers() {
        let headers = {'Content-Type': 'application/json'}
        if (this.is_authenticated())
            {headers['Authorization'] = 'Token ' + this.state.token}
            return headers
    }

    load_data() {
        const headers = this.get_headers()
        axios.get('http://127.0.0.1:8000/api/users/', {headers}).then(response => {
            this.setState({'todo_users': response.data})
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/project/', {headers}).then(response => {
            this.setState({'projects': projects.results})
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/', {headers}).then(response => {
            this.setState({'todo': todo.results})
        }).catch(error => console.log(error))
    }

    componentDidMount() {
        this.get_token_from_storage()
    }

    render () {
        return (
            <div className="wrapper">
                <BrowserRouter>
                    <header className="header_container">
                        <nav className="header_nav">
                            <Link to='/' className="header_nav_item">
                                Пользователи
                            </Link>
                            <Link to='/project' className="header_nav_item">
                                Проекты
                            </Link>
                            <Link to='/todo' className="header_nav_item">
                                Заметки
                            </Link>
                            {this.is_authenticated() ? <button onClick={()=>this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}
                        </nav>
                    </header>
                    <Route exact path='/' component={() => <TodoUsersList TodoUsers={this.state.todo_users}/>}/>
                    <Route exact path='/project' component={() => <ProjectsList Projects={this.state.projects}/>}/>
                    <Route exact path='/todo' component={() => <TODOsList TODOs={this.state.todo}/>}/>
                    <Route exact path='/login' component={() => <LoginForm get_token={(username, password) => this.get_token(username, password)}/>}/>
                    <footer className="footer_container">
                        <nav className="footer_nav">
                            <Link to='/contacts' className="footer_nav_item">
                                Мои контакты
                            </Link>
                            <Link to='/socials' className="footer_nav_item">
                                Мои социальные сети
                            </Link>
                            <p className="footer_copyright">
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
