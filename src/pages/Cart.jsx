import Header from '../components/Header.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCartItem, emptyCart, incrementCartItem, removeCartItem } from '../redux/slices/cartSlice.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

function Cart() {
  const userCart = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const totalPrice = userCart?.reduce((total, item) => total + (item.totalPrice || item.price * item.quantity), 0) || 0

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementCartItem(item.id))
    } else {
      dispatch(removeCartItem(item.id))
    }
  }

  const handleCheckout = () => {
    dispatch(emptyCart())
    Swal.fire({
      title: "Order Placed!",
      text: "Your order has been placed successfully. Thank you for shopping with us!",
      icon: "success",
      confirmButtonText: "OK",
    })
    navigate('/')
  }

  return (
    <>
      <Header />
      <div className='container my-5 pt-5'>
        {userCart?.length > 0 ? (
          <div>
            <h1 className='text-center my-4'>User Summary</h1>
            <div className='row pt-3'>
              <div className='col-md-8 border rounded p-4'>
                <table className='table align-middle'>
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
                  <tbody className='text-center'>
                    {userCart.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>
                          <img
                            width={'70px'}
                            height={'50px'}
                            className="img-fluid rounded"
                            src={item.thumbnail}
                            alt={item.title}
                          />
                        </td>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <button
                              onClick={() => handleDecrement(item)}
                              className="btn btn-outline-secondary btn-sm"
                            >
                              -
                            </button>
                            <input
                              style={{ width: '70px' }}
                              type="text"
                              className="form-control text-center mx-2"
                              value={item.quantity}
                              readOnly
                            />
                            <button
                              onClick={() => dispatch(incrementCartItem(item.id))}
                              className="btn btn-outline-secondary btn-sm"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>${Number(item.totalPrice || item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <button
                            onClick={() => dispatch(removeCartItem(item.id))}
                            className="btn btn-danger btn-sm"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className='float-end mt-3'>
                  <button onClick={() => dispatch(emptyCart())} className="btn btn-danger me-3">
                    Empty Cart
                  </button>
                  <Link to={'/'} className="btn btn-primary">
                    Shop More
                  </Link>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='rounded p-4 shadow border'>
                  <h5>
                    Total <span>{userCart.length} </span>Items
                  </h5>
                  <h3>
                    Total Amount: <span className='text-danger'>${totalPrice.toFixed(2)}</span>
                  </h3>
                  <hr />
                  <div className='d-grid gap-2'>
                    <button onClick={handleCheckout} className="btn btn-success">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ minHeight: '70vh' }} className="d-flex flex-column justify-content-center align-items-center">
            <img
              src="https://bexcart.com/assets/images/empty-cart.gif"
              alt="Empty Cart"
              style={{ maxWidth: '300px' }}
            />
            <h4 className="mt-3">Your Cart is Empty</h4>
            <Link to={'/'} className="btn btn-primary mt-2 rounded">
              Shop More
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart