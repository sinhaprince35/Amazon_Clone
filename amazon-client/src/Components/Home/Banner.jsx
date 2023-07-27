import React from 'react'
import './banner.css'
import Carousel from 'react-material-ui-carousel'


const data = [
  "https://trak.in/wp-content/uploads/2020/08/IMG_20200808_191750.jpg",
  "https://www.shopickr.com/wp-content/uploads/2015/09/amazon-india-discount-large-home-appliances-sale-2016.jpg",
  "https://s3b.cashify.in/gpro/uploads/2022/08/04184010/Amazon-Great-Freedom-Festival_-Top-5-Smartphone-Deals-To-Grab.jpg",
  "https://www.takemetechnically.com/wp-content/uploads/2023/05/amazon-great-summer-sale-2023-offers-up-to-70-off-on-gaming-laptops-and-gadgets-1024x576.webp",
  "https://img.etimg.com/photo/msid-93055715/instant-home-makeover.jpg"
]
const Banner = () => {
  return (
    <Carousel className='caraousel'>
      {
        data.map((imag, i) => {
          return (
            <>
              <img src={imag} alt='' className='banner_img'/>
            </>
          )
        })
      }
   </Carousel>
  )
}

export default Banner
