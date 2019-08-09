// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// function Recipes(recipe) {
//     const [meals, setMeals] = useState([])
//     useEffect(() => {
//         axios.get('http://localhost:5000/api/restricted/data')
//         .then(res => {
//             setMeals(res.data);
//         })
//         .catch(error => {
//             console.log('Error', error)
//         })
//     })

// } [setMeals]


//     return (
//     <div>
//         {meals.map((recipe) => ( 
//             <div>
//                 <p>key={recipe.id}</p>
//                 <p>{recipe.name}</p>
//                 <p>{recipe.course}</p>
//                 <p>{recipe.technique}</p>
//                 <p>{recipe.ingredients}</p>
//             </div>    
//         ))}
//     </div>
// )


// export default Recipes;
