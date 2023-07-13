import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  useEffect(() => {
    return () => {
      setId(localStorage.getItem("id"));
      setName(localStorage.getItem("name"));
      setEmail(localStorage.getItem("email"));
    };
  }, [])


  const handleUpdate = (event) =>{
    event.preventDefault();
    axios.put(`https://64b03146c60b8f941af56286.mockapi.io/crudOper/${id}`,{
      name,email
    }).then(()=>{
      history('/read');
    });
  }



  return (
    <>
    
      <h2 style={{padding:'35px'}}>Update User</h2>

      <form  style={{padding:'10px 20px 3px 50px'}}>

      <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        </div>

        <br/>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <br/>
        
        <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Submit</button>
</form>

    </>
  )
}

export default Update