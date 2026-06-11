import {useState, useEffect} from 'react'
import axios from 'axios'   
import {Table} from 'react-bootstrap'
import {Card, Row, Col} from 'react-bootstrap'
function Product() {
    const[products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => {setProducts(response.data)
        })
        .catch(error => {
            console.error('Error fetching products:', error)
        })
    }, [])
    console.log(products)

  return (
    <div>
      <h2>List of products</h2>
      <Row>
        {products?.map((p) => (
          <Col md={3} key={p.id} className='mb-3'>
            <Card className = 'p-3 h-150'>
              <Card.Img variant="top" src={p.image} height={350} />
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>Price: ${p.price.toFixed(2)}</Card.Text>
                <Card.Text>Rating: {p.rating?.rate}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  //  <>
  //  <Table striped bordered hover>
  //   <thead>
  //     <tr>
  //       <th>ID</th>
  //       <th>Title</th>
  //       <th>Price</th>
  //       <th>Image</th>
  //       <th>Rating</th>


  //     </tr>

      
  //   </thead>
  //        <tbody>
  //       {
  //       products?.map((p) => (
  //         <tr key={p.id}>
  //           <td>{p.id}</td>
  //           <td>{p.title}</td>
  //           <td>{p.price}</td>
  //           <td><img src={p.image} width={40} height={40} /></td>
  //           <td>{p.rating?.rate}</td>
  //         </tr>
  //       )
  //       )
  //     }
  //     </tbody>
  //  </Table>
  //  </>
    


   
  )
}

export default Product
