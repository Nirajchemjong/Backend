// import React from "react"
import { Button, Form } from "react-bootstrap";
import NavBar from "../../component/nav/NavBar";
import { useState} from "react";
import { createUser } from "./registeAction";
export const Register = () => {

  const inputFields= [{
    name: "username", 
    type: "text", 
    label: "Username"
  }, {
    name: "email", 
    type: "email", 
    label: "Email"
  }, {
    name: "password", 
    type: "password", 
    label: "Password"
  }
]
const [input, setInput] = useState({});
const handleOnchange =(e)=>{
  const {value, name} = e.target;
  // console.log(e.target) 
  // console.log ("value", "name", value, name)
  setInput(()=>({...input,[name]:value}))
}

const handleOnSubmit = (e) => {
  
  e.preventDefault();
console.table(input);
  createUser(input)


}


  return (
  <>
    <NavBar/> 
    <div className="register_form">
       <Form onSubmit={handleOnSubmit} style={{width:"60dvw", margin:"2rem auto"}} >
      {
        inputFields.map(item=>(<Form.Group className="mb-3" controlId={`formBasic${item.name}`} key={item.name}><Form.Label key={item.name}>{item.label}</Form.Label> <Form.Control  onChange={handleOnchange} name={item.name} type={item.type} placeholder={item.name}/ >  </Form.Group>))
      }
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
       </Form>
    </div>

  </>

  )
}
