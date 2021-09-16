import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './style.css'
import axios from 'axios'


const Header = () => {
    const [modal, setModal] = useState(false)
    const [user, setUser] = useState({name: '', phone: '', email: ''})
    const [success, setSuccess] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://61195fa77b5c0f00175920da.mockapi.io/users', user)
            .then(() => {
                setSuccess(true)
                setTimeout( () => {
                    setModal(false)
                    setSuccess(false)
                }, 3000)
            })
        setTimeout(() => {
            setModal(false)
            setSuccess(false)
        }, 3000)
    }

    const handleSent = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <header className='menu '>
            <Link exact path to='/'>
                <li>Главная</li>
            </Link>
            <Link to='/news'>
                <li>Новости</li>
            </Link>
            <Link to='/login'>
                <li onClick={() => setModal(true)}>Войти</li>
            </Link>
            <Link to='/application'><li>Заявки</li></Link>
            {
                modal &&
                <div className="modal-window">
                    <div className="modal-content">
                        {
                            success ? 'Ваша заявка принята!' :
                                <>
                                    <h4>Login</h4>
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <input type="text" id='name' placeholder='Введите имя' className='input'
                                                   required name='name' onChange={handleSent}/>
                                            <label htmlFor="name">Имя</label>
                                        </div>
                                        <div>
                                            <input type="text" id='phone' placeholder='Введите номер телефона'
                                                   className='input' name='phone' required onChange={handleSent}/>
                                            <label htmlFor="phone">Телефон</label>
                                        </div>
                                        <div>
                                            <input type="email" id='email' placeholder='Введите адрес электронной почты'
                                                   className='input' name='email' required onChange={handleSent}/>
                                            <label htmlFor="email">Электронный адрес</label>
                                        </div>
                                        <button className='button'>Отправить</button>
                                    </form>
                                </>
                        }
                    </div>
                    <button className="close" onClick={() => setModal(false)}>X</button>
                </div>
            }
        </header>
    );
};

export default Header;