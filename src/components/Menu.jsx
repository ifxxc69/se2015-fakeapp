import {Navbar, Nav, Button, Form} from 'react'-bootstrap'
import { NavLink } from 'react-bootstrap'

function Menu() {
  return (
    <Navbar bg='dark' variant='dark' >
        <Nav className='me-auto' >
            <NavLink className='p-3 ms-4' style={({isActive}) => (
                {
                    color: isActive ? 'red' : 'white'})} to="/home">Home</NavLink>
                         <NavLink className='p-3' style={({isActive}) => (
                {
                    color: isActive ? 'red' : 'white'})} to="/products">Products</NavLink>       
        </Nav>
         <Form className='d-flex'>
            <Form.Control className='me-3' type='search' placeholder='Enter title..'></Form.Control>
            <Button variant='outline-light'>Search</Button>
            
            
            </Form>   
                    
  )
}

export default Menu;