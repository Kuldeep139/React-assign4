import React from 'react'
import './style.css'
import {Link} from 'react-router-dom';

const Students = () => {
    return ( <>

    <h1>Student Details</h1>
    
    <Link to="/AddStudents">
    <button className='btn'>Add Students</button>
    </Link>

        <div className='tab'>
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Rajesh</td>
      <td>25</td>
      <td>Full-Stack</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Sanjay</td>
      <td>26</td>
      <td>Java Developer</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Suraj</td>
      <td>24</td>
      <td>Python Developer</td>
    </tr>
  </tbody>
</table>
</div>


</>

     );
}
 
export default Students;