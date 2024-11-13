import React, { useState,useEffect} from 'react';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import './services.css';

function Services () {
  const navigate = useNavigate();
  const handleArea = () => {
    navigate("/area");
  };

  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [business, setBusiness] = useState('');
  const [error, setError] = useState('');

  useEffect(()=> {
    const fetchCustomers=async()=>{
      try{
        const response=await axios.get('http://localhost:3000/customers');
        setCustomers(response.data);
      }
      catch(error){
        console.error("Error fetching customers:", error); 
      }
    };

    fetchCustomers();
  },[]);
   
  
    const addCustomer = async (e) => {
      e.preventDefault();
      if (!name || !email || !business) {
        setError('Please fill in all fields');
        return;
      }
      setError('');
      const newCustomer = { name, email, business };
    
      try {
        const response = await axios.post('http://localhost:3000/customers', newCustomer);
        setCustomers([...customers, response.data]);
        setName('');
        setEmail('');
        setBusiness('');
      } catch (error) {
        console.error("Error adding customer:", error);
      }
    };
    

  
  const deleteCustomer = async (index) => {
    try {
      await axios.delete(`http://localhost:3000/customers/${index}`);
      setCustomers(customers.filter((customer) => customer.index !== index));
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };
  
    

  return (
    <div className="app-container">
      <h1>Create Customer</h1>
      <div className="form-container">
        <form onSubmit={addCustomer} className="customer-form">
          <h2>Add New Customers</h2>
          {error && <p className="error">{error}</p>}
          <input
            type="text"
            placeholder="Customer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Customer Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Customer Business"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
          />
          <button type="submit" className="add-btn">Add Customer</button>
        </form>
      </div>

      <div className="dashboard">
        <h2>Customer Dashboard</h2>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Business</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>
                  <button className="elite" onClick={handleArea}>{customer.business}</button>
                </td>
                <td>
                  <button onClick={() => deleteCustomer(customer.index)} className="delete-button">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Services;
