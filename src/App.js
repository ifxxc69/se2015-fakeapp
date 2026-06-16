import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Product from './components/Product'
import Categories from './components/Categories'
import Menu from './components/Menu'
import Products from './components/Products'
function App() {
  return (
    <BrowserRouter>
      <Container>
        <Menu />
        <Routes>
          <Route path="/home" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          
            
           
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
