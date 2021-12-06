import React from 'react'


class ToDoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {title: '', text: '', active_tag: 1, project: 0, author: 0}
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    handleSubmit(event) {
        this.props.createToDo(this.state.title, this.state.text, this.state.active_tag, this.state.project, this.state.author) 
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <lable htmlFor="title">Заголовок заметки</lable>
                    <input type="text" name="title" onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <lable htmlFor="text">Текст заметки</lable>
                    <input type="text" name="text" onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <lable htmlFor="project">Проект</lable>
                    <input type="number" name="project" value={this.state.project} onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <lable htmlFor="author">Автор</lable>
                    <input type="number" name="author" value={this.state.author} onChange={(event) => this.handleChange(event)}/>
                </div>
                <input type="submit" className="btn btn-primary" value="Save"/>
            </form>
        );
    }
}

export default ToDoForm
