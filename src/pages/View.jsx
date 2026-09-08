import React from 'react'
import Header from '../components/Header.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function View() {
  return (
    <>
    <Header/>
    <div className='container my-5 py-5'>
      <div className='row pt-5 align-items-center' style={{height:'80vh'}}>
        <div className='col-md-6 text-center'>
          <img src="https://cdn.prod.website-files.com/68943e66eaa53340cd489406/68be85d9f1c5d4f164d720b0_6735ebbc0a7dec8625bf45ff_8_Creative_Product_Photography_Ideas_You_Need_to_Try.webp" alt="Product" className='img-fluid' />
          <div className='d-flex justify-content-evenly mt-5'>
            <button className='btn btn-primary rounded'>Add to Cart</button>
            <button className='btn btn-danger rounded'><FontAwesomeIcon icon={faHeartCircleXmark} /></button>            
          </div>
        </div>
        <div className='col-lg-6 d-flex flex-column justify-content-center gap-2'>
          <h1>Title</h1>
          <h2 className='text-danger'>$100</h2>
          <h4>Brand:</h4>
          <h4>Category:</h4>
          <h4>Description:</h4>
          <h5>Client Reviews:</h5>
          <div className='border p-3 rounded shadow my-1'>
            <p><span className='fw-bold'>Name:</span> Message</p>
            <p>Rating: 4 <FontAwesomeIcon icon={faStar} className='text-warning' /></p>
          </div>
        </div>
      </div>
    </div>
    </>
   
  )
}

export default View