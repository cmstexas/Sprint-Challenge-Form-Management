import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import '../App.css';

const RegForm = ({ errors, touched, values, handleSubmit, status }) => {
    const [users, setUsers] = useState([{Name:'Roger', Email:'r@gmail.com', Password:'pw', tos:false, id: Date.now()}]);
    console.log(status);
    console.log(users)

    useEffect(() => {
        if (status) {
          setUsers([...users, status]);
        }
      }, [status]);

    return (
        <div className="user-form">
      <h1>Registration Form</h1>
      <Form className='main-form'>
        <Field className='field' type="text" name="Name" placeholder="Name" />
        {touched.Name && errors.Name && (
          <p className="error">{errors.Name}</p>
        )}

        {/* <Field className='field' type="text" name="Email" placeholder="Email" />
        {touched.Email && errors.Email && (
        <p className="error">{errors.Email}</p>
        )} */}

        <Field className='field' type="text" name="Password" placeholder="Password" />
        {touched.Password && errors.Password && <p className="error">{errors.Password}</p>
        }

        {/* <label className="checkbox-container">
          Agree to Terms of Service?
         <Field type="checkbox" name="tos" checked={values.tos} />
         <span className="checkmark" />
        </label> */}

        <button className='btn' type="submit">Register</button>
      </Form>

      {users.map(user => {
        return <p key={user.id}>{user.Name}</p>
      })}
    </div>
  );
};

// Higher Order Component - HOC
// Hard to share component / stateful logic (custom hooks)
// Function that takes in a component, extends some logic onto that component,
// returns a _new_ component (copy of the passed in component with the extended logic)

const FormikRegForm = withFormik({
  mapPropsToValues({ Name, Password }) {
    return {
      Name: Name || '',
      Password: Password || '',
    };
  },

  validationSchema: Yup.object().shape({
    Name: Yup.string().required(),
    Password: Yup.string(),
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post('http://localhost:5000/api/register', values)
      .then(res => {
         return setStatus(res.data);
      })
      .catch(err => console.log(err.response));
    resetForm()
  }
})(RegForm); // currying functions in Javascript

export default FormikRegForm;
    