import React, {useEffect, useState} from 'react';
import axios from 'axios'
import '../../App.css'
import Layout from "../../components/Layout";
import {Link} from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner'
import './style.css'
const News = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios('https://61195fa77b5c0f00175920da.mockapi.io/news')
            .then(({data}) => {
                setNews(data)
                setIsLoading(false)
            })
    }, [])
    if(isLoading){
        return <Spinner/>
    }
    return (
        <Layout>
                <div className='row'>
                {
                    news.map(item =>
                        <div key={item.id} className='col-4'>
                            <div className="card-body">
                                <Link to={`/news/${item.id}`}>
                                    <img src={item.image} alt=""/>
                                    <span>{item.title}</span>
                                </Link>
                            </div>
                        </div>
                    )
                }
                </div>
        </Layout>
    );
};

export default News;