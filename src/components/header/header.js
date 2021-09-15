import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'


const Header = () => {
    return (
                <header className='menu '>
                    <Link exact path to='/'><li>Главная</li></Link>
                    <Link to='/news'><li>Новости</li></Link>
                    <Link to='/login'><li>Войти</li></Link>
                    <Link to='/sign'><li>Зарегистрироваться</li></Link>
                </header>
    );
};

export default Header;