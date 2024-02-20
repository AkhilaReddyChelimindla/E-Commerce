import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>An ecommerce website is an online domain or resource specifically designed to support an ecommerce business. Ecommerce is the art of buying and selling goods and services online. Rather than managing transactions in person, you use digital tools, such as hosting solutions, checkout pages, and payment processors, to connect with consumers all over the world.</p>
            <p>E-commerce websites usually display products or services in detaiiled 
                descriptions, images, prices and any available varities
                (e.g., sizes, colors). Each product usually has its own dedicated relevant information.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox