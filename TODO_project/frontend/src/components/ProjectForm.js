import React from 'react'


class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '', author: 0, repo_link: ''}
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    handleSubmit(event) {
        this.props.createProject(this.state.name, this.state.author, this.state.repoLink) 
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <lable htmlFor="name">Название проекта</lable>
                    <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleChange(event)}/>
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

export default ProjectForm
