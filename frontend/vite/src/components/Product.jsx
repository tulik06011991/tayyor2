import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Product = () => {
    const [data, setData] = useState([])
    

    const token = localStorage.getItem('token');
    if(token){

     const handleGet = async () =>{
        await axios.get(`http://localhost:5000/auth/products`)
        .then((response) =>{
            console.log(response.data)
        }).catch((error) =>{
            console.log(error)
        })


     }
    }

    
    return (
        <><div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h1 className=' justify-content-center align-items-center'>Products</h1><hr />
                <div className="card mt-5" style={{ width: '18rem' }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='d-flex justify-content-between'>

                        <Link to="update" className="btn btn-primary px-1">O'zgartirish</Link>
                        <Link to="/delete" className="btn btn-primary ms-3 px-3">O'chirish</Link>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Product
