import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'


const FooterNav = ({ footerNav }) => {
    return (
        <footer className="footer_container">
            <nav className="footer_nav">
                <BrowserRouter>
                    <Link to='/contacts' className="footer_nav_item">
                        Мои контакты
                    </Link>
                    <Link to='/socials' className="footer_nav_item">
                        Мои социальные сети
                    </Link>
                    <p className="footer_copyright">
                        Все права защищены &#169; 2021
                    </p>
                </BrowserRouter>
            </nav>
        </footer>
    )
}

export default FooterNav
