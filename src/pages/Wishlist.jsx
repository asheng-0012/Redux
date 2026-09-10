import Header from '../components/Header.jsx'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice.js';
import { addToCart } from '../redux/slices/cartSlice.js';
import { Link } from 'react-router-dom';

function Wishlist() {
  const userWishlist = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();

  const handleCart = (product) => {
    dispatch(addToCart(product));
    dispatch(removeFromWishlist(product?.id));
  };

  return (
    <>
      <Header />
      <div className="container my-5 pt-5">
        {userWishlist?.length > 0 ? (
          <div>
            <h1 className='text-center my-4'>User Wishlist</h1>
            <div className='row pt-4'>
              {userWishlist.map((product) => (
                <div key={product?.id} className='col-md-3 mb-4'>
                  <Card style={{ width: '18rem' }} className='shadow rounded'>
                    <Card.Img
                      variant="top"
                      src={product?.thumbnail}
                      style={{ height: '200px', objectFit: 'cover' }}
                      alt={product?.title}
                    />
                    <Card.Body>
                      <Card.Title className='text-truncate'>{product?.title}</Card.Title>
                      <div className='d-flex justify-content-evenly mt-4'>
                        <button
                          onClick={() => dispatch(removeFromWishlist(product?.id))}
                          className='btn btn-primary fs-4 rounded'
                          title="Remove from Wishlist"
                        >
                          <FontAwesomeIcon icon={faHeartCircleXmark} />
                        </button>
                        <button
                          onClick={() => handleCart(product)}
                          className='btn btn-danger fs-4 rounded'
                          title="Add to Cart"
                        >
                          <FontAwesomeIcon icon={faCartPlus} />
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ minHeight: '70vh' }} className="d-flex flex-column justify-content-center align-items-center">
            <img
              src="https://bexcart.com/assets/images/empty-cart.gif"
              alt="Empty Wishlist"
              style={{ maxWidth: '300px' }}
            />
            <h4 className="mt-3">Your Wishlist is Empty</h4>
            <Link to={'/'} className="btn btn-primary mt-2 rounded">Shop More</Link>
          </div>
        )}
      </div>
    </>
  )
}

export default Wishlist