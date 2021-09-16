import React, {useState, useEffect} from 'react';
import Layout from "../../components/Layout";
import './style.css'
import '../../App.css'
import axios from 'axios'

const Application = () => {
            const [order, setOrder] = useState([])

    useEffect(() => {
        axios('https://61195fa77b5c0f00175920da.mockapi.io/users')
            .then(({data}) => setOrder(data))
    }, [order])
    return (
        <Layout>
            <h2 className='align="left'>Пользователи</h2>
           <div className="order-box">
                  <div className='col'>
                      <h4 className="name">Имя</h4>
                      {
                          order.map(elem =>
                              <>
                                  <span className="name">{elem.name}</span>
                              </>
                          )
                      }
                  </div>
                  <div className='col'>
                      <h4 className="name">Почта</h4>
                      {
                          order.map(elem =>
                              <>
                                  <span className="name">{elem.email}</span>
                              </>
                          )
                      }
                  </div>
                  <div className='col'>
                      <h4 className="name">Телефон</h4>
                      {
                          order.map(elem =>
                              <>
                                  <span className="name">{elem.phone}</span>
                              </>
                          )
                      }
                  </div>
              </div>
        </Layout>
    );
};

export default Application;