import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Read = () => {
  const [fetchData,setFetchData] = useState([]);  
  const[tableDark,setTableDark] = useState('');
  const getData = async ()=>{
    try{
        const resp = await axios.get(`https://62ef58ac8d7bc7c2eb785e76.mockapi.io/crud_ashit`);
        setFetchData(resp.data)
    }catch(error){
        window.alert(error)
    }
    

  }

  useEffect(()=>{
    getData();
  },[])
  const handleDelete=(id)=>{
    axios.delete(`https://62ef58ac8d7bc7c2eb785e76.mockapi.io/crud_ashit/${id}`)
    .then(()=>{
        getData();
    })
  }

  const setToLocaleStorage =(id,name,email)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
  }


  return (
    <>
    <div className="container mt-3">
      <div className="row">
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" onClick={()=>{
    (tableDark === 'table-dark')? setTableDark(""):setTableDark("table-dark");
   
  }}/>
  
</div>
        <div className="col-lg-10 offset-2">
        <table className={`table text-white ${tableDark}`}>
  <thead>
    <tr className="bg-info text-secondary">
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      
    </tr>
  </thead>
  <tbody>
    
      {
        fetchData.map((val)=>{
            return(
                <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <Link to='/update'>
                <button className="btn btn-outline-success mb-2 mx-2" onClick={()=>setToLocaleStorage(val.id,val.name,val.email)}>Edit</button>
                </Link>
                
                <button className="btn btn-outline-danger mb-2" onClick={()=>handleDelete(val.id)}>Delete</button>
              </tr>
            );
          
        })
      }
    

  </tbody>
</table>
      <Link to="/">
      <button className='btn btn-warning-outline'>Back</button>
      </Link>
        </div>
        
      </div>
    </div>
    
    </>
  )
}

export default Read
