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
            <div className="container-fluid">
                <div className="row  row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    {Data.map((item) => (
                        <div className="col" key={item._id}>
                            <div className="card mb-4">
                                <img src={`http://localhost:5000/Images/${item.image}`} style={{ width: '100%', height: '18rem', margin: '5px auto' }} className="card-img-top" alt='/' />
                                {console.log(`http://localhost:5000/Images/${item.image}`)}
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className='d-flex justify-content-between'>
                                        <Link to={`/update/${item._id}`} className="btn btn-primary px-1">O'zgartirish</Link>
                                        <Link to={`/delete/${item._id}`}    className="btn btn-primary ms-3 px-3">O'chirish</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Product
