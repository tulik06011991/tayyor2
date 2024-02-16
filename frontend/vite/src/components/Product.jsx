import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import '../App.css'

const Product = () => {
    const { id } = useParams()
    const [Data, setData] = useState([])

    useEffect(() => {
        const handleGet = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const response = await axios.get(`http://localhost:5000/auth/products`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setData(response.data);
                    console.log(response.data)
                }
            } catch (error) {
                console.log(error);
            }
        };

        handleGet();
    }, []);

    return (
        <>
            <div>
                <h1 className='product'>Products</h1>
                <hr />
            </div>
            <div className="wrapper">
                {Data.map((item) => (
                    <div className="card mt-5" key={item._id}>
                        <img src={`http://localhost:5000/Images/${item.image}`} className="card-img-top"  />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='d-flex justify-content-between'>
                                <Link to={`/update/${item._id}`} className="btn btn-primary px-1">O'zgartirish</Link>
                                <Link to={`/delete/${item._id}`} className="btn btn-primary ms-3 px-3">O'chirish</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Product
