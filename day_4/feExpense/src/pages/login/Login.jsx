import React from "react";
import { Button, Form } from "react-bootstrap";
import "./login.css";

const Login = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        // margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "yellow",
      }}
    >
      <Form
        className='login_form'
        style={{
          height: "60vh",
          width: "40rem",
          margin: "0 auto",
          // justifyContent: "center",
          // alignContent: "center",
          // alignItems: "center",
          marginTop: "10rem",
          // backgroundColor: "red",
          // padding: "11rem",
        }}
      >
        <h1> login to exTracker</h1>
        <Form.Group
          className='mb-3'
          controlId='formBasicEmail'
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group
          className='mb-3'
          controlId='formBasicPassword'
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
          />
        </Form.Group>
        {/* <Form.Group
          className='mb-3'
          controlId='formBasicCheckbox'
        >
          <Form.Check
            type='checkbox'
            label='Check me out'
          />
        </Form.Group> */}
        <Button
          variant='primary'
          type='submit'
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
