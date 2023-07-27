import React from 'react'
import './banner.css'
import Carousel from 'react-material-ui-carousel'


const data = [
  "https://trak.in/wp-content/uploads/2020/08/IMG_20200808_191750.jpg",
  "https://www.shopickr.com/wp-content/uploads/2015/09/amazon-india-discount-large-home-appliances-sale-2016.jpg",
  "https://trak.in/wp-content/uploads/2019/04/Untitled-design-5-2.jpg",
  "https://www.takemetechnically.com/wp-content/uploads/2023/05/amazon-great-summer-sale-2023-offers-up-to-70-off-on-gaming-laptops-and-gadgets-1024x576.webp",
  "https://imageio.forbes.com/blogs-images/forbes-finds/files/2018/07/PD.jpg?format=jpg&width=1200"
]
const Banner = () => {
  return (
    <Carousel className='caraousel'
      autoPlay={true}
      animation='slide'
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          backgroundColor: "white",
          color: "black",
          borderRadius: 0,
          marginTop: -22,
          height: "104px"
        }
      }}
    >
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
