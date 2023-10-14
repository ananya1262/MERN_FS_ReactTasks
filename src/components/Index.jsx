import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  const tableData = [
    { id: 1, name: 'Task 1', link: '/Task1' },
    { id: 2, name: 'Task 2', link: '/Task2' },
    { id: 3, name: 'Task 3', link: '/Task3' },
    { id: 4, name: 'Task 4', link: '/Task4' },
    { id: 4, name: 'Task 5', link: '/Task5' },
    { id: 5, name: 'Task 6', link: '/Task6'}
  ];
  return (
    <>
    <center>
      <div className="container " style={{ "align-items": "center","justify-content": "center","marginTop":"10%",background:"pink"}}>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Name</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <Link to={item.link}>{item.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </center>
    </>
  )
}

export default Home