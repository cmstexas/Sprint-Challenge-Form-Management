import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Recipes = (props) => {
    const [users, setUsers] = useState([]);
    console.log(users)

    useEffect(() => {
      axios.get(`http://localhost:5000/api/restricted/data`)
            .then(res => setUsers(res.data))
    }, []);

    return (
    <div>
       {users.map((user => ( 
            <div>
                <h2>Recipes</h2>
                <h3>{user.name}</h3>
                <h3>{user.course}</h3>
                <h4>{user.technique}</h4>
                <p>{user.ingredients}</p>
            </div>   
            )))} 
    </div>
     )}


export default Recipes;







// const Recipes = (props) => {
//     return (
//     <div>
//        {users.map((user => ( 
//             <div>
//                 <h2>Recipes</h2>
//                 <h3>{user.name}</h3>
//                 <h3>{user.course}</h3>
//                 <h4>{user.technique}</h4>
//                 <p>{user.ingredients}</p>
//             </div>   
//             )))} 
//     </div>
//      )}


// export default Recipes;


// {meals.map((recipe) => ( 
