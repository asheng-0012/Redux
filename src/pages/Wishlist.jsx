import React from 'react'
import Header from '../components/Header.jsx'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Wishlist() {
  return (
    <>
      <Header />
      <div className='container my-5 py-5'>
        <h1 className='text-center mb-5'> User Wishlist</h1>
        <div className='row pt-5'>
          {/* Duplicate column Accordingly */}
          <div className='col-md-3 mb-2'>
            {/* card */}
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://cdn.prod.website-files.com/68943e66eaa53340cd489406/68be85d9f1c5d4f164d720b0_6735ebbc0a7dec8625bf45ff_8_Creative_Product_Photography_Ideas_You_Need_to_Try.webp" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <div className='d-flex justify-content-evenly mt-5'>
                  <button className='btn btn-primary fs-4 rounded'><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
                  <button className='btn btn-danger fs-4  rounded'><FontAwesomeIcon icon={faCartPlus} /></button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

    </>
  )
}

export default Wishlist