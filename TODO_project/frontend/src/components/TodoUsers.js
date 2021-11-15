import React from 'react'


const TodoUserItem = ({TodoUser}) => {
    return (
        <tr>
            <td>{TodoUser.username}</td>
            <td>{TodoUser.firstName}</td>
            <td>{TodoUser.lastName}</td>
            <td>{TodoUser.email}</td>
        </tr>
    )
}

const TodoUsersList = ({TodoUsers}) => {
    return (
        <main class="page_content">
            <table>
                <th>Имя пользователя</th>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Адрес электронной почты</th>
                {TodoUsers.map((TodoUser) => <TodoUserItem TodoUser={TodoUser} />)}
            </table>
        </main>
    )
}

export default TodoUsersList
