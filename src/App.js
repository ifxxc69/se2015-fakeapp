import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Product from './components/Product'
function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Product />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
