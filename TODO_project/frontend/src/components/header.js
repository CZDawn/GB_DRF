import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'


const HeaderNav = ({ header_nav }) => {
    return (
        <header className="header_container">
            <nav className="header_nav">
                <BrowserRouter>
                    <Link to='/' className="header_nav_item">
                        Пользователи
                    </Link>
                    <Link to='/project' className="header_nav_item">
                        Проекты
                    </Link>
                    <Link to='/todo' className="header_nav_item">
                        Заметки
                    </Link>
                </BrowserRouter>
            </nav>
        </header>
    )
}

export default HeaderNav
