import React from 'react'


const HeaderNav = ({ header_nav }) => {
    return (
        <header class="header_container">
            <nav class="header_nav">
                <a class="header_nav_item" href="#">
                    Главная
                </a>
                <a class="header_nav_item" href="#">
                    Календарь
                </a>
                <a class="header_nav_item" href="#">
                    Мои задачи
                </a>
                <a class="header_nav_item" href="#">
                    Профиль
                </a>
            </nav>
        </header>
    )
}

export default HeaderNav
