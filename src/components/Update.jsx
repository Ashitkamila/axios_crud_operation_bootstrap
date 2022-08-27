import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'

const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
    },[])
   const handleUpdate =(e)=>{
     e.preventDefault();
    axios.put(`https://62ef58ac8d7bc7c2eb785e76.mockapi.io/crud_ashit/${id}`,{
     name:name,
     email:email
    }).then(()=>{
        navigate('/read');
    })
    
   }
  return (
    <>
       <div className="container mt-3">
                <div className="row offset-3">
                    <div className="col-md-9">
                        <form>
                            <div className="card shadow-2">
                                <div className="card-header bg-warning text-white">
                                    <h2 className="text-center">Update User Details</h2>
                                </div>
                                <div className="card-body bg-light">
                                    <div className="row mb-3 d-flex">
                                        <div className="col-3">
                                            <label className="form-label">Name:</label>
                                        </div>
                                        <div className="col-9">
                                            <input type="text" placeholder="Add your name.." className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="row mb-3 d-flex">
                                        <div className="col-3">
                                            <label className="form-label">Email:</label>
                                        </div>
                                        <div className="col-9">
                                            <input type="text" placeholder="Add your email.." className='form-control'value={email} onChange={(e)=>setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 d-grid justify-content-center">
                                            <Link to="/read">
                                            <button className="btn btn-outline-secondary mx-2">Back</button>
                                            </Link>
                                            <button className="btn btn-outline-success" type='submit' onClick={handleUpdate}>Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
    </>
  )
}

export default Update
