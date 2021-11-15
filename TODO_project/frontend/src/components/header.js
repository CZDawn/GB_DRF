import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'


const HeaderNav = ({ header_nav }) => {
    return (
        <header class="header_container">
            <nav class="header_nav">
                <BrowserRouter>
                    <Link to='/' class="header_nav_item">
                        Пользователи
                    </Link>
                    <Link to='/project' class="header_nav_item">
                        Проекты
                    </Link>
                    <Link to='/todo' class="header_nav_item">
                        Заметки
                    </Link>
                </BrowserRouter>
            </nav>
        </header>
    )
}

export default HeaderNav
