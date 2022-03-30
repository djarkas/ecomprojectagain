import React, { useState, useEffect } from "react";
import "../App.css";
import Axios from "axios";



//function hdlSel(drpdownSel) {
  //  var selectedvalue = drpdownSel.value;
    //console.log(selectedvalue);
//}


// import Driplist from "./Driplist"

// document.querySelector("#Tops").onclick = function(){
//     {
//         Driplist.map(Data => {
//             if(Data.type === "Tops"){
//                 return 
//             }
//         })
//     }
//     }
const Filter = () => {
    const  [type, setType] =useState([]);

   const getTheType = (a) => {
       setType(a.target.value);
   };
   useEffect(() => {
       console.log(type);
   }
   )
    return (
      <>
 <label htmlFor="type">Type:</label>
                <select name="type" onChange={getTheType} id="type">
                  <option value="Tops">Tops</option>
                  <option value="Bottoms">Bottoms</option>
                  <option value="Hats">Hats</option>
                  <option value="Other">Other</option>
                  <option value="Shoes">Shoes</option>
                </select> 

</>
  );
};

export default Filter;