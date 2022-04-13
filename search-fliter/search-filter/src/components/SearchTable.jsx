import { useState } from "react";
import dummydata from '../dummydata.json'



const SearchTable = () => {

    const [data,setdata] = useState(dummydata)
    const [searchTerm, setsearchTerm] = useState("")
    const [order, setorder] = useState("ASC")

    const sorting = (col)=>{
        if(order === "ASC"){
            const sorted = [...data].sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            )
            setdata(sorted)
            setorder("DSC")
        }
        if(order === "DSC"){
            const sorted = [...data].sort((a,b)=>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            )
            setdata(sorted)
            setorder("ASC")
        }
    }
    return (  
        <div className="container">
                <input type="text" placeholder = "Search.." className ="form-control"
                style={{marginTop:50 ,marginBottom:20 , width:"50%"}} 
                onChange={(e)=>{
                    setsearchTerm(e.target.value)
                }}/>

                <table   class="table table-striped">
                    <thead >
                        <tr>
                            <th onClick={()=>sorting('first_name')}>First Name </th>
                            <th onClick={()=>sorting('last_name')}>Last Name</th>
                            <th onClick={()=>sorting('email')}>Email</th> 
                            <th  onClick={()=>sorting('gender')}>Gender</th>
                        </tr>
                    </thead>
               
                <tbody>
                   { data.filter(val=>{
                       if(searchTerm ===''){
                           return val
                       }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
                       ||val.last_name.toLowerCase().includes(searchTerm.toLowerCase())||
                       val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        val.gender.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                       }
                   }).map((detail) => {
                       let {id,first_name,last_name,email,gender} = detail
                       return (<tr key={id}>   
                       <td>{first_name}</td>
                       <td>{last_name}</td>
                       <td>{email}</td>
                       <td>{gender}</td>
                       </tr>)
                   })}
                </tbody>
            </table>
        </div>
    );
}
 
export default SearchTable;