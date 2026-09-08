import React from 'react'
import Header from '../components/Header.jsx'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'



function Products() {

    return (
        <>
            <FontAwesomeIcon icon={faHouse} /><Header />
            <div className='text-center my-3 mx-5'>
                <h1 className='mb-5'>Products</h1>
                <div className='row pt-5'>
                    {/* Duplicate column Accordingly */}
                    <div className='col-md-3 mb-2'>
                        {/* card */}
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://cdn.prod.website-files.com/68943e66eaa53340cd489406/68be85d9f1c5d4f164d720b0_6735ebbc0a7dec8625bf45ff_8_Creative_Product_Photography_Ideas_You_Need_to_Try.webp"  />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
