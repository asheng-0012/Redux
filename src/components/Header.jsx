import { Container, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux'
import { searchProduct } from '../redux/slices/productSlice.js'

function Header({ insideHeader }) {
  const dispatch = useDispatch();
  const userWishlist = useSelector((state) => state.wishlistReducer)
  const userCart = useSelector((state) => state.cartReducer)

  return (
    <Navbar expand="lg" className="bg-primary fixed-top py-2" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link to={'/'} className="text-white text-decoration-none fw-bold">
            <FontAwesomeIcon icon={faTruckFast} className="me-2" />ECART
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-3">
            {insideHeader && (
              <Nav.Item>
                <input
                  type="text"
                  placeholder="Search..."
                  className="form-control rounded-3"
                  onChange={(e) => dispatch(searchProduct(e.target.value))}
                />
              </Nav.Item>
            )}
            <Nav.Item>
              <Link to={'/wishlist'} className="text-white text-decoration-none fw-bold">
                Wishlist <Badge pill bg="light" text="dark">{userWishlist?.length || 0}</Badge>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={'/cart'} className="text-white text-decoration-none fw-bold">
                Cart <Badge pill bg="light" text="dark">{userCart?.length || 0}</Badge>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header