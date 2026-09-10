import React, { useEffect, useState } from 'react'
import Header from '../components/Header.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function View() {
  const {id} = useParams()
  const {allProducts} = useSelector(state=>state.productReducer)
  const [product,setProduct] = useState({})
  console.log(product)

  useEffect(()=>{
    setProduct(allProducts?.find(item=>item?.id==id))
  },[allProducts])



  return (
    <>
    <Header/>
    <div className='container my-5 py-5'>
      <div className='row pt-5 align-items-center' style={{height:'80vh'}}>
        <div className='col-md-6 text-center'>
          <img src={product?.thumbnail} alt="Product" className='img-fluid' />
          <div className='d-flex justify-content-evenly mt-5'>
            <button className='btn btn-primary rounded'>Add to Cart</button>
            <button className='btn btn-danger rounded'><FontAwesomeIcon icon={faHeartCircleXmark} />Remove from Cart</button>            
          </div>
        </div>
        <div className='col-lg-6 d-flex flex-column justify-content-center gap-2'>
          <h1>{product?.title}</h1>
          <h2 className='text-danger'>${product?.price}</h2>
          <h4>Brand: {product?.brand}</h4>
          <h4>Category: {product?.category}</h4>
          <h4>Description: {product?.description}</h4>
          <h5>Client Reviews:</h5>
          {
            product?.reviews?.map((item,index)=>
          <div key={index} className='border p-3 rounded shadow my-1'>
            <p><span className='fw-bold'>{item?.reviewerName}:</span> {item?.comment}</p>
            <p>Rating: {item?.rating} <FontAwesomeIcon icon={faStar} className='text-warning' /></p>
          </div>
          )
        }
        </div>
      </div>
    </div>
    </>
   
  )
}

export default View