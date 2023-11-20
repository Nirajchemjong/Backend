import { Button, Form } from "react-bootstrap"
import NavBar from "../../component/nav/NavBar"
import { useState } from "react"

export const Register = () => {
  const inputFields= [{
    name: "email", 
    type: "email", 
    label: "Email address"
  }, {
    name: "password", 
    type: "password", 
    label: "password"
  }, {
    name: "confirmPassword", 
    type: "password", 
    label: "Confirm password"
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
  console.log(input)
}


  return (<>
    <NavBar/> 
    <div className="register_form">
       <Form onSubmit={handleOnSubmit} style={{width:"60dvw", margin:"2rem auto"}} >
       {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Well never share your email with anyone else.
        </Form.Text>
      </Form.Group> */}



      
      {
        inputFields.map(item=>(<Form.Group className="mb-3" controlId={`formBasic${item.name}`} key={item.name}><Form.Label key={item.name}>{item.label}</Form.Label> <Form.Control  onChange={handleOnchange} name={item.name} type={item.type} placeholder={item.type}/ >  </Form.Group>))
      }
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
       </Form>
    </div>

  </>

  )
}
