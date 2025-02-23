import React, { useState } from "react";
import { Link } from "react-router-dom";
function Users(){
    const [users,setUsers]=useState([{
        name:"chetana Patil",Email:"chetanaPatil@gmail",Age:20
    }])
    return(

        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rouded p-3">
         <Link to ="/create" className="btn btn-success">Add</Link>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=> {

                       return <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>
                        <Link to="/update" className="btn btn-success">Update</Link>
                        <button>Delete</button>
                        </td>
                    </tr>

                    })
                }
           
            </tbody>
          </table>
        </div>
      </div>
    )
}
  
  
  export default Users;
  

