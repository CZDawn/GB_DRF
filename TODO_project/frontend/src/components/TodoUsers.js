import React from 'react'


const TodoUserItem = ({ TodoUser }) => {
    return (
        <tr>
            <td>
                {TodoUser.username}
            </td>
            <td>
                {TodoUser.first_name}
            </td>
            <td>
                {TodoUser.last_name}
            </td>
            <td>
                {TodoUser.email}
            </td>
        </tr>
    )
}

const TodoUsersList = ({ TodoUsers }) => {
    return (
        <main class="page_content">
            <table>
                <th>
                    Username
                </th>
                <th>
                    First name
                </th>
                <th>
                    Last name
                </th>
                <th>
                    Email address
                </th>
                {TodoUsers.map((TodoUser) => <TodoUserItem TodoUser={TodoUser} />)}
            </table>
        </main>
    )
}

export default TodoUsersList
