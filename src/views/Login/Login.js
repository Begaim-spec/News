import React from 'react';
import Layout from "../../components/Layout";
import './style.css'
import '../../App.css'

const Login = () => {
    return (
        <Layout>
            <div className="form-box">
                <h4>Login</h4>
                <form action="https://google.com">
                    <div>
                        <input type="text" placeholder='login'/>
                    </div>
                  <div>
                      <input type="password" placeholder='password' className='input'/>
                  </div>
                    <div>
                        <button className='button'>Войти</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Login;