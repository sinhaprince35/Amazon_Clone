import React from 'react'
import './banner.css'
import Carousel from 'react-material-ui-carousel'


const data = [
  "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
  "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/09/GIF_amazon.png?ssl=1",
  "https://infocoverage.com/wp-content/uploads/2021/10/Amazon-Great-Indian-Festival-Sale-Offers.jpg",
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
