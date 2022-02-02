import React from 'react'
import {Link} from 'react-router-dom'


/* TODO -  добавить вывод авторов проектов */
const ProjectItem = ({Project, deleteProject}) => {
    return (
        <tr>
            <td>{Project.id}</td>
            <td>{Project.name}</td>
            <td>{Project.repoLink}</td>
            <td><button onClick={()=>deleteProject(Project.id)} type='button'>Удалить</button></td>
        </tr>
    )
}

/* TODO - добавить колонку с авторами проектов */
const ProjectsList = ({Projects, deleteProject}) => {
    return (
        <main className="page_content">
            <table>
                <th>ID проекта</th>
                <th>Название проекта</th>
                <th>Ссылка на репозиторий</th>
                <th>Удалить проект</th>
                {Projects.map((Project) => <ProjectItem Project={Project} deleteProject={deleteProject}/>)}
            </table>
            <Link to="/project/create">Создать проект</Link>
        </main>
    )
}

export default ProjectsList
