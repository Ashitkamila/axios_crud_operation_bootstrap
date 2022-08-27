import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const header = {"Access-Control-Allow-Origin":"*"}
    const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
   
    axios.post(
        'https://62ef58ac8d7bc7c2eb785e76.mockapi.io/crud_ashit',{
            name:name,
            email:email,
            header,
        
    }).then(()=>{
        navigate('/read')
    })
      .catch((error)=>window.alert(error));
      
  }  
    return (
        <>
            <div className="container mt-3">
                <div className="row offset-3">
                    <div className="col-md-9 col-sm-9 col-lg-9">
                        <form>
                            <div className="card shadow-2">
                                <div className="card-header bg-primary text-white">
                                    <h2 className="text-center">Create User Details</h2>
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
                                            <button className="btn btn-outline-info mt-2" type='submit'onClick={handleSubmit}>Add Details</button>
                                            <Link to='/read'>
                                            <button className="btn btn-outline-danger">show Data</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Create