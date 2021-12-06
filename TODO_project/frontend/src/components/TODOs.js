import React from 'react'
import {Link} from 'react-router-dom'


/* TODO - добавить вывод авторов заметки */
const TODOItem = ({TODO, deleteToDo}) => {
    return (
        <tr>
            <td>{TODO.title}</td>
            <td>{TODO.text}</td>
            <td>{TODO.createdAt}</td>
            <td>{TODO.updatedAt}</td>
            <td>{TODO.activeTag}</td>
            <td>{TODO.project}</td>
            <td><button onClick={()=>deleteToDo(TODO.id)} type='button'>Удалить</button></td>
        </tr>
    )
}

/* TODO - добавить колонку с авторами проектов */
const TODOsList = ({TODOs, deleteToDo}) => {
    return (
        <main class="page_content">
            <table>
                <th>Заголовок</th>
                <th>Текст заметки</th>
                <th>Дата создания</th>
                <th>Дата обновления</th>
                <th>Статус</th>
                <th>Название проекта</th>
                {TODOs.map((TODO) => <TODOItem TODO={TODO} deleteToDo={deleteToDo}/>)}
            </table>
            <Link to="/todo/create">Создать заметку</Link>
        </main>
    )
}

export default TODOsList
