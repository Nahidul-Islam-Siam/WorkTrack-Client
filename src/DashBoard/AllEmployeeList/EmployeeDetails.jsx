import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../Component/Hook/UseAuth';


const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

const {user} = useAuth()


  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://work-track-server.vercel.app/employee/${id}`);
        setEmployee(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching employee:', error);
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

 
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!employee) {
    return <p>Employee not found</p>;
  }


  
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Employee Details</h2>
      <div className="border rounded-lg p-4">
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Designation:</strong> {employee.designation}</p>
        {employee.image_url && <img src={employee.image_url} alt={`${employee.name}'s photo`} className="mt-4 rounded-full w-32 h-32 object-cover" />}
      </div>
    </div>
  );
};

export default EmployeeDetails;
