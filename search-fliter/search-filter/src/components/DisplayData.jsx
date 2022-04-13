import { useState } from "react";
import dummydata from '../dummydata.json'



const DisplayData = () => {

    const [data,setdata] = useState(dummydata)
    return (  
        <div className="container">
                <input type="text" placeholder = "Search.." className ="form-control"
                style={{marginTop:50 ,marginBottom:20 , width:"50%"}} 
                />
                  { data.map((detail) => {
                       let {id,first_name,last_name,email,gender} = detail
                       return (<ul key={id} >   
                       <li onClick={() => setdata()}>{first_name}</li>
                       <li>{last_name}</li>
                       <li>{email}</li>
                       <li>{gender}</li>
                       </ul>)
                   })}
                
        </div>
    );
}
 
export default DisplayData ;