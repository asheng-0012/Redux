import React, { useState } from 'react'
import Header from '../components/Header.jsx'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice.js'
import { Link } from 'react-router-dom'
import { faBackwardStep, faForwardStep } from '@fortawesome/free-solid-svg-icons';


function Products() {
    const { loading, allProducts, error } = useSelector((state) => state.productReducer)
    const dispatch = useDispatch()

    // pagination
    const [currentPage,setCurrentPage] = useState(1)
    const productsPerPage = 8
    const totalpages = Math.ceil(allProducts?.length/productsPerPage)
    const currentPageLastIndex = currentPage*productsPerPage
    const currentPageFirstIndex = currentPageLastIndex - productsPerPage
    const visibleProductsArray = allProducts?.slice(currentPageFirstIndex,currentPageLastIndex)

    useEffect(() => {
        dispatch(getAllProducts())
    }, []);

    const navtonextPage =()=>{
        currentPage != totalpages && setCurrentPage(currentPage+1)
    }

    const navtoprevPage =()=>{
        currentPage !=1 && setCurrentPage(currentPage-1)
    }

    return (
        <>
            <Header insideHeader />
            <div className='text-center mx-5' >
                {
                    loading ?
                    <div className='text-center py-5 fw-bolder'>Loading...</div>
                    : 
                        <div className='row pt-5'>
                            {/* Duplicate column Accordingly */}
                            {
                                visibleProductsArray.length > 0 ?
                                 visibleProductsArray.map((product) => (
                                    <div key={product?.id} className='col-md-3 mb-2'>
                            
                                {/* card */}
                                
                                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.thumbnail} />
                            <Card.Body>
                                <Card.Title>{product?.title}</Card.Title>
                                <Link to={'/products/' + product?.id} className='btn btn-primary'>View Product</Link>
                            </Card.Body>
                        </Card>
                        </div>
                                 ))
                                :
                                <div className='text-center py-5 fw-bolder'>No Products Found</div>
                            }
                    </div>
                }
                <div className='text-center my-3 fs-5 fw-bolder'>
                    <button onClick={navtoprevPage} className='btn'><FontAwesomeIcon icon={faBackwardStep} /></button>
                    {currentPage} of {totalpages}
                    <button onClick={navtonextPage} className='btn'><FontAwesomeIcon icon={faForwardStep} /></button>
                </div>
            </div>
        </>
    )
}

export default Products
