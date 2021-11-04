import React from 'react'


const FooterNav = ({ footerNav }) => {
    return (
        <footer class="footer_container">
            <nav class="footer_nav">
                <a class="footer_nav_item" href="">
                    Мои контакты
                </a>
                <a class="footer_nav_item" href="">
                    Мои социальные сети
                </a>
                <p class="footer_copyright">
                    Все права защищены &#169; 2021
                </p>
            </nav>
        </footer>
    )
}

export default FooterNav
