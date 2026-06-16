import React from 'react';
import { Navbar, Nav, Button, Form, Container } from 'react-bootstrap';
// Import NavLink từ react-router-dom để dùng được tính năng isActive và thuộc tính "to"
import { NavLink, useNavigate } from 'react-router-dom'; 
import { useState } from 'react';


function Menu() {
  const[keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault(); navigate(`/products?search=${keyword}`);
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Nav className="me-auto">
          {/* Sử dụng NavLink của react-router-dom kết hợp class của Bootstrap nếu cần */}
          <NavLink 
            className="p-3 ms-4 text-decoration-none" 
            style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })} 
            to="/home"
          >
            Home
          </NavLink>
          
          <NavLink 
            className="p-3 text-decoration-none" 
            style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })} 
            to="/products"
          >
            Products
          </NavLink>       
        </Nav>

        <Form className="d-flex" onSubmit = {handleSearch}>
          <Form.Control 
            className="me-3" 
            type="search" value={keyword} onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter title.." 
          />
          <Button type = 'submit' variant="outline-light">Search</Button>
        </Form>   
      </Container>
    </Navbar> 
  );
}

export default Menu;