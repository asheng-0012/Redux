import Header from '../components/Header.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { addToWishlist } from '../redux/slices/wishlistSlice.js'
import { addToCart } from '../redux/slices/cartSlice.js'

function View() {
  const { id } = useParams()
  const { allProducts } = useSelector((state) => state.productReducer)
  const dispatch = useDispatch()
  const userWishlist = useSelector((state) => state.wishlistReducer)

  const product = allProducts?.find((item) => item?.id == id)

  const handleWishlist = () => {
    const existingproduct = userWishlist?.find((item) => item?.id == product?.id)
    if (existingproduct) {
      Swal.fire({
        title: "Sorry!!",
        text: "Product Already in Wishlist!!!",
        icon: "warning",
        confirmButtonText: "OK",
      })
    } else {
      dispatch(addToWishlist(product))
      Swal.fire({
        title: "Success",
        text: "Product Added to Wishlist!",
        icon: "success",
        confirmButtonText: "OK",
      })
    }
  }

  const handleCart = () => {
    dispatch(addToCart(product))
    Swal.fire({
      title: "Success",
      text: "Product Added to Cart!",
      icon: "success",
      confirmButtonText: "OK",
    })
  }

  return (
    <>
      <Header />
      <div className='container my-5 py-5'>
        <div className='row pt-5 align-items-center' style={{ height: '80vh' }}>
          <div className='col-md-6 text-center'>
            <img src={product?.thumbnail} alt="Product" className='img-fluid' />
            <div className='d-flex justify-content-evenly mt-5'>
              <button onClick={handleWishlist} className='btn btn-primary rounded'>
                <FontAwesomeIcon icon={faHeart} className='me-2' />Add to Wishlist
              </button>
              <button onClick={handleCart} className='btn btn-success rounded'>
                <FontAwesomeIcon icon={faCartPlus} className='me-2' />Add to Cart
              </button>            
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
              product?.reviews?.map((item, index) => (
                <div key={index} className='border p-3 rounded shadow my-1'>
                  <p><span className='fw-bold'>{item?.reviewerName}:</span> {item?.comment}</p>
                  <p>Rating: {item?.rating} <FontAwesomeIcon icon={faStar} className='text-warning' /></p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default View