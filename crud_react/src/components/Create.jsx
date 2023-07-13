import React,{ useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router";


const Create = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();


  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post("https://64b03146c60b8f941af56286.mockapi.io/crudOper",{
      name,email
    }).then(()=>{
      history('/read');
    });
  }



  return (
    <>
    
      <h2 style={{padding:'35px'}}>Create User</h2>

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
        
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>

    </>
  )
}

export default Create
