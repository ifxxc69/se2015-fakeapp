import {useState,useEffect} from 'react';
import axios from 'axios';
import {Row,Col,Card} from 'react-bootstrap';
import { useParams, useSearchParams } from 'react-router-dom';


function Products() {
    const [products, setProducts] = useState([]);
    const [cateName, setCateName] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword') || '';
    const {id} = useParams();

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        let url ="http://localhost:9999/Product";
        let rs;
        if(keyword) {
            url+=`?Name_like=${keyword}`;
        }
        if(id) {
            rs = await axios.get(`${url}?Category_ID=${id}`); 
            const res1 = await axios.get(`http://localhost:9999/Category/${id}`);
            setCateName(res1.data.Category_Name);
        }else{
            rs = await axios.get(url); 
            setCateName('All products');
            
        }
        setProducts(rs.data);
    } 
    return ( 
        <div >
            <h2>{cateName}</h2>
            <Row>
                {products?.map((p) => ( // 5. Sửa: "Products" (chữ P hoa) -> "products" (chữ p thường) để đúng với tên state
                    <Col md={3} key={p.id}>
                        <Card className='h-100'>
                            {/* 6. Sửa: style = {height:250, width:300}} thành style={{height:250, width:300}} */}
                            <Card.Img src={p.Images} style={{height:250, width:300}} /> 
                            <h5>{p.Name}</h5>
                            <p style={{fontStyle:'bold', color:'red'}}><b>{p.Price} VND</b></p>
                        </Card>
                    </Col>
                )) }
            </Row>
        </div>
    )
}

export default Products;