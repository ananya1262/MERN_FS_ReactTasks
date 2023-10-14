import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Task4() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get('https://dummyjson.com/users');
          setUsers(response?.data?.users);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
  
      fetchUsers();
    }, []);
  return (
    <div className="container" style={{maxHeight:"80vh", overflowY:"auto"}}>
    <h1 className="m-4 text-center" style={{color:"white"}}>User Table</h1>
    <table className="table table-striped table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          <th>Sno</th>
          <th>ProfilePic</th>
          <th>FirstName</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Age</th>
          <th>Username</th>
          <th>Address</th>
          <th>Birth Date</th>
          <th>IP</th>
          <th>Height</th>
          <th>Bank</th>
          <th>Company</th>
          <th>University</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td><img src={`${user.image}`} alt="abc" style={{'height':'60px'}} /></td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td>{user.username}</td>
            <td>{user.address.address}, {user.address.city}</td>
            <td>{user.birthDate}</td>
            <td>{user.ip}</td>
            <td>{user.height}</td>
            <td>{user.bank.cardExpire}</td>
            <td>{user.company.name}</td>
            <td>{user.university}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Task4