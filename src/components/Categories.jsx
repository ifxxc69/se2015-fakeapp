import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCate = async () => {
      try {
        const response = await axios.get('http://localhost:9999/Category');
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCate();
  }, []);

  return (
    <Row>
        {categories?.map((c) => (
            <Col className={'md-3'} md={2} xs={4} key={c.id}>
              <Link
                to={`/products/Category_ID=${c.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={c.logo}
                    alt={c.Category_Name}
                    style={{ width: '98%', borderRadius: '50%' }}
                  />
                  <h4>{c.Category_Name}</h4>
                </div>
              </Link>
            </Col>
        ))}
    </Row>

  );
}

export default Categories;