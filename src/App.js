import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Product from './components/Product'
import Categories from './components/Categories'
import Menu from './components/Menu'
function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/home" element={<Categories />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
