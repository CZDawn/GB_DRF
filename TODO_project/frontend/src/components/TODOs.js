import React from 'react'


/* TODO - добавить вывод авторов заметки */
const TODOItem = ({TODO}) => {
    return (
        <tr>
            <td>{TODO.title}</td>
            <td>{TODO.text}</td>
            <td>{TODO.createdAt}</td>
            <td>{TODO.updatedAt}</td>
            <td>{TODO.activeTag}</td>
            <td>{TODO.project}</td>
        </tr>
    )
}

/* TODO - добавить колонку с авторами проектов */
const TODOsList = ({TODOs}) => {
    return (
        <main class="page_content">
            <table>
                <th>Заголовок</th>
                <th>Текст заметки</th>
                <th>Дата создания</th>
                <th>Дата обновления</th>
                <th>Статус</th>
                <th>Название проекта</th>
                {TODOs.map((TODO) => <TODOItem TODO={TODO} />)}
            </table>
        </main>
    )
}

export default TODOsList
