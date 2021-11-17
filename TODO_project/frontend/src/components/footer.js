import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'


const FooterNav = ({ footerNav }) => {
    return (
        <footer class="footer_container">
            <nav class="footer_nav">
                <BrowserRouter>
                    <Link to='/contacts' class="footer_nav_item">
                        Мои контакты
                    </Link>
                    <Link to='/socials' class="footer_nav_item">
                        Мои социальные сети
                    </Link>
                    <p class="footer_copyright">
                        Все права защищены &#169; 2021
                    </p>
                </BrowserRouter>
            </nav>
        </footer>
    )
}

export default FooterNav
