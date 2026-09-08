import React from 'react'
import Header from '../components/Header.jsx'
import { Link } from 'react-router-dom'


function Cart() {
  return (  
    <>
    <Header/>
    <div className='container my-5 py-5'>
      <h1 className='text-center mx-5 mt-5'> User Summary</h1>
      <div className='row pt-3'>
        <div className='col-md-8 border rounded p-5'>
          <table className='table'>
            <thead className='text-center'>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Title</td>
                <td><img width={'70px'} height={'50px'} className="img-fluid" src="https://cdn.prod.website-files.com/68943e66eaa53340cd489406/68be85d9f1c5d4f164d720b0_6735ebbc0a7dec8625bf45ff_8_Creative_Product_Photography_Ideas_You_Need_to_Try.webp" alt="product" /></td>
                <td>
                  <div className="d-flex">
                    <button className="btn fs-1">-</button>
                    <input style={{ width: '70px'}} type="text" className="form-control" value={10} readOnly />
                    <button className="btn fs-1">+</button>
                  </div>
                </td>
                <td>$20.00</td>
                <td><button className="btn btn-danger">x</button></td>
              </tr>
            </tbody>
          </table>
          <div className='float-end mt-3'>
            <button className="btn btn-danger me-3">Empty Cart</button>
            <Link to={'/'} className="btn btn-primary ms-2">Shop More</Link>
          </div>  
        </div>
        <div className='col-md-4'> 
          <div className='rounded p-5 shadow border'>
            <h5>Total <span>5 </span>Items</h5>
            <h3>Total Amount: <span className='text-danger'>$100.00</span></h3>
            <hr />
            <div className='d-grid gap-2'>
              <button className="btn btn-success">Checkout</button>
            </div>
          </div>
        </div>
      </div>  
    </div>
    </>
  )
}

export default Cart