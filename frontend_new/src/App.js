import './App.css';
import axios from 'axios'
import React from 'react';
import Cookies from 'universal-cookie'
import LoginForm from './components/Auth.js'
import TODOsList from './components/TODOs.js'
import ProjectForm from './components/ProjectForm.js'
import ToDoForm from './components/ToDoForm.js'
import ProjectsList from './components/Projects.js'
import TodoUsersList from './components/TodoUsers.js'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'todo_users': [],
            'projects': [],
            'todos': [],
            'token': ''
        }
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, ()=>this.load_data())
    }

    is_authenticated() {
        return this.state.token !== ''
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

    createProject(name, author) {
        const headers = this.get_headers()
        const data = {name: name, authors: [author], repo_link: 'ссылка'}
        axios.post('http://127.0.0.1:8000/api/project/', data, {headers}).then(response => {
            this.load_data() 
        }).catch(error => {
            console.log(error)
            this.setState({authors: []})
        })
    }
    
    createToDo(title, text, active_tag, project, author) {
        const headers = this.get_headers()
        const data = {title: title, text: text, active_tag: true, project: project, author: [author]}
        console.log(data)
        axios.post('http://127.0.0.1:8000/api/todo/', data, {headers}).then(response => {
            this.load_data() 
        }).catch(error => {
            console.log(error)
            this.setState({authors: []})
        })
    }

    deleteProject(id) {
        const headers = this.get_headers()
        axios.delete(`http://127.0.0.1:8000/api/project/${id}`, {headers}).then(response => {
            this.load_data()
        }).catch(error => console.log(error))
    }
    
    deleteToDo(id) {
        const headers = this.get_headers()
        axios.delete(`http://127.0.0.1:8000/api/todo/${id}`, {headers}).then(response => {
            this.load_data()
        }).catch(error => console.log(error))
    }

    load_data() {
        const headers = this.get_headers()
        axios.get('http://127.0.0.1:8000/api/users/', {headers}).then(response => {
            this.setState({'todo_users': response.data.results})
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/project/', {headers}).then(response => {
            this.setState({'projects': response.data.results})
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/', {headers}).then(response => {
            this.setState({'todo': response.data.results})
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
                            {this.is_authenticated() ? <button onClick={()=>this.logout()}>Выход</button> : <Link to='/login'>Вход</Link>}
                        </nav>
                    </header>
                    <Switch>
                        <Route exact path='/' component={() => <TodoUsersList 
                            TodoUsers={this.state.todo_users}/>
                        }/>
                        <Route exact path='/project/create' component={() => <ProjectForm 
                            createProject={(name, author) => this.createProject(name, author)}/>
                        }/>
                        <Route exact path='/project' component={() => <ProjectsList 
                            Projects={this.state.projects} 
                            deleteProject={(id) => this.deleteProject(id)}/>
                        }/>
                        <Route exact path='/todo/create' component={() => <ToDoForm 
                            createToDo={(title, text, active_tag, project, author) => this.createToDo(
                                title, text, active_tag, project, author)}/>
                        }/>
                        <Route exact path='/todo' component={() => <TODOsList
                            TODOs={this.state.todo} deleteToDo={(id) => this.deleteToDo(id)}/>
                        }/>
                        <Route exact path='/login' component={() => <LoginForm
                            get_token={(username, password) => this.get_token(username, password)}/>
                        }/>
                    </Switch>
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
