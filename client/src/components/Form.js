import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import '../App.css';

const RegForm = ({ errors, touched, values, handleSubmit, status }) => {
    const [users, setUsers] = useState([]);
    console.log(users)

    useEffect(() => {
      axios.get(`http://localhost:5000/api/restricted/data`)
            .then(res => setUsers(res.data))
    }, []);

    //     if (status) {
    //       setUsers([...users, status]);
    //     }
    //   }, [status]);

    return (
        <div className="user-form">
      <h1>Registration Form</h1>
      <Form className='main-form'>
        <Field className='field' type="text" name="Username" placeholder="Username" />
        {touched.Username && errors.Username && (
          <p className="error">{errors.Username}</p>
        )}

        <Field className='field' type="text" name="Password" placeholder="Password" />
        {touched.Password && errors.Password && <p className="error">{errors.Password}</p>
        }

        <button className='btn' type="submit">Register</button>
      </Form>
     
        <div>
            {users.map(user => {
                return <p key={user.id}>{user.Username}</p>
            })}
        </div>
    </div>
  );
};

// Higher Order Component - HOC
// Hard to share component / stateful logic (custom hooks)
// Function that takes in a component, extends some logic onto that component,
// returns a _new_ component (copy of the passed in component with the extended logic)

const FormikRegForm = withFormik({
  mapPropsToValues({ Username, Password }) {
    return {
      Username: Username || '',
      Password: Password || '',
    };
  },

  validationSchema: Yup.object().shape({
    Username: Yup.string().required(),
    Password: Yup.string().required(),
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios.post('http://localhost:5000/api/register', values)
      .then(res => alert("User created successfully"))
        //  return setStatus(res.data);
      .catch(err => alert("false"));
    resetForm()
    }
})(RegForm); // currying functions in Javascript

export default FormikRegForm;
    