import {  useState } from "react";
import { Form, Button } from "react-bootstrap";
import NavBar from "../../component/nav/NavBar";
import { loginUser } from "./loginAction";
import {useDispatch, useNavigate } from "react-router-dom";


const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formFields = [
    {
      id: "email",
      label: "Email address",
      type: "email",
      placeholder: "Enter email",
      text: "We'll never share your email with anyone else.",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
    },
  ];

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((formValues) => ({
      ...formValues,
      [id]: value,
    }));
  };


  // Async 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    
    // console.log("Form Submitted with:", { ...formValues });
dispatch(  loginUser({...formValues}, navigate))
  // const {data, status} = await 
  };

  return (<>
    <NavBar/>
    <div
      style={{
        height: "80dvh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent:"center"
      }}
    >
   
      <Form
        className='login_form'
        style={{
          height: "40vh",
          width: "40rem",
          margin: "2rem auto",
          
          // padding: "1rem",
        }}
        onSubmit={handleSubmit}
      >
        <h1>Login to exTracker</h1>

        {formFields.map((field) => (
          <Form.Group
            className='mb-3'
            controlId={field.id}
            key={field.id}
          >
            <Form.Label>{field.label}</Form.Label>
            <Form.Control
              type={field.type}
              placeholder={field.placeholder}
              value={formValues[field.id]}
              onChange={handleInputChange}
            />
            {field.text && (
              <Form.Text className='text-muted'>{field.text}</Form.Text>
            )}
          </Form.Group>
        ))}

        <Button
          variant='primary'
          type='submit'
        >
          Submit
        </Button>
      </Form>
    </div></>
  
  );
};

export default LoginForm;


//redux persist -- 