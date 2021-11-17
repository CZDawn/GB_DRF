import React from 'react'


/* TODO -  добавить вывод авторов проектов */
const ProjectItem = ({Project}) => {
    return (
        <tr>
            <td>{Project.name}</td>
            <td>{Project.repoLink}</td>
        </tr>
    )
}

/* TODO - добавить колонку с авторами проектов */
const ProjectsList = ({Projects}) => {
    return (
        <main class="page_content">
            <table>
                <th>Название проекта</th>
                <th>Ссылка на репозиторий</th>
                {Projects.map((Project) => <ProjectItem Project={Project} />)}
            </table>
        </main>
    )
}

export default ProjectsList
