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
    <div><h1 className="recipe-title">Recipe List</h1>
        <div className="recipe-container">
        {users.map(((user, index) => ( 
                <div className="recipe-boxes">
                    <h3>Recipe Name:</h3>
                    <h4>{user.name}</h4>
                    <h3>Course Type:</h3>
                    <h4>{user.course}</h4>
                    <h3>Technique Used:</h3>
                    <h4>{user.technique}</h4>
                    <h3>Ingredient List:</h3>
                    <p>{user.ingredients}</p>
                </div>   
                )))} 
        </div>
    </div>
     )}


export default Recipes;





