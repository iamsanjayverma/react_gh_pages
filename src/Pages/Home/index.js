import React from 'react'
import Navbar from '../../Navbar/index'


function index() {

    const Ale = () => {
        alert("working now")
    }
    return (
        
        <>
            <Navbar />

                <div className='container'>   
                <div className='cart-section'>

                            <div className='cart'>
                                <div className='cart-img'>
                                    <img src='' title='Cart image' alt=''/>
                                </div>
                                <div className='cart-box'>
                                    <h2 className='car-box-title'>Cart title 1</h2>
                                    <p className='car-box-description'> 
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                                    </p>

                                    <button className='car-box-btn' onClick={Ale}>Add to Cart</button>

                                </div>

                            </div>

                            <div className='cart'>
                                <div className='cart-img'>
                                    <img src='' title='Cart image' alt=''/>
                                </div>
                                <div className='cart-box'>
                                    <h2 className='car-box-title'>Cart title 2</h2>
                                    <p className='car-box-description'> 
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                                    </p>

                                    <button className='car-box-btn' onClick={Ale}>Add to Cart</button>

                                </div>

                            </div>

                            <div className='cart'>
                                <div className='cart-img'>
                                    <img src='' title='Cart image' alt=''/>
                                </div>
                                <div className='cart-box'>
                                    <h2 className='car-box-title'>Cart title 3</h2>
                                    <p className='car-box-description'> 
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                                    </p>

                                    <button className='car-box-btn' onClick={Ale}>Add to Cart</button>

                                </div>

                            </div>
                            <div className='cart'>
                                <div className='cart-img'>
                                    <img src='' title='Cart image' alt=''/>
                                </div>
                                <div className='cart-box'>
                                    <h2 className='car-box-title'>Cart title 4</h2>
                                    <p className='car-box-description'> 
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                                    </p>

                                    <button className='car-box-btn' onClick={Ale}>Add to Cart</button>

                                </div>

                            </div>

                            <div className='cart'>
                                <div className='cart-img'>
                                    <img src='' title='Cart image' alt=''/>
                                </div>
                                <div className='cart-box'>
                                    <h2 className='car-box-title'>Cart title 5</h2>
                                    <p className='car-box-description'> 
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                                    </p>

                                    <button className='car-box-btn' onClick={Ale}>Add to Cart</button>

                                </div>

                            </div>
                            <div className='cart'>
                                <div className='cart-img'>
                                    <img src='' title='Cart image' alt=''/>
                                </div>
                                <div className='cart-box'>
                                    <h2 className='car-box-title'>Cart title 6</h2>
                                    <p className='car-box-description'> 
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                                    </p>

                                    <button className='car-box-btn' onClick={Ale}>Add to Cart</button>

                                </div>

                            </div>


                </div>
            </div>


        </>
    )
}

export default index