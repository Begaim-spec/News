import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Layout from "../../components/Layout";
import {useParams} from 'react-router-dom'
import '../../App.css'
import Spinner from '../../components/Spinner/Spinner'



const NewsDetails = () => {
    const [newsDetail, setNewDetails] = useState({})
    const [isLoading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        axios(`https://61195fa77b5c0f00175920da.mockapi.io/news/${id}`)
            .then(({data}) => {
                setNewDetails(data)
                setLoading(false)
            })
    }, [id])
    if(isLoading){
        return <Spinner/>
    }
    return (
        <Layout>
            <div className="detail-box">
                <h4>{newsDetail.title}</h4>
                <img src={newsDetail.image} alt=""/>
                <p>{newsDetail.description}</p>
            </div>
        </Layout>
    );
};

export default NewsDetails;

