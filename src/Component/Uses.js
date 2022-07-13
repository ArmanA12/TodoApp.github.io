import React,{useState} from "react";

function Users(){
    const [users,setUsers] = useState([
        {
            id:1,
            name:'arman shekh',
            email:'some@gmail.com'
        },
        {
            id:1,
            name:'mister shekh',
            email:'some@gmail.com'
        },
        {
            id:1,
            name:'khan shekh',
            email:'some@gmail.com'
        },
        {
            id:1,
            name:'shaikh shekh',
            email:'some@gmail.com'
        }
    ])
    return(
        <table class="table table-dark" >
  <thead>
  <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
   {
    users.map(user =>{
        return (
        <tr>
      <th >{user.id}</th>
      <th >{user.name}</th>
      <th >{user.email}</th>
    </tr>
        )
    })
   }
  </tbody>
</table>
    );
}
export default Users;